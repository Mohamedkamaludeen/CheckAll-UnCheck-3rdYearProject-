import React, { useEffect, useState } from "react";
//import CardItem from "./CardItem";

const items = [
  {
    id: 1,
    name: "Shirt",
    price: 2000,
  },
  {
    id: 2,
    name: "Trouser",
    price: 2500,
  },
  {
    id: 3,
    name: "Jurcy",
    price: 1800,
  },
  {
    id: 4,
    name: "Cap",
    price: 1200,
  },
  {
    id: 5,
    name: "Shoe",
    price: 4500,
  },
];
function getTotalPriceOfCheckedItems(checkboxState, items) {
  let totalPrice = 0;
  items.forEach((item) => {
    if (checkboxState[item.id]) {
      totalPrice += item.price;
    }
  });
  return totalPrice;
}
function Card(props) {
  const [checkboxState, setCheckboxState] = useState({});
  const  { setTotalprice } = props;

  useEffect(() => {
    const totalPrice = getTotalPriceOfCheckedItems(checkboxState, items);
    setTotalprice(totalPrice);
  }, [checkboxState, setTotalprice]);

  const toggleAllCheckboxes = (checked) => {
    const newCheckboxState = {};
    items.forEach((item) => {
      newCheckboxState[item.id] = checked;
    });
    setCheckboxState(newCheckboxState);
  }

  const handleCheckboxChange = (id) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  const  areAllCheckboxesChecked = () => {
    return items.every((item) => checkboxState[item.id]);
  }

  return (
    <div>
      <div>
        <p>************************************</p>
        <div>
          <label>
            <input
              type="checkbox"
              id="option-all"
              onChange={(e) => toggleAllCheckboxes(e.target.checked)}
              checked={areAllCheckboxesChecked()}
            />
            Check All
          </label>
        </div>
        <p>************************************</p>
      </div>

      {items.map((item) => (
        <div key={item.id}>
          <p>************************************</p>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <label>
            <input
              type="checkbox"
              id={item.id}
              onChange={() => handleCheckboxChange(item.id)}
              checked={checkboxState[item.id] || false}
            />
            {item.name}
          </label>
          <p>************************************</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
