import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
      </ul>
    </div>
  );
}

export default Product;
