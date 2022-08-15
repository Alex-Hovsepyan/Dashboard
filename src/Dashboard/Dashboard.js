import styles from "./Dashboard.module.scss";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Part1Item from "./Part1/Part1Item";
import wallet from "../assets/images/wallet.svg";
import globe from "../assets/images/globe.svg";
import file from "../assets/images/file.svg";
import carts from "../assets/images/carts.svg";
import rocket from "../assets/images/rocket.svg";
import ellipsis from "../assets/images/ellipsis.svg";

function Dashboard () {
    return (
        <div className={styles.dashboardContainer}>
            
            <div className={styles.container}>
                <GeneralHeader locationName={'Dashboard'} />
                <main className={styles.wrapper}>
                    <Part1Item 
                        title="Today's Money"
                        result="$53,000"
                        percent="+55%"
                        src={wallet}
                        name="item1"
                    />
                    <Part1Item 
                        title="Today's Users"
                        result="2,300 "
                        percent="+3%"
                        src={globe}
                        name="item2"
                    />
                    <Part1Item 
                        title="New Clients"
                        result="+3,462"
                        percent="-2%"
                        src={file}
                        name="item3"
                    />
                    <Part1Item 
                        title="Total Sales"
                        result="$103,430"
                        percent="+5%"
                        src={carts}
                        name="item4"
                    />

                    <div className={styles.item5}> 
                        <h4>Welcome back,</h4>
                        <h2>Mark Johnson</h2>
                        <h3>Glad to see you again!<br/>Ask me anything.</h3>
                        <p>Tap to record</p>
                    </div>

                    <div className={styles.item6}>
                        <h2>Satisfaction Rate</h2>
                        <p>From all projects</p>
                        <div className={styles.backCircle}>
                            <div className={styles.middleImage}>
                                <img src={rocket} alt="svg" />
                            </div>
                        </div>
                        <div className={styles.bottomPart}>
                            <h4>0%</h4>
                            <h2>95% <span>Bassed on likes</span></h2>
                            <h4>100%</h4>
                        </div>
                    </div>

                    <div className={styles.item7}>
                        <h2>Referral Tracking</h2>
                        <div className={styles.parent}>
                            <div className={styles.left}>
                                <div>
                                    <h2><span>Invited</span>145<br />people</h2>
                                </div>
                                <div>
                                    <h2><span>Bonus</span>1,465</h2>
                                </div>
                            </div>
                            <div className={styles.right}>
                                {/* circle */}
                            </div>
                        </div>
                        <div className={styles.ellipsis}>
                            <img src={ellipsis} alt="svg" />
                        </div>
                    </div>

                </main>
            </div>

        </div>
    )
}

export default Dashboard;