import s from "./UserPart.module.scss";
import userImage from "../../assets/images/userPart.png";
import LabelItem from "./LabelItem";
import { labelData } from "./UserPartData";
import RadioInput from "./RadioInput";  

function UserPart () {
    return (
        <div className={s.userPart}>
            {labelData.map(i => <RadioInput key={i.id} id={i.id} />)}   
            <div className={s.leftPart}>
                <img src={userImage} alt="userPhoto" />
                <div>
                    <h2>Mark Johnson</h2>
                    <p>mark@simmmple.com</p>
                </div>
            </div>
            <div className={s.rightPart}>
                <div className={s.target}>
                    {labelData.map(i => <LabelItem
                        src={i.src} 
                        text={i.text} 
                        id={i.id}
                        key={i.id}
                    />)}
                    <div className={s.animation}></div>
                </div>
            </div>
        </div>
    );
}

export default UserPart;