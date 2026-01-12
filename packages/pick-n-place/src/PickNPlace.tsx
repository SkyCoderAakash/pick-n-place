import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactElement,
} from "react";

export interface PickNPlaceItem {
  id: string | number;
  content: React.ReactNode;
}

export type PickNPlaceItems = PickNPlaceItem[] | ReactElement[];

export interface PickNPlaceProps {
  items: PickNPlaceItems;
  onOrderChange?: (newOrder: PickNPlaceItems) => void;
}

type PositionItem = {
  el: HTMLElement;
  rect: DOMRect;
  originalIndex: number;
  currentIndex: number;
  itemId: string | number;
};

const stylesVariables = {
  olGap: 8,
  olPaddding: 16,
  itemPaddingY: 12,
  itemPaddingX: 16,
};

const PickNPlace: React.FC<PickNPlaceProps> = ({ items, onOrderChange }) => {
  const listRef = useRef<HTMLOListElement>(null);
  const ghostRef = useRef<HTMLElement | null>(null);
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const positionsRef = useRef<PositionItem[]>([]);
  const prevScrollY = useRef<number>(window.scrollY);

  const [internalItems, setInternalItems] = useState<PickNPlaceItem[]>(() => {
    if (Array.isArray(items) && items.length > 0) {
      // Check if first item is a ReactElement
      const firstItem = items[0];
      if (React.isValidElement(firstItem)) {
        // Convert React elements to PickNPlaceItem format
        return (items as ReactElement[]).map((element, index) => ({
          id: element.key || index,
          content: element,
        }));
      } else {
        return items as PickNPlaceItem[];
      }
    }
    return [];
  });

  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      const firstItem = items[0];
      if (React.isValidElement(firstItem)) {
        const newItems = (items as ReactElement[]).map((element, index) => ({
          id: element.key || index,
          content: element,
        }));
        setInternalItems(newItems);
      } else {
        setInternalItems(items as PickNPlaceItem[]);
      }
    } else {
      setInternalItems([]);
    }
  }, [items]);

  /* -------------------- PICK MODE -------------------- */
  const enterPickMode = useCallback(
    (index: number) => {
      if (!listRef.current || pickedIndex !== null) return;

      setPickedIndex(index);

      const list = listRef.current;
      const originals = Array.from(list.children) as HTMLElement[];

      const initialPositions: PositionItem[] = originals.map((el, idx) => ({
        el,
        rect: el.getBoundingClientRect(),
        originalIndex: idx,
        currentIndex: idx,
        itemId: internalItems[idx].id,
      }));

      positionsRef.current = initialPositions;

      // Hide originals and create clones
      initialPositions.forEach(({ el, rect }, i) => {
        el.style.opacity = "0";

        const clone = el.cloneNode(true) as HTMLElement;
        clone.dataset.clone = "true";
        clone.dataset.index = i.toString();

        // Remove buttons from clone
        const buttons = clone.querySelector(".pnp-buttons");
        if (buttons) {
          clone.removeChild(buttons);
        }

        clone.classList.add("pnp-clone");
        if (i === index) {
          clone.classList.add("pnp-picked");
        }

        Object.assign(clone.style, {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          pointerEvents: "none",
          opacity: i === index ? "0" : "1",
          transform: `translate(${
            rect.left - list.getBoundingClientRect().left
          }px, ${rect.top - list.getBoundingClientRect().top}px)`,
          zIndex: "10",
        });

        list.appendChild(clone);
      });

      // Create ghost
      const pickedEl = originals[index];
      const ghost = pickedEl.cloneNode(true) as HTMLElement;

      // Remove buttons from ghost
      const ghostButtons = ghost.querySelector(".pnp-buttons");
      if (ghostButtons) {
        ghost.removeChild(ghostButtons);
      }

      const ghostRect = pickedEl.getBoundingClientRect();

      Object.assign(ghost.style, {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: `${ghostRect.width}px`,
        height: `${ghostRect.height}px`,
        transform: `translate(${ghostRect.left}px, ${ghostRect.top}px)`,
        zIndex: "100",
        opacity: "1",
      });

      // Inject Cancel / Place buttons
      const btnWrap = document.createElement("div");
      Object.assign(btnWrap.style, {
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        gap: "8px",
      });

      const cancelBtn = document.createElement("button");
      cancelBtn.className = "pnp-cancel";
      Object.assign(cancelBtn.style, {
        padding: "4px 12px",
        fontSize: "14px",
        backgroundColor: "#dc2626",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      });
      cancelBtn.textContent = "Cancel";

      const placeBtn = document.createElement("button");
      placeBtn.className = "pnp-place";
      Object.assign(placeBtn.style, {
        padding: "4px 12px",
        fontSize: "14px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      });
      placeBtn.textContent = "Place";

      btnWrap.appendChild(cancelBtn);
      btnWrap.appendChild(placeBtn);
      ghost.appendChild(btnWrap);
      document.body.appendChild(ghost);
      ghostRef.current = ghost;

      const handleCancel = () => exitPickMode(false);
      const handlePlace = () => exitPickMode(true);

      cancelBtn.addEventListener("click", handleCancel);
      placeBtn.addEventListener("click", handlePlace);

      // Store handlers for cleanup
      ghostRef.current.dataset.cancelHandler = handleCancel.toString();
      ghostRef.current.dataset.placeHandler = handlePlace.toString();
    },
    [pickedIndex, internalItems]
  );

  /* -------------------- EXIT PICK MODE -------------------- */
  const exitPickMode = useCallback(
    (isPlace: boolean) => {
      if (!listRef.current) return;
      const list = listRef.current;
      const currentPositions = positionsRef.current;

      if (currentPositions.length === 0) {
        setPickedIndex(null);
        return;
      }

      if (ghostRef.current) {
        const ghost = ghostRef.current;
        const cancelBtn = ghost.querySelector(".pnp-cancel");
        const placeBtn = ghost.querySelector(".pnp-place");

        // Remove event listeners
        cancelBtn?.removeEventListener(
          "click",
          eval(`(${ghost.dataset.cancelHandler})`)
        );
        placeBtn?.removeEventListener(
          "click",
          eval(`(${ghost.dataset.placeHandler})`)
        );
      }

      if (isPlace) {
        const sortedPositions = [...currentPositions].sort(
          (a, b) => a.currentIndex - b.currentIndex
        );

        // Create new items array in the new order
        const newOrder: PickNPlaceItem[] = [];
        sortedPositions.forEach((p) => {
          // Find the item by id
          const item = internalItems.find((it) => it.id === p.itemId);
          if (item) {
            newOrder.push(item);
          }

          // Restore element
          p.el.style.transition = "";
          p.el.style.transform = "";
          p.el.style.opacity = "1";
          list.appendChild(p.el);

          // Update indices
          const newIndex = newOrder.length - 1;
          p.originalIndex = newIndex;
          p.currentIndex = newIndex;
        });

        // Update internal state
        setInternalItems(newOrder);

        // Notify parent if callback provided
        if (onOrderChange) {
          // Convert back to original format if needed
          const originalFirstItem = Array.isArray(items) && items[0];
          if (React.isValidElement(originalFirstItem)) {
            // Return React elements in new order
            const reactElements = newOrder.map(
              (item) => item.content as ReactElement
            );
            onOrderChange(reactElements);
          } else {
            // Return PickNPlaceItem format
            onOrderChange(newOrder);
          }
        }

        // Update positionsRef
        positionsRef.current = sortedPositions.map((p, idx) => ({
          ...p,
          originalIndex: idx,
          currentIndex: idx,
        }));
      } else {
        currentPositions.forEach((p) => {
          p.el.style.transition = "";
          p.el.style.transform = "";
          p.el.style.opacity = "1";
        });
      }

      ghostRef.current?.remove();
      ghostRef.current = null;

      Array.from(list.children).forEach((el) => {
        if ((el as HTMLElement).dataset.clone) el.remove();
      });

      setPickedIndex(null);
    },
    [internalItems, onOrderChange, items]
  );

  /* -------------------- SCROLL SWAP WITH CONSTRAINT -------------------- */
  const handleScroll = useCallback(() => {
    if (!ghostRef.current || pickedIndex === null || !listRef.current) return;

    const list = listRef.current;
    const ghost = ghostRef.current;
    const currentPositions = positionsRef.current;

    const currentScrollY = window.scrollY;
    const scrollDirY = currentScrollY - prevScrollY.current;
    prevScrollY.current = currentScrollY;

    const ghostRect = ghost.getBoundingClientRect();
    const ghostCenterY = ghostRect.top + ghostRect.height / 2;

    const listRect = list.getBoundingClientRect();
    const listStyle = getComputedStyle(list);
    const listSpacing = parseFloat(listStyle.gap || "12");

    let ghostOffset = 0;
    if (listRect.top + listSpacing > ghostRect.top) {
      ghostOffset = listRect.top + listSpacing - ghostRect.top;
    } else if (ghostRect.bottom > listRect.bottom - listSpacing) {
      ghostOffset = listRect.bottom - listSpacing - ghostRect.bottom;
    }

    if (ghostOffset !== 0) {
      const currentTransform = ghost.style.transform;
      const match = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      if (match) {
        const x = match[1];
        const y = match[2];
        ghost.style.transform = `translate(${x}, calc(${y} + ${ghostOffset}px))`;
      }
    }

    const domItems = Array.from(list.children).filter(
      (el) => !(el as HTMLElement).dataset.clone
    );

    let targetIndex = pickedIndex;

    if (ghostCenterY > listRect.top + listRect.height) {
      targetIndex = domItems.length - 1;
    } else if (scrollDirY >= 0) {
      for (let i = 0; i < domItems.length; i++) {
        const itemRect = domItems[i].getBoundingClientRect();
        if (ghostCenterY < itemRect.top) {
          targetIndex = i - 1;
          break;
        }
        targetIndex = domItems.length - 1;
      }
    } else {
      for (let i = 0; i < domItems.length; i++) {
        const itemRect = domItems[i].getBoundingClientRect();
        if (ghostCenterY < itemRect.bottom) {
          targetIndex = i;
          break;
        }
        targetIndex = 0;
      }
    }

    targetIndex = Math.max(0, Math.min(targetIndex, domItems.length - 1));

    if (targetIndex !== pickedIndex) {
      const newPositions = [...currentPositions];
      const itemA = newPositions.find((p) => p.currentIndex === pickedIndex);
      const itemB = newPositions.find((p) => p.currentIndex === targetIndex);

      if (itemA && itemB && itemA !== itemB) {
        const tempIndex = itemA.currentIndex;
        itemA.currentIndex = itemB.currentIndex;
        itemB.currentIndex = tempIndex;

        positionsRef.current = newPositions;

        newPositions.forEach((position) => {
          const originalPosition = currentPositions.find(
            (p) => p.el === position.el
          );
          if (!originalPosition) return;

          const offsetY =
            (position.currentIndex - originalPosition.currentIndex) *
            position.rect.height;

          position.el.style.transition = "transform 0.2s ease";
          position.el.style.transform = `translateY(${offsetY}px)`;
        });

        setPickedIndex(targetIndex);
      }
    }
  }, [pickedIndex]);

  useEffect(() => {
    if (pickedIndex !== null) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pickedIndex, handleScroll]);

  /* -------------------- RENDER -------------------- */
  return (
    <ol
      ref={listRef}
      className="pnp-list"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f3f4f6",
        borderRadius: "12px",
        gap: `${stylesVariables.olGap}px`,
        padding: `${stylesVariables.olPaddding}px`,
        listStyle: "none",
        margin: 0,
      }}
    >
      {internalItems.map((item, index) => (
        <li
          key={item.id}
          className="pnp-item pnp-real"
          data-index={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "8px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            backgroundColor: "white",
            padding: `${stylesVariables.itemPaddingY}px ${stylesVariables.itemPaddingX}px`,
            transition: "transform 0.2s ease",
          }}
        >
          <span
            style={{
              fontWeight: 500,
              color: "#1f2937",
              fontSize: "16px",
            }}
          >
            {item.content}
          </span>
          <div className="pnp-buttons">
            {pickedIndex === null && (
              <button
                onClick={() => enterPickMode(index)}
                className="pnp-pick"
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "6px",
                  backgroundColor: "#059669",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Pick
              </button>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default PickNPlace;
