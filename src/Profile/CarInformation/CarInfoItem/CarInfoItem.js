import s from "./CarInfoItem.module.scss";

function CarInfoItem({ title, percentage, icon }) {
    return (
        <div className={s.container}>
            <div className={s.leftPart}>
                <span>{title}</span>
                <p>{percentage}</p>
            </div>
            <div className={s.rightPart}>
                {icon !== "chart" && <div className={s.iconWrapper}>
                    <img src={icon.src} alt={icon.alt} />
                </div>}
            </div>
        </div>
    )
}

export default CarInfoItem;