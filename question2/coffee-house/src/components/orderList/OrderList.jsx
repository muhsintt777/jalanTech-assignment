import React from "react";
import "./OrderList.css";

const OrderList = ({ orderArr }) => {
  const renderedItems = orderArr.map((order) => (
    <article key={order.id}>
      <p>
        Item: {order.name} Add-on: {order.addOn}
      </p>
      <p>{order.price} $</p>
      <button>Delete</button>
    </article>
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
