import rocket from "../assets/images/rocket.svg";
import CustomProgressbar from "../Custom/CustomProgressbar/CustomProgressbar";
import s from "./Dashboard.module.scss";

const Item6 = () => <div className={`${s.item} ${s.item6}`}>
    <h2>Satisfaction Rate</h2>
    <p>From all projects</p>

    <div className={s.backCircle}>
        <CustomProgressbar percentage={80} />
        {/* <div className={s.middleImage}>
            <img src={rocket} alt="svg" />
        </div> */}
    </div>

    <div className={s.bottomPart}>
        <h4>0%</h4>
        <h2>95% <span>Bassed on likes</span></h2>
        <h4>100%</h4>
    </div>
    
</div>


export default Item6;