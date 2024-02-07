import { FaArrowLeft } from "react-icons/fa";
import UserImg from './assets/images/Rectangle 7.png'
import { FaArrowDown } from "react-icons/fa6";
import WatchImg from './assets/images/Screenshot 2024-02-05 200304-Photoroom 1.png';
import styles from "./app.module.scss"


const App = () => {

    return (
        <div className="main">
            <div className={styles.topBar}>
                <div className={styles.backArrow}>
                    <FaArrowLeft />
                </div>
                <div>
                    <img src={UserImg} alt="user" />
                </div>
            </div>
            <div className={styles.tracker}>
                <h2>Your <br />Fitness Tracker</h2>
                <div className={styles.buttonGroup}>
                    <button>Connected Device</button>
                    <button>Statistics</button>
                </div>
            </div>
            <div className={styles.cardWraper}>
                <div className={styles.card}>
                    <div className={styles.textArea}>
                        <span>Smart Watch</span>
                        <h2>Fire Bolt</h2>
                        <p>Scan the device QR to connect</p>
                        <button>Scan</button>
                    </div>
                    <img src={WatchImg} alt="watch" />
                    <div className={styles.shadow}></div>
                </div>
            </div>
            <section className={styles.activities}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}>
                        <div className={styles.progressBar}>
                            <div className={styles.text}>
                                2758<div className={styles.small}>Steps</div>
                            </div>
                            <svg>
                                <circle className={styles.bg} cx="65" cy="65" r="56"></circle>
                                <circle className={styles.progress} cx="65" cy="65" r="56"></circle>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className={styles.activity}>
                            <span>Calories</span>
                            <span>1200 Kacl</span>
                        </div>
                        <div className={styles.activity}>
                            <span>Water</span>
                            <span>1.8 Ltrs</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.formSection}>
                <h3>Add Details</h3>
                <form>
                    <div className={styles.formControl}>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={styles.formControl}>
                        <input type="number" placeholder="Age" />
                        <input type="number" placeholder="Height" />
                    </div>
                    <div className={styles.formControl}>
                        <select id="selectOption">
                            <option value="">Are you a gym member?</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <span> <FaArrowDown /> </span>
                    </div>
                    <div className={styles.formControl}>
                        <select id="selectOption">
                            <option value="">Do you eat meat?</option>
                            <option value="Yes">Yes</option>
                            <option value="no">no</option>
                        </select>
                        <span><FaArrowDown /> </span>
                    </div>
                    <div className={styles.formControl}>
                        <select id="selectOption">
                            <option value="">Are you a cyclist?</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <span><FaArrowDown /> </span>
                    </div>
                    <button type="submit">Save Details</button>
                </form>
            </section>
        </div>
    )
}

export default App;