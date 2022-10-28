import React from "react";
import "./OrderItem.css";

const OrderItem = ({ order, deleteItem }) => {
  return (
    <article className="orderItem-article">
      <p>
        <b>{order.name}</b>
      </p>
      <p>
        <b>{order.addOn}</b>
      </p>
      <p>{order.price} &#8377;</p>
      <button onClick={() => deleteItem(order.id)}>Delete</button>
    </article>
  );
};

export default OrderItem;
