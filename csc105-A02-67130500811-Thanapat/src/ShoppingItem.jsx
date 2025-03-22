import React, { useState } from "react";
import "./ShoppingList.css";

const ShoppingItem = ({ item, index, updateItem, removeItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  const toggleBought = () => {
    if (!isEditing) {
      updateItem(index, { ...item, bought: !item.bought });
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editedName.trim()) {
        updateItem(index, { ...item, name: editedName });
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={`shopping-item ${item.bought ? "bought" : ""}`}
      onClick={toggleBought}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span>{item.name}</span>
      )}
      <div className="buttons">
        <button onClick={(e) => { e.stopPropagation(); handleEdit(); }}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={(e) => { e.stopPropagation(); removeItem(index); }}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default ShoppingItem;
