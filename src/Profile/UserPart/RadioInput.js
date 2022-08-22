import { useState } from "react";
import s from "./UserPart.module.scss";

const RadioInput = ({ id }) =>  {   
    const [ checked, setChecked] = useState(false);

    return (
        <input id={s[id]} type="radio" name="slider" checked={checked}
            onChange={ e => setChecked(e.target.checked) }
        />
    );
}

export default RadioInput;