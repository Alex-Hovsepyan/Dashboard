import styles from "./GeneralHeader.module.scss";
import SearchInput from "./SearchInput";
import signUp from "../assets/images/signup.svg";
import menu from "../assets/images/menu.svg";
import settings from "../assets/images/settings.svg";
import bell from "../assets/images/bell.svg";

function RightPart () {
    return (
        <div className={styles.rightPart}>
            <SearchInput />
            <div className={styles.items}>
                <img src={signUp} alt="svg" />
                <a href="/Dashboard">Sign in</a>
                <img src={menu} alt="svg" className={styles.menu} />    
                <img src={settings} alt="svg" />
                <img src={bell} alt="svg" />
            </div>
        </div>
    );
}

export default RightPart;