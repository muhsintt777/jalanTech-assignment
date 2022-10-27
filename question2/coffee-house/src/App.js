import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import OrderList from "./components/orderList/OrderList";

function App() {
  const [orderArr, setOrderArr] = useState([]);

  class Orders {
    constructor(id, name, addOn, price) {
      this.id = id;
      this.name = name;
      this.addOn = addOn;
      this.price = price;
    }
  }

  const addItem = (name, addOn, price) => {
    const id = uuidv4();
    const order = new Orders(id, name, addOn, price);
    setOrderArr(...orderArr, order);
  };

  return (
    <div className="App">
      <Header />
      <Menu addItem={addItem} />
      <OrderList orderArr={orderArr} />
    </div>
  );
}

export default App;
