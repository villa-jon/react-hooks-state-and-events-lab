import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import Filter from "./Filter"; 


function App() {
  const [items, setItems] = useState(itemData);
  const [isOn, setOn] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleClick() {
    setOn((isOn) => (!isOn))
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
      {/* <Filter/> */}
    </div>
  );
}

export default App;
