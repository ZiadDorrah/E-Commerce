import React from 'react';
import styles from './DetailsProducts.module.css';
import Card from './../../Card';
import { AiFillProduct } from "react-icons/ai";
import { BsBoxSeamFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";

const DetailsProducts = () => {
    return (
        <div className={styles.cards}>
            <Card>
                <div className={`${styles.totalProduct} d-flex justify-content-between align-items-center`}>
                    <div className="content">
                        <p>Total Products</p>
                        <h4>25</h4>
                    </div>
                    <div className={styles.productsicon}>
                        <AiFillProduct />
                    </div>
                </div>
            </Card>
            <Card>
                <div className={`${styles.inStock} d-flex justify-content-between align-items-center`}>
                    <div className="content">
                        <p>In Stock</p>
                        <h4>12</h4>
                    </div>
                    <div className={styles.inStockicon}>
                        <BsBoxSeamFill />
                    </div>
                </div>
            </Card>
            <Card>
                <div className={`${styles.lowStock} d-flex justify-content-between align-items-center`}>
                    <div className="content">
                        <p>Low Stock</p>
                        <h4>8</h4>
                    </div>
                    <div className={styles.lowStockicon}>
                        <CgDanger />
                    </div>
                </div>
            </Card>
            <Card>
                <div className={`${styles.outStock} d-flex justify-content-between align-items-center`}>
                    <div className="content">
                        <p>Low Stock</p>
                        <h4>8</h4>
                    </div>
                    <div className={styles.outStockicon}>
                        <CgDanger />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DetailsProducts;