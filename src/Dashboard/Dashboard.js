import s from "./Dashboard.module.scss";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import Item5 from "./Item5";    
import Item6 from "./Item6";
import Item7 from "./Item7";
import Item8 from "./Item8";
import Item9 from "./Item9";
import Item11 from "./Item11";
import Item10 from "./Item10";

function Dashboard () {
    return (
        <div className={s.dashboardContainer}>          
            <Sidebar />
            <div className={s.container}>
                <GeneralHeader locationName={'Dashboard'} />
                <main className={s.wrapper}>
                    <Item1 />
                    <Item2 />
                    <Item3 />
                    <Item4 />
                    <Item5 />
                    <Item6 />
                    <Item7 />
                    <Item8 />
                    <Item9 />
                    <Item10 />
                    <Item11 />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;