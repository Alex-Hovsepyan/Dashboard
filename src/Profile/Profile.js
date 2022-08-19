import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
import CarInformation from "./CarInformation/CarInformation";
import s from "./Profile.module.scss";
import ProfileInformation from "./ProfileInformation/ProfileInformtion";

function Profile() {
    return (
        <div className={s.profileContainer}>
            <Sidebar />
            <div className={s.mainContainer}>
                <div className={s.header}>
                    <GeneralHeader locationName={"Profile"}/>
                </div>
                <div className={s.mainPart}>
                </div>
            </div>
        </div>
    )
}

export default Profile;