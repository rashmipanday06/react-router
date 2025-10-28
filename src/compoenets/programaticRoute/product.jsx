import { useNavigate } from "react-router-dom"

const Product = () => {
     const navigate= useNavigate();
    const handleClick =()=>{
        navigate("/productDetails", {
      state: {
        id: 101,
        name: "Laptop",
        price: 55000,
      },
    });
    }
  return (
    <div>    
     <button onClick={handleClick}>View Details</button>
    </div>
  )
}

export default Product