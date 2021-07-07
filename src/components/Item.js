import React, {useState} from "react";

function Item({ name, category }) {
  const [isOn, setOn] = useState(false)
  
  function handleClick() {
    setOn((isOn) => (!isOn))
  }

  const appClass = isOn ? "in-cart" : ""

  return (
    <li className= {appClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      className = {appClass}
      onClick = {handleClick}
      >Add to Cart</button>
    </li>
  );
}

export default Item;
