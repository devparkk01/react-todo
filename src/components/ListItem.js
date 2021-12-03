import React from "react";
import "../index.css";
import trashIcon from "../trash.svg";

const ListItem = (props) => {
  const deleteItem = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <div className="list-item row jc-space-between">
      <span>{props.item.description}</span>
      <img src={trashIcon} className="delete-icon" onClick={deleteItem} />
    </div>
  );
};

export default ListItem;
