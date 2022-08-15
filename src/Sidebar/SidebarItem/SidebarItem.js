
const SidebarItem = ({ icon, route }) => <div>
    <div>
        <img src={icon.src} alt={icon.alt} />
    </div>
    {route}
</div>

export default SidebarItem;