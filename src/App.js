import React , {useState} from "react" ; 
import Form from "./components/Form" ; 
import ListItems from "./components/ListItems";



const App = () => {
  const [allItems , setAllItems] = useState([]) ; 


  const deleteItemHandler = (id) => {
    const updatedItems = allItems.filter( (item) => item.id !== id )
    setAllItems(updatedItems) ; 
  }

  const addNewItem = (newItem ) => {
    // console.log(newItem) ;
    setAllItems([ ...allItems , newItem]) ; 
  }

  return (
    <div className = "app-background">
      <p className = "heading-text "> To Do List</p>
      <Form onAddNewItem = {addNewItem}/>
      <ListItems items = {allItems} onDeleteItem = {deleteItemHandler} /> 
    </div>
  )
}
export default App;
