import React from "react";

export default function Menu(props) {
  const minus = () => {
    props.onMinus(props.menuId);
  };
  const plus = () => {
    props.onPlus(props.menuId);
  };

  return (
    <li>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      {props.name}({props.price}円 × {props.count}個)
    </li>
  );
}
