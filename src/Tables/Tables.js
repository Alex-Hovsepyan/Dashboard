import CustomTable from "../Custom/CustomTable/CustomTable";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import { dataAuthors } from "../fakeData/constants";
import s from  "../Custom/CustomTable/CustomTable.module.scss";



function Tables() {
    return(<div style={{display: 'flex'}}>
        <div className={s.closeSidebar}>
        <Sidebar />

        </div>
            
            <div style={{width: "calc(100% - 280px)", marginLeft: 15}} >
                <GeneralHeader locationName={"Tables"} />
                <div style={{marginLeft : 250,width: "100%"}}>
                    <CustomTable data={dataAuthors} />
                </div>
            </div>
        </div>
    )
}

export default Tables;