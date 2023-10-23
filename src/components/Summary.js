import React from "react";

export default function Summary(props) {
  const { totalPrice } = props;
  return <div>I am Summary{totalPrice}</div>;
}
