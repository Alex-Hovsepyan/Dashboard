import { generalItems, accountPages } from './constants';
import SidebarItem from './SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={s.container}>
            <span className={s.heading}>Vision UI Free</span>
            <hr />
            {generalItems.map(item => <SidebarItem route={item.route} icon={item.icon} path={item.path} />)}
            <div className={s.miniHeading}>Account pages</div>
            {accountPages.map(item => <SidebarItem route={item.route} icon={item.icon} path={item.path} />)}
        </div>
    )
}

export default Sidebar;