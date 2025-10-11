import React from 'react';
import styles from "./Targets.module.css";
import Card from '../Card';
import { FaDollarSign } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Targets = () => {
    return (
        <Card>
            <div className={styles.target}>
                <h3>Yearly Targets</h3>
                <p>Targets Of The Year</p>
                <div className={`${styles.body}`}>
                    <div className={`${styles.content} d-flex gap-4 mb-3`}>
                        <div className={styles.iconProfit}>
                            <FaDollarSign />
                        </div>
                        <div className={`${styles.details}`}>
                            <p className="mb-2">Money</p>
                            <h3 className="mb-2">$20.000</h3>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Info example"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div
                                    className={`progress-bar ${styles.profit}`}
                                    style={{ width: "80%" }}
                                >
                                    80%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.content} d-flex gap-4 mb-3`}>
                        <div className={styles.iconProjects}>
                            <IoCodeSlash />
                        </div>
                        <div className={`${styles.details}`}>
                            <p className="mb-2">Projects</p>
                            <h3 className="mb-2">24</h3>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Info example"
                                aria-valuenow="55"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div
                                    className={`progress-bar ${styles.projects}`}
                                    style={{ width: "55%" }}
                                >
                                    55%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.content} d-flex gap-4 mb-3`}>
                        <div className={styles.iconTeam}>
                            <FaUser />
                        </div>
                        <div className={`${styles.details}`}>
                            <p className="mb-2">Team</p>
                            <h3 className="mb-2">12</h3>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Info example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div
                                    className={`progress-bar ${styles.team}`}
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Targets;