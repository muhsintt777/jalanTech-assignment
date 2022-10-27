import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container">
      <section>
        <p>Order here:</p>
        <table>
          <tr>
            <th>
              <span className="menu-table__span">Product/Add-on</span>
            </th>
            <th>Milk</th>
            <th>Cream</th>
            <th>Latte</th>
          </tr>
          <tr>
            <th>Espresso</th>
            <td>60</td>
            <td>75</td>
            <td>100</td>
          </tr>
          <tr>
            <th>Cappuccino</th>
            <td>80</td>
            <td>90</td>
            <td>125</td>
          </tr>
          <tr>
            <th>Latte</th>
            <td>100</td>
            <td>125</td>
            <td>150</td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Menu;
