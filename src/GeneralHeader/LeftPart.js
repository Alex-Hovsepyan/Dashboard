import styles from "./GeneralHeader.module.scss";
import home from "../assets/images/home.svg";

function LeftPart ({ locationName }) {
    return (
        <div className={styles.leftPart}>
            <div>
                <a href="/Dashboard">
                    <img src={home} alt='svg' />
                </a>
                <span> / {locationName}</span>
            </div>
            <h2>{locationName}</h2>
        </div>
    );
}

export default LeftPart;