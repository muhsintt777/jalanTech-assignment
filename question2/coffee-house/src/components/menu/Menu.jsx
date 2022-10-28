import React from "react";
import "./Menu.css";

const Menu = ({ addItem }) => {
  return (
    <div className="body-container">
      <section>
        <p>Order here:</p>
        <table>
          <thead>
            <tr>
              <th>
                <span className="menu-table__span">Product/Add-on</span>
              </th>
              <th>Milk</th>
              <th>Cream</th>
              <th>Latte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Espresso</th>
              <td onClick={() => addItem("Espresso", "Milk", 60)}>60</td>
              <td onClick={() => addItem("Espresso", "Cream", 75)}>75</td>
              <td onClick={() => addItem("Espresso", "Latte", 100)}>100</td>
            </tr>
            <tr>
              <th>Cappuccino</th>
              <td onClick={() => addItem("Cappuccino", "Milk", 80)}>80</td>
              <td onClick={() => addItem("Cappuccino", "Cream", 90)}>90</td>
              <td onClick={() => addItem("Cappuccino", "Latte", 125)}>125</td>
            </tr>
            <tr>
              <th>Latte</th>
              <td onClick={() => addItem("Latte", "Milk", 100)}>100</td>
              <td onClick={() => addItem("Latte", "Cream", 125)}>125</td>
              <td onClick={() => addItem("Latte", "Latte", 150)}>150</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Menu;
