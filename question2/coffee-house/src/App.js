import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import OrderList from "./components/orderList/OrderList";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <OrderList />
    </div>
  );
}

export default App;
