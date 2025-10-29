import { useNavigate } from "react-router-dom"

const Company = () => {
const navigate = useNavigate()
const onCLickHandler=()=>{
    navigate("/about")
}
  return (
    
    <div>
        <p> company is here</p>
        <button onClick={onCLickHandler}>go to companyDetails </button>

    </div>
  )
}

export default Company  