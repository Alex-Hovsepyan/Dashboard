import s from "../Sidebar.module.scss";
const SidebarItem = ({ icon, route }) => <div className={s.iconContainer}>
    <div className={s.item}>
        <div className={s.icon}>
            <img src={icon.src} alt={icon.alt} />
        </div>
       <span>{route}</span>
    </div>
</div>

export default SidebarItem;