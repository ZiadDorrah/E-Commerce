import React from 'react';
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={`${styles["loader-wrapper"]}`}>
            <div className={styles.loader}></div>
            <div className={styles["letter-wrapper"]}>
                <span className={styles["loader-letter"]}>S</span>
                <span className={styles["loader-letter"]}>e</span>
                <span className={styles["loader-letter"]}>a</span>
                <span className={styles["loader-letter"]}>r</span>
                <span className={styles["loader-letter"]}>c</span>
                <span className={styles["loader-letter"]}>h</span>
                <span className={styles["loader-letter"]}>i</span>
                <span className={styles["loader-letter"]}>n</span>
                <span className={styles["loader-letter"]}>g</span>
            </div>
        </div>
    );
};

export default Loading;