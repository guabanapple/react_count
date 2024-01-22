import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const DATA = [
    { id: 0, name: "Salad", price: 400 },
    { id: 1, name: "Steak", price: 1000 },
    { id: 2, name: "Hamburger", price: 700 },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);
  const total =
    DATA[0].price * counts[0] +
    DATA[1].price * counts[1] +
    DATA[2].price * counts[2];

  const onMinus = (menuId) => {
    const newCounts = [...counts];
    const count = newCounts[menuId];
    if (count > 0) {
      newCounts[menuId]--;
      setCounts(newCounts);
    }
  };

  const onPlus = (menuId) => {
    const newCounts = [...counts];
    newCounts[menuId]++;
    setCounts(newCounts);
  };

  const menus = DATA.map((menu) => {
    return (
      <Menu
        key={menu.id}
        menuId={menu.id}
        name={menu.name}
        price={menu.price}
        count={counts[menu.id]}
        onMinus={onMinus}
        onPlus={onPlus}
      />
    );
  });

  return (
    <div className="container">
      <h1>Menu List</h1>
      <ul className="menuList">{menus}</ul>
      <p>合計： {total}円</p>
    </div>
  );
}

export default App;
