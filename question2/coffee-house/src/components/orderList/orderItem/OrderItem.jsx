import React from "react";
import "./OrderItem.css";

const OrderItem = ({ order, deleteItem, setBill, bill }) => {
  const handleDelete = () => {
    deleteItem(order.id);
    const billBeforeDelete = bill;
    const billAfterDelete = billBeforeDelete - order.price;
    setBill(billAfterDelete);
  };
  return (
    <article className="orderItem-article">
      <p>
        <b>{order.name}</b>
      </p>
      <p>
        <b>{order.addOn}</b>
      </p>
      <p>{order.price} &#8377;</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default OrderItem;
