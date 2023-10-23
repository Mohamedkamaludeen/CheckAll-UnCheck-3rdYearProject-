import React, { useState } from "react";
//import SelectAllItem from "./SelectAllItem";
import Card from "./Card";
import Summary from "./Summary";

export default function Main() {
  const [totalPrice, setTotalprice] = useState(0);

  return (
    <div>
      <Card setTotalprice={setTotalprice} />
      <Summary totalPrice={totalPrice} />
    </div>
  );
}
