import React from "react";
import styles from "./CartModal.module.css";

const CartModal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close cart modal">&times;</button>
                <h2>Your Cart</h2>
                <div className={styles.content}>
                    {children || "Your cart is empty."}
                    <button
                        className={styles["cart-checkout-btn"]}
                        style={{ marginTop: 24 }}
                        onClick={() => alert("Proceed to checkout (demo)")}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
