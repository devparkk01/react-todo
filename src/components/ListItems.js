import React from "react" ; 
import "../index.css"  ;
import ListItem from "./ListItem";

const ListItems = (props) => {
    return (
        <div className = "task-container">
            {props.items.length ? props.items.map( (item)=> (<ListItem key = {item.id} id = {item.id} item = {item} onDeleteItem = {props.onDeleteItem}/>)) : <p className = "no-item-text">No item Added </p> }
            
        </div>
    )
}

export default ListItems ; 