import s from "./Dashboard.module.scss";
import ellipsis from "../assets/images/ellipsis.svg";

const Item7 = () => <div className={`${s.item} ${s.item7}`}>
    <h2>Referral Tracking</h2>

    <div className={s.parent}>
        <div className={s.left}>
            <div>
                <h2><span>Invited</span><span className={s.modifier}>145</span> people</h2>
            </div>
            <div>
                <h2><span>Bonus</span>1,465</h2>
            </div>
        </div>
        <div className={s.right}>
            {/* circle */}
        </div>
    </div>
    
    <div className={s.ellipsis}>
        <img src={ellipsis} alt="svg" />
    </div>
</div>

export default Item7;