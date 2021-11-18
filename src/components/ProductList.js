import Product from "./Product";
export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product addToBasket={props.addToBasket} key={product.id} {...product} />);
  return (
    <section>
      <h1>Product List {props.break}</h1>
      <section className="ProductList">{mapped}</section>
    </section>
  );
}
//<Product {...props.product} />
