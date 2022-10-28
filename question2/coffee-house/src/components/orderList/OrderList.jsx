import React from "react";
import OrderItem from "./orderItem/OrderItem";
import "./OrderList.css";

const OrderList = ({ orderArr, deleteItem, bill, setBill }) => {
  const renderedItems = orderArr.map((order) => (
    <OrderItem
      key={order.id}
      order={order}
      deleteItem={deleteItem}
      bill={bill}
      setBill={setBill}
    />
  ));

  return (
    <div className="body-container">
      <section>
        <p className="orderList-section__para1">Ordered Items:</p>
        {!renderedItems.length ? (
          <p className="orderList-section__para2">Empty</p>
        ) : (
          renderedItems
        )}
      </section>
    </div>
  );
};

export default OrderList;
