import CustomTable from "../Custom/CustomTable/CustomTable";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import { dataAuthors } from "../fakeData/constants";
import s from  "../Custom/CustomTable/CustomTable.module.scss";
import Footer from "../Footer/Footer";



function Tables() {
    return(<div style={{display: 'flex'}}>
        <div className={s.closeSidebar}>
        <Sidebar />
        </div>
            <div style={{width: "calc(100% - 280px)", marginLeft: 15}} >
                <div style={{ width: '100%', margin: '10px 0 0 250px'}}>
                    <GeneralHeader locationName={"Tables"} />
                </div>
                <div style={{marginLeft : 250,width: "100%"}}>
                    <CustomTable data={dataAuthors} />
                </div>
                <div style={{ margin: '30px 0' }}>
                    <Footer checkClassName={true} />
                </div>
            </div>
        </div>
    )
}

export default Tables;