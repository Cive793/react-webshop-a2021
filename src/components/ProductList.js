import Product from "./Product";
export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product {...product} />);
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
