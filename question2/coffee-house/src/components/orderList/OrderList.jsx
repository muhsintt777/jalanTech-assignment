import React from "react";
import OrderItem from "./orderItem/OrderItem";
import "./OrderList.css";

const OrderList = ({ orderArr, deleteItem }) => {
  const renderedItems = orderArr.map((order) => (
    <OrderItem key={order.id} order={order} deleteItem={deleteItem} />
  ));

  return (
    <div className="body-container">
      <section>
        <p>Ordered Items:</p>
        {renderedItems}
      </section>
    </div>
  );
};

export default OrderList;
