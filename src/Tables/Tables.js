import CustomTable from "../Custom/CustomTable/CustomTable";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import { dataAuthors, dataProjects } from "../fakeData/constants";

function Tables() {
    return(<div style={{display: 'flex'}}>
            <Sidebar />
            <div style={{display: 'flex', flexDirection: 'column'}} >
                <GeneralHeader />
                <CustomTable data={dataAuthors} />
                <CustomTable data={dataProjects} />
            </div>
        </div>
    )
}

export default Tables;