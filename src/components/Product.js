import { useState } from "react";
export default function Product(props) {
  const initialAmount = 0;

  const [amount, setAmount] = useState(initialAmount);
  function addItem() {
    setAmount((amount) => amount + 1);
  }

  function subtractItem() {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
  }

  return (
    <article
      style={{
        backgroundColor: props.soldOut ? "red" : "green",
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
      <p>Items: {amount}</p>
      <button onClick={addItem}>Add</button>
      <button onClick={subtractItem}>Subtrct</button>
    </article>
  );
}
