import s from "../RightSidebar.module.scss";
import { useDispatch } from 'react-redux';
import { changeColor } from "../../redux/actions";

function ColorItem({ background }) {
    const dispatch = useDispatch();
    return (
        <div
            className={s.item}
            style={{ background: background}}
            onClick={() => dispatch(changeColor(background))} />
    )
}

export default ColorItem