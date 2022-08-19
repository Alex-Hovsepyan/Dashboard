import CustomProgressbar from "../../Custom/CustomProgressbar/CustomProgressbar";
import CarInfoItem from "./CarInfoItem/CarInfoItem";
import s from "./CarInformation.module.scss";
import { carInformation } from "./constants";

function CarInformation() {
    return (
        <div className={s.container}>
            <p className={s.generalTitle}>Car Information</p>
            <p className={s.intro}>Hello, Mark Johnson! Your Car is ready.</p>
            <div className={s.progressbar}>
                <CustomProgressbar percentage={66}/>
            </div>
            <div style={{ textAlign: 'center', margin: "15px 0" }}>
                <p className={s.generalTitle}>0h 58 min</p>
                <p className={s.intro}>Time to full charge</p>
            </div>
            <div className={s.carInfoItemContainer}>
                {carInformation.map((item, idx) => <CarInfoItem
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    percentage={item.percentage} />)}
            </div>
        </div>
    )
}

export default CarInformation;