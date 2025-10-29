import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
const{name, id , price}=location.state

  return (
    <>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Price: ₹{price}</p>
    </>
  );
}

export default ProductDetails;
