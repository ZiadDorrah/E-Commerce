
import classes from "./MainHeader.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Search from './Search';


import { FaCartPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import CartModal from "./CartModal";

const MainHeader = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className={classes.header} id="header">
      <div className={classes.logo}>
        <Link to="/">E-Shop</Link>
      </div>

      <Search />

      <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className={classes.icons}>
        <button
          type="button"
          aria-label="Cart"
          className={`position-relative ${classes.iconBtn}`}
          onClick={() => setCartOpen(true)}
        >
          {totalQuantity > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalQuantity}
          </span>}

          <FaCartPlus />
        </button>
        <Link to="/wishlist" aria-label="Wishlist" className={`position-relative ${classes.iconBtn}`}>
          <MdFavorite />
        </Link>
        <Link to="/profile" aria-label="Profile" className={`position-relative ${classes.iconBtn}`}>
          <IoPersonCircleOutline />
        </Link>
      </div>

      {/* Cart Modal with dummy data */}
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)}>
        {/* Dummy cart data */}
        <div className="cart-modal-content">
          <div className={classes.cartListScrollable}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '18px' }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', background: '#f7f9fc', borderRadius: 10, padding: '10px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
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
          </div>
          <div className="cart-total d-flex justify-content-between align-items-center mt-3" style={{ marginTop: 0 }}>
            <span>Total: ${totalPrice.toFixed(2)}</span>
            <span>Total Items: {totalQuantity}</span>
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
