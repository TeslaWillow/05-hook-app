import { Link, NavLink } from "react-router"

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">use Context</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink
            activeclassname="active"
            className="nav-link"
            exact="true"
            to="/"
        >
            Home
        </NavLink>
        <NavLink
            activeclassname="active"
            className="nav-link"
            exact="true"
            to="/about"
        >
            About
        </NavLink>
        <NavLink
            activeclassname="active"
            className="nav-link"
            exact="true"
            to="/login"
        >
            Login
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
  )
}
