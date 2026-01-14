import { ReactElement } from "react";
import { PickNPlaceItems } from "react-pickplace";

export const handleOrderChange = (
  newItems: PickNPlaceItems,
  setItems: (items: any[]) => void,
  setReactElements: (elements: ReactElement[]) => void
) => {
  if (
    newItems.length > 0 &&
    typeof newItems[0] === "object" &&
    "id" in newItems[0]
  ) {
    setItems(newItems);
  } else {
    setReactElements(newItems as ReactElement[]);
  }
};
