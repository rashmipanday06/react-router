import { Link, NavLink, Outlet } from 'react-router-dom'

 const Home = () => {
  return (
    <div>
      
      <p>This is Home</p>

      <nav>
        <ul>
          <li>
            <NavLink to='about'>about</NavLink>
            <NavLink to='contact'  style={({ isActive }) => ({
               color: isActive ? "red" : "black",
          })}>contact</NavLink>
          </li>
        </ul>
      </nav>
      {<Outlet/>}
      </div>
  )
}
export default Home
