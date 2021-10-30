import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./style.css";
import { useEffect, useState } from "react";

const Header = ({ transparent = false }) => {
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [favItems, setFavItems] = useState(0);

  // Update header based on storage
  const handleStorageUpdate = () => {
    const user = localStorage.getItem("username");
    setUsername(user);
    if (user) {
      const favData = JSON.parse(localStorage.getItem("favItems")) || [];
      const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
      setFavItems(favData.length || 0);
      setCartItems(cartData.length || 0);
    }
  };

  // listen browser storage
  useEffect(() => {
    handleStorageUpdate();
    const initListener = setInterval(() => {
      handleStorageUpdate();
    }, 1000);
    return () => clearInterval(initListener);
  }, []);

  // Clear storage on logout
  const handleLogout = () => {
    localStorage.clear();
    handleStorageUpdate();
  };
  return (
    <div className={`header ${transparent ? "" : "fixed-header"}`}>
      <div className="header-logo_box">
        <img src="/images/logo.png" alt="foodlab" />
      </div>
      <div className="header_actions">
        <Link to="/recipes">
          <Button variant="outline-light" className="action-button">
            Recipes
          </Button>
        </Link>
        <Link to="/contact-us">
          <Button variant="outline-light" className="action-button">
            Users
          </Button>
        </Link>
        <Link to="/contact-us">
          <Button variant="outline-light" className="action-button">
            <i class="bi bi-person-circle"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
