import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="navbar-link brand-name-link">Newslab</NavLink>
            </div>
            <div className="navbar-right">
                {/* <div className="navbar-left">
                    <NavLink to="/cart" className="navbar-link cart-link">Cart</NavLink>
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;