import React, {useState} from "react";
import Item from "./Item";
// import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")

  function handleChange(event) {
    setCategory(event.target.value)
  }

  const display = items.filter((item) => {
    if (selectedCategory === "All") return true; 

    return item.category === selectedCategory;
  }); 

  return (
    <div className="ShoppingList">
      {/* <Filter onCategoryChange = {handleChange} /> */}
    <div className="Filter">
			<select name="filter" onChange = {handleChange} >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
			</select>
		</div>
      <ul className="Items">
        {display.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
