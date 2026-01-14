import React, { useState, ReactElement } from "react";
import PickNPlace, {
  type PickNPlaceItem,
  type PickNPlaceItems,
} from "react-pickplace";

const App: React.FC = () => {
  // Test with original PickNPlaceItem[] format
  const [items, setItems] = useState<PickNPlaceItem[]>([
    { id: 1, content: "One" },
    { id: 2, content: "Two" },
    { id: 3, content: "Three" },
    { id: 4, content: "Four" },
    { id: 5, content: "Five" },
    { id: 6, content: "Six" },
    { id: 7, content: "Seven" },
    { id: 8, content: "Eight" },
    { id: 9, content: "Nine" },
    { id: 10, content: "Ten" },
  ]);

  // Test with ReactElement[] format
  const [reactElements, setReactElements] = useState<ReactElement[]>([
    <div key="a" style={{ padding: "10px", background: "#f0f0f0" }}>
      Element A
    </div>,
    <div key="b" style={{ padding: "10px", background: "#e0e0e0" }}>
      Element B
    </div>,
    <div key="c" style={{ padding: "10px", background: "#d0d0d0" }}>
      Element C
    </div>,
  ]);

  const handleOrderChange = (newItems: PickNPlaceItems) => {
    // Type guard to check if it's PickNPlaceItem[]
    if (
      newItems.length > 0 &&
      typeof newItems[0] === "object" &&
      "id" in newItems[0]
    ) {
      setItems(newItems as PickNPlaceItem[]);
    } else {
      setReactElements(newItems as ReactElement[]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Pick-n-Place Demo</h1>

      <div style={{ marginTop: "40px" }}>
        <h1 className="mb-5 text-rose-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim
          laborum nobis labore adipisci veritatis impedit deleniti corporis
          facere, animi, esse fugiat quod. Molestias hic ab harum minima natus
          earum error. Impedit sunt est veritatis, eius quos deleniti, iste
          reiciendis veniam error ipsam pariatur. Velit perferendis eius
          asperiores accusantium delectus perspiciatis maxime voluptates
          voluptate temporibus eum nihil at odio repellendus quas ex soluta,
          aliquid excepturi tenetur, ipsum cupiditate. Doloribus officia totam
          in aliquid autem ab corrupti, et perspiciatis praesentium mollitia
          deserunt molestias nostrum, voluptatum enim accusantium fugit dolorem.
          Dolor at, corporis doloribus vel amet ipsum rem nostrum commodi porro
          quia.
        </h1>
        <PickNPlace items={items} onOrderChange={handleOrderChange} />

        <h1 className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim
          laborum nobis labore adipisci veritatis impedit deleniti corporis
          facere, animi, esse fugiat quod. Molestias hic ab harum minima natus
          earum error. Impedit sunt est veritatis, eius quos deleniti, iste
          reiciendis veniam error ipsam pariatur. Velit perferendis eius
          asperiores accusantium delectus perspiciatis maxime voluptates
          voluptate temporibus eum nihil at odio repellendus quas ex soluta,
          aliquid excepturi tenetur, ipsum cupiditate. Doloribus officia totam
          in aliquid autem ab corrupti, et perspiciatis praesentium mollitia
          deserunt molestias nostrum, voluptatum enim accusantium fugit dolorem.
          Dolor at, corporis doloribus vel amet ipsum rem nostrum commodi porro
          quia.
        </h1>
      </div>

      <section style={{ marginBottom: "40px" }}>
        <h2>Demo 2: ReactElement[] format</h2>
        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <PickNPlace items={reactElements} onOrderChange={handleOrderChange} />
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Demo 3: Inline JSX elements</h2>
        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <PickNPlace
            items={[
              <div key="x" className="custom-item">
                <span style={{ fontWeight: "bold" }}>Custom Item 1</span>
                <span style={{ color: "#666", marginLeft: "10px" }}>
                  Description here
                </span>
              </div>,
              <div key="y" className="custom-item">
                <span style={{ fontWeight: "bold" }}>Custom Item 2</span>
                <span style={{ color: "#666", marginLeft: "10px" }}>
                  Another description
                </span>
              </div>,
              <div key="z" className="custom-item">
                <span style={{ fontWeight: "bold" }}>Custom Item 3</span>
                <span style={{ color: "#666", marginLeft: "10px" }}>
                  More details
                </span>
              </div>,
            ]}
            onOrderChange={(newOrder) => {
              console.log("React elements reordered:", newOrder);
            }}
          />
        </div>
      </section>

      <section>
        <h2>Demo 4: Mapping data to JSX</h2>
        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <PickNPlace
            items={[
              { name: "Apple", color: "red" },
              { name: "Banana", color: "yellow" },
              { name: "Cherry", color: "red" },
              { name: "Grape", color: "purple" },
            ].map((fruit, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  background: "#fff",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: fruit.color,
                  }}
                />
                <span>{fruit.name}</span>
              </div>
            ))}
            onOrderChange={(newOrder) => {
              console.log("Fruits reordered:", newOrder);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
