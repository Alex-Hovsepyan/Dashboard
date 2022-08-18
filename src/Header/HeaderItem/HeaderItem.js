import { Link } from "react-router-dom";
import s from "./header.module.scss";

function HeaderItem({ path, src, title }) {
    return (
        <li className={s.item}>
            <img style={{ width:24, marginRight:5 }} src={src}/>
            <Link className={s.path} to={path}>{title}</Link>
        </li>
    )
}

export default HeaderItem;



  
 
    