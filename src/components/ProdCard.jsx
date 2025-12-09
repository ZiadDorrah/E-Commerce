// ProdCard.js
import React from "react";
import styles from "./ProdCard.module.css";
import defaultImage from "../assets/default-product.jpg";
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
} from "../store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProdCard = ({ product }) => {
    const dispatch = useDispatch();

    const cartItem = useSelector((state) =>
        state.cart.items.find((item) => item.id === product.id)
    );
    const qty = cartItem?.quantity || 0;

    // Guard clause in case product data is missing temporarily
    if (!product) return null;

    return (
        <div className={styles.card}>
            {/* We map the specific data keys inside the component */}
            <img
                src={product.image_url || defaultImage}
                alt={product.name}
                className={styles.productImage}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                }}
            />
            <div className={styles.cardContent}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className={styles.category}>{product.category_name}</small>
                    <div className={styles.addCart}>
                        {qty === 0 ? (
                            <button
                                className="btn"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                <IoMdAddCircleOutline className={styles.addBtn} />
                            </button>
                        ) : (
                            <div className={styles.counterRow}>
                                <button
                                    className="btn"
                                    onClick={() => dispatch(decreaseQuantity(product.id))}
                                >
                                    <IoIosRemoveCircleOutline className={styles.minBtn} />
                                </button>

                                <span className={styles.counter}>{qty}</span>

                                <button
                                    className="btn"
                                    onClick={() => dispatch(increaseQuantity(product.id))}
                                >
                                    <IoMdAddCircleOutline className={styles.addBtn} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.priceRow}>
                    <span className={styles.price}>${product.price}</span>
                    {product.stock > 0 ? (
                        <span className={styles.inStock}>In Stock</span>
                    ) : (
                        <span className={styles.outStock}>Sold Out</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProdCard;
