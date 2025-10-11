
import classes from "./MainHeader.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import Search from './Search';


import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import CartModal from "./CartModal";


const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  // Dummy cart data in state
  const [cartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 59.99, quantity: 1, image: "https://via.placeholder.com/40" },
    { id: 2, name: "Smart Watch", price: 99.99, quantity: 2, image: "https://via.placeholder.com/40" },
    { id: 3, name: "Bluetooth Speaker", price: 29.99, quantity: 1, image: "https://via.placeholder.com/40" },
  ]);

  return (
    <header className={classes.header} id="header">
      <div className={classes.logo}>
        <Link to="/">E-Shop</Link>
      </div>

      <Search />

      <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className={classes.icons}>
        <button
          type="button"
          aria-label="Cart"
          className={classes.iconBtn}
          onClick={() => setCartOpen(true)}
        >
          <FaCartPlus />
        </button>
        <Link to="/wishlist" aria-label="Wishlist" className={classes.iconBtn}>
          <MdFavorite />
        </Link>
        <Link to="/profile" aria-label="Profile" className={classes.iconBtn}>
          <IoPersonCircleOutline />
        </Link>
      </div>

      {/* Cart Modal with dummy data */}
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)}>
        {/* Dummy cart data */}
        <div className="cart-modal-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '18px' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', background: '#f7f9fc', borderRadius: 10, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <img src={item.image} alt={item.name} style={{ width: 48, height: 48, borderRadius: 8, marginRight: 16, objectFit: 'cover', border: '1.5px solid #e3e8ee', background: '#fff' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: '#666', marginTop: 2 }}>Qty: {item.quantity}</div>
                </div>
                <div style={{ fontWeight: 600, color: '#0078f6', fontSize: 16, marginLeft: 8 }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total" style={{ marginTop: 0 }}>
            Total: <span>${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
        </div>
      </CartModal>

      <button
        className={classes.hamburger}
        aria-label="Open menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuOpen && <div className={classes.overlay} onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default MainHeader;
