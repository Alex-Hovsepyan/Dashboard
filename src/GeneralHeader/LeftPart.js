import styles from "./GeneralHeader.module.scss";
import home from "../assets/images/home.svg";

function LeftPart ({ locationName }) {
    return (
        <div className={styles.leftPart}>
            <div>
                <img src={home} alt='svg' />
                <span> / {locationName}</span>
            </div>
            <h2>{locationName}</h2>
        </div>
    );
}

export default LeftPart;