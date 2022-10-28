import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import OrderList from "./components/orderList/OrderList";

function App() {
  const [orderArr, setOrderArr] = useState([
    { id: "1", name: "Espresso", addOn: "Milk", price: 60 },
    { id: "2", name: "Espresso", addOn: "Milk", price: 60 },
    { id: "3", name: "olakka", addOn: "chakka", price: 100 },
    { id: "4", name: "olakka", addOn: "chakka", price: 100 },
    { id: "5", name: "olakka", addOn: "chakka", price: 100 },
  ]);

  // class Orders {
  //   constructor(id, name, addOn, price) {
  //     this.id = id;
  //     this.name = name;
  //     this.addOn = addOn;
  //     this.price = price;
  //   }
  // }

  const addItem = (name, addOn, price) => {
    const id = uuidv4();

    setOrderArr([
      ...orderArr,
      {
        id,
        name,
        addOn,
        price,
      },
    ]);
  };

  const deleteItem = (id) => {
    const newArr = orderArr.filter((order) => order.id !== id);
    setOrderArr(newArr);
  };

  return (
    <div className="App">
      <Header />
      <Menu addItem={addItem} />
      <OrderList orderArr={orderArr} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
