import styles from "./Dashboard.module.scss";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard () {
    return (
        <div className={styles.dashboardContainer}>
            
            <div className={styles.container}>
                <GeneralHeader locationName={'Dashboard'} />
            </div>
            <Sidebar />

        </div>
    )
}

export default Dashboard;