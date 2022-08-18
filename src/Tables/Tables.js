import CustomTable from "../Custom/CustomTable/CustomTable";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import { dataAuthors } from "../fakeData/constants";

function Tables() {
    return(<div style={{display: 'flex'}}>
            <Sidebar />
            <div style={{width: "calc(100% - 280px)", marginLeft: 15}} >
                <GeneralHeader locationName={"Tables"} />
                <div style={{width: "100%", marginLeft: 250}}>
                    <CustomTable data={dataAuthors} />
                </div>
            </div>
        </div>
    )
}

export default Tables;