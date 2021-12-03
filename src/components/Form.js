import React , {useState} from "react";
import "../index.css" ; 

const Form = (props) => {
  const [enteredItem, setEnteredItem] = useState("");

  const changeItemHandler = (event) => {
    setEnteredItem(event.target.value) ;
  }

  const addNewItemHandler = (event) => {
    const newItem = {"id" : Math.random().toString() ,  "description" : enteredItem} ; 
    props.onAddNewItem(newItem) ; 
  }


  return (
    <div className= "task-container">
        <div>
            <input className = "text-input" placeholder = "Add New items" onChange = {changeItemHandler} />
            <button className = "add-button" onClick = {addNewItemHandler}>ADD</button>
        </div>
    </div>

  );
};

export default Form;
