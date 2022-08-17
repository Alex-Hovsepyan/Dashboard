import styles from "./GeneralHeader.module.scss";
import home from "../assets/images/home.svg";
import { Link } from "react-router-dom";

function LeftPart ({ locationName }) {
    return (
        <div className={styles.leftPart}>
            <div>
                <Link to="/Dashboard">
                    <img src={home} alt='svg' />
                </Link>
                <span> / {locationName}</span>
            </div>
            <h2>{locationName}</h2>
        </div>
    );
}

export default LeftPart;