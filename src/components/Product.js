/* import { useState } from "react";
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
        backgroundColor: props.soldout ? "red" : "green",
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
 */

import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const color = props.soldout ? "red" : "green";

  function minus() {
    setAmount((oldAmount) => {
      if (oldAmount > 0) {
        return oldAmount - 1;
      }
      return 0;
    });
  }
  function plus() {
    setAmount((oldAmount) => oldAmount + 1);
    props.addToBasket({
      price: props.price,
      productdisplayname: props.productdisplayname,
      id: props.id,
    });
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
      <button onClick={minus}> - </button>
      {amount}
      <button onClick={plus}> + </button>
    </article>
  );
}
