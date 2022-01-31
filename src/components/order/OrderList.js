import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
<<<<<<< HEAD


=======
import useFatch from "../../useFatch";
>>>>>>> fb0b3a2cf85bd9019fa14c5081d3489c3fa6234c
/* import { useState } from "react"; */
const OrderList = ({ order, product }) => {
  const sum = [];
  const [notification, setNotification] = useState("");
  const { id } = useParams();
  const goToOrder = useNavigate();
<<<<<<< HEAD
  const handleClick = () => {
    fetch("http://localhost:8000/order/" + id, {
=======
  const handelClick = () => {
    fetch("http://localhost:8000/order/" + order.id, {
>>>>>>> fb0b3a2cf85bd9019fa14c5081d3489c3fa6234c
      method: "DELETE",
    }).then(console.log(order));
  };
  useEffect(() => {
    setNotification(order.length);
  }, []);
  return (
    <div className="order-list">
      <div className="order-navbar">
        <h2>
          You have <span>{notification}</span> items in your shopping cart!{" "}
        </h2>
      </div>
      {order.map((order) => (
        <div className="order-block" key={(order.id, order.product)}>
          <div className="order-card">
            {order.product.map((product) => (
              <div className={`card ${product.company}`} key={product.id}>
                <h3>{product.title}</h3>
                <p>${order.amount}</p>
              </div>
            ))}
          </div>
          <div className="order-info">
            <ul>
              <li>Receiver: {order.receiver}</li>
              <li>Receiver mail: {order.receiverMail}</li>
              <li>Value: {order.amount}</li>
            </ul>
            <button className="my-btn" onClick={handleRemove}>
              Delete
            </button>
            <span className="bugs">{sum.push(parseInt(order.amount))};</span>
          </div>
        </div>
      ))}
      <div className="order-summary-payment">
        <h3>Subtotal: ${sum.reduce((a, v) => a + v)}</h3>
        <button className="my-btn">
          Checkout ${sum.reduce((a, v) => a + v)}
        </button>
      </div>
    </div>
  );
};

export default OrderList;
