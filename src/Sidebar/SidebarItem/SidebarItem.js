import s from "../Sidebar.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SidebarItem = ({ icon, route, path }) => {
    const { color } = useSelector(state => state);

    return (<div className={s.iconContainer}>
        <div className={s.item}>
            <div className={s.icon} style={{ background: color }}>
                <img src={icon.src} alt={icon.alt} />
            </div>
        <Link className={s.path} to={path}>{route}</Link>
        </div>
    </div>
)}

export default SidebarItem;