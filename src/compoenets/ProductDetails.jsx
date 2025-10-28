import { Link, Outlet, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details: {id}</h2>

      <nav>
        <Link to="overview">Overview</Link> |{" "}
        <Link to="review">Review</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default ProductDetails;
