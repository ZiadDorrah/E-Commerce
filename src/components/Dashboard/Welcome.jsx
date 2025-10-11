import React from 'react';
import Card from '../Card';
import styles from './Welcome.module.css';
import WelcomePNG from '../../assets/welcome.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <Card>
            <div
                className={`d-flex justify-content-between ${styles.header}`}
            >
                <div className={styles.headerContent}>
                    <h3>Welcome</h3>
                    <p>Dorrah</p>
                </div>
                <img className={styles.welcome} src={WelcomePNG} alt="" />
            </div>
            <div
                className={`d-flex justify-content-between ${styles.body} mt-5 mb-3`}
            >
                <div className="author">
                    <h4 className="text-center">Ziad Dorrah</h4>
                    <p className="text-center">Developer</p>
                </div>
                <div className="projects">
                    <h4 className="text-center">80</h4>
                    <p className="text-center">Projects</p>
                </div>
                <div className="earned">
                    <h4 className="text-center">$8500</h4>
                    <p className="text-center">Earned</p>
                </div>
            </div>
            <Link
                className={`${styles.link} text-center d-flex justify-content-end me-3  mb-3`}
                to="/dashboard/profile"
            >
                <span>Profile</span>
            </Link>
        </Card>
    );
};

export default Welcome;