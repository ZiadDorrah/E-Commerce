import React from "react";
import ReactDOM from "react-dom";
import styles from "./DeleteModal.module.css"; // we'll style this separately

const DeleteModal = ({ onClose, onConfirm }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h3>Are you sure you want to delete this task?</h3>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>,
    document.body // 👈 renders modal outside card
  );
};

export default DeleteModal;
