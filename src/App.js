import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [articlesToLoad, setArticlesToLoad] = useState(4);
  /*
  const myCallback = () => {
    fetch("https://kea-alt-del.dk/t7/api/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }
  useEffect(myCallback, []);*/
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products?limit=" + articlesToLoad);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [articlesToLoad]);

  function addProduct() {
    setProducts((oldProducts) => oldProducts.concat({ productdisplayname: "Hi", price: 12 }));
  }
  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }
  const productCopy = [...products];
  productCopy.sort((a, b) => {
    if (a.productdisplayname > b.productdisplayname) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="App">
      <Nav />
      <button className="full-bleed" onClick={addProduct}>
        Add Product
      </button>
      <button onClick={addToBasket} className="full-bleed">
        Add to basket
      </button>
      <button onClick={() => setArticlesToLoad(10)}>load 10</button>
      <button onClick={() => setArticlesToLoad(50)}>load 50</button>

      <ProductList addToBasket={addToBasket} products={productCopy} break="hell yeah" />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
