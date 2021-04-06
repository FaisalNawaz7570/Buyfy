import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./../Header/Header";
import { connect } from 'react-redux';
import { signout } from './../../Redux/auth/authActions';
import Cart from "../Cart/Cart";

const MenuItem = ({ children, to="#", ...restProps }) => {
  return (
    <div>
      <div {...restProps} className="menuItem">
        <Link to={to}>
          <Header
            style={{ cursor: "pointer", display: "inline", color:"white" }}
            fontSize={20}
            fontWeight="bold"
          >
            {children}
          </Header>
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({auth, signout}) => {
  var [isNavbarVisible, setNavbarVisibility] = useState(false)
  return (
    <div className="navbar">
      <MenuItem to="/">BUYFY</MenuItem>
      <MenuItem to="/category">SHOP</MenuItem>
      <MenuItem to="/test">TEST</MenuItem>
      <div>
      <Header
            style={{ cursor: "pointer", display: "inline", color:"white" }}
            fontSize={20}
            fontWeight="bold"
            onClick={() => setNavbarVisibility(!isNavbarVisible)}
          >
            CART
          </Header>
          {isNavbarVisible ? <Cart /> : null}
      </div>
      {auth ? <MenuItem onClick={signout} to="/authentication">LOGOUT</MenuItem> : <MenuItem to="/authentication">LOGIN</MenuItem>}
    </div>
  );
};
var mapState = (state) => ({
  auth: state.auth
})
var actions = {
  signout
}
export default connect(mapState, actions)(Navbar);
