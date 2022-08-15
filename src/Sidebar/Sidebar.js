import { generalItems, accountPages } from './constants';
import SidebarItem from './SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

function Sidebar () {
    return (
        <div className={s.container}>
            <span className={s.heading}>Vision UI Free</span>
            <hr />
            {generalItems.map(item => <SidebarItem route={item.route} icon={item.icon} />)}
            <div className={s.miniHeading}>Account pages</div>
            {accountPages.map(item => <SidebarItem route={item.route} icon={item.icon} />)}
        </div>
    )
}

export default Sidebar;