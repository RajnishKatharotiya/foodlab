import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";

import "./style.css";
import { useEffect, useState } from "react";
import { getUserId, isAdmin, isLoggedIn } from "../utils";
import axios from "axios";

const Header = ({ transparent = false }) => {
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [favItems, setFavItems] = useState(0);

  // Update header based on storage
  /* const handleStorageUpdate = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(`${user?.firstName}`);
    if (user) {
      const favData = JSON.parse(localStorage.getItem("favItems")) || null;
      const cartData = JSON.parse(localStorage.getItem("cartItems")) || null;
      setFavItems(favData ? favData.split(',').length : 0);
      setCartItems(cartData ? cartData.split(',').length : 0);
    }
  }; */

  const setInitData = async () => {
    const { firstName, uid } = JSON.parse(localStorage.getItem("user")) || {};
    if (uid) {
      setUsername(firstName);
      const { data: { cart, favorites } } = await axios.get(`http://localhost:8080/profile/all?uid=${uid}`);
      setCartItems(cart ? cart.split(',').length : 0);
      setFavItems(favorites ? favorites.split(',').length : 0);
    }
  }
  // listen browser storage
  useEffect(() => {
    setInitData();
    const initListener = setInterval(() => {
      setInitData();
    }, 1000);
    return () => clearInterval(initListener);
  }, []);

  // Clear storage on logout
  const handleLogout = () => {
    localStorage.clear();
    setInitData();
  };
  return (
    <div className={`header ${transparent ? "" : "fixed-header"}`}>
      <div className="header-logo_box">
        <img src="/images/logo-landscape.png" alt="foodlab" />
      </div>
      <div className="header_actions">
        <Link to="/recipes">
          <Button variant="outline-light" className="action-button">
            Recipes
          </Button>
        </Link>
        <Link to="/contact-us">
          <Button variant="outline-light" className="action-button">
            Contact Us
          </Button>
        </Link>
        {isLoggedIn() ? (
          <>
            {isAdmin() && (
              <>
                <Link to="/admin/recipes">
                  <Button variant="outline-light" className="action-button">
                    Manage Recipes
                  </Button>
                </Link>
                <Link to="/admin/users">
                  <Button variant="outline-light" className="action-button">
                    Manage Users
                  </Button>
                </Link>
              </>
            )}
            <Button
              variant="outline-light"
              className="action-button"
              onClick={handleLogout}
            >
              {username}
            </Button>
            <Link to="/my-favorites">
              <Button variant="light" className="action-button">
                <i className="bi bi-heart-fill"></i>
                <Badge bg="danger">{favItems}</Badge>
              </Button>
            </Link>
            <Link to="/my-cart">
              <Button variant="light" className="action-button">
                <i className="bi bi-cart-fill"></i>
                <Badge bg="success">{cartItems}</Badge>
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              <Button variant="outline-light" className="action-button">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="light" className="action-button">
                Login
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
