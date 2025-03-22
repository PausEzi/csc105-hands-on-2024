import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { name: newItem, bought: false }]);
      setNewItem("");
    }
  };

  const updateItem = (index, updatedItem) => {
    const updatedItems = items.map((item, i) => (i === index ? updatedItem : item));
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="shopping-container">
      <h2>Shopping List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <ShoppingItem
            key={index}
            item={item}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
  