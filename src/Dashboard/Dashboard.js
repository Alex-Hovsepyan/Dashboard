import styles from "./Dashboard.module.scss";
import GeneralHeader from "../GeneralHeader/GeneralHeader";

function Dashboard () {
    return (
        <div className={styles.dashboardContainer}>
            
            <div className={styles.container}>
                <GeneralHeader locationName={'Dashboard'} />
                
            </div>

        </div>
    )
}

export default Dashboard;