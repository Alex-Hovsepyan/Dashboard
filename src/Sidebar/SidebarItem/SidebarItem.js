import s from "../Sidebar.module.scss";
import { Link } from "react-router-dom";
const SidebarItem = ({ icon, route, path }) => <div className={s.iconContainer}>
    <div className={s.item}>
        <div className={s.icon}>
            <img src={icon.src} alt={icon.alt} />
        </div>
       <Link className={s.path} to={path}>{route}</Link>
    </div>
</div>

export default SidebarItem;