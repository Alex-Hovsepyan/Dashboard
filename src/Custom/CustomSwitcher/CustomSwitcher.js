import { useState } from "react";
import s from "./CustomSwitcher.module.scss";

const CustomSwitcher = ({ label }) => {
    const [ checked, setChecked ] = useState(false);
    return (<div className={s.switcherWrapper} >
        <label className={s.switch}>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <span className={`${s.slider} ${s.round}`} />
            {label && <div className={s.label}>{label}</div>}
        </label>
    </div>)
}

export default CustomSwitcher;