import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import OrderList from "./components/orderList/OrderList";
import Footer from "./components/footer/Footer";

function App() {
  const [orderArr, setOrderArr] = useState([]);
  const [bill, setBill] = useState(0);

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

    setOrderArr([...orderArr, order]);

    const currentBill = bill;
    const newBill = currentBill + price;
    setBill(newBill);
  };

  const deleteItem = (id) => {
    const newArr = orderArr.filter((order) => order.id !== id);
    setOrderArr(newArr);
  };

  return (
    <div className="App">
      <Header />
      <Menu addItem={addItem} />
      <OrderList
        orderArr={orderArr}
        deleteItem={deleteItem}
        bill={bill}
        setBill={setBill}
      />
      <Footer bill={bill} />
    </div>
  );
}

export default App;
