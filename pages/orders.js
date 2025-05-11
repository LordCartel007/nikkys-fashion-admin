import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <br />
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr>
                <td>{new Date(order.createdAt).toLocaleString()}</td>

                <td className={order.paid ? "text-green-600" : "text-red-600"}>
                  {order.paid ? "Yes" : "No"}
                </td>

                <td class=" text-start ">
                  Name: {order.name}
                  <br />
                  Email: {order.email}
                  <br />
                  City : {order.city} {order.postalCode}
                  <br />
                  Country: {order.country}
                  <br />
                  Street: {order.streetAddress}
                  <br />
                  No : {order.phoneNumber}
                </td>
                <br />
                <br />

                <td className="text-center">{order.product_Items}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
