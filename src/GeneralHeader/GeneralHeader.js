import { useEffect, useState } from "react";
import styles from "./GeneralHeader.module.scss";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

function GeneralHeader ({ locationName }) {
    const [ fix, setFix ] = useState(false);

    function handleScroll () {
        window.scrollY > 0 ? setFix(true) : setFix(false);
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <header className={`${styles.generalheader} ${fix ? styles.sticky : ''}`}>
            <LeftPart locationName={locationName} />
            <RightPart />
        </header>
    );
}

export default GeneralHeader;