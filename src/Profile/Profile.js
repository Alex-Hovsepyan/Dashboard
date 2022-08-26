import { useState, lazy, Suspense } from "react";
import GeneralHeader from "../GeneralHeader/GeneralHeader";
import Sidebar from "../Sidebar/Sidebar";
// import CarInformation from "./CarInformation/CarInformation";
import s from "./Profile.module.scss";
// import ProfileInformation from "./ProfileInformation/ProfileInformtion";


const CarInformation = lazy(() => import("./CarInformation/CarInformation"));
const ProfileInformation = lazy(() => import("./ProfileInformation/ProfileInformtion"));

function Profile() {
    const [ isClicked, setClick ] = useState(false);
    return (
        <div className={s.profileContainer}>
            {/* <Sidebar /> */}
            <div className={s.mainContainer}>
                <div className={s.header}>
                    <GeneralHeader locationName={"Profile"}/>
                </div>
                <div className={s.mainPart}>
                </div>
                <Suspense fallback={<div className={s.loading}>Loading...</div>}>
                    {isClicked ? <CarInformation /> : <ProfileInformation />}
                </Suspense>
                <button onClick={() => setClick(!isClicked)}>click</button>
            </div>
        </div>
    )
}

export default Profile;