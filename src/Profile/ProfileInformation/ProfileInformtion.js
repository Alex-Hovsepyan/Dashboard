import s from "../CarInformation/CarInformation.module.scss";
import face from "../../assets/images/logo-facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

function ProfileInformation() {
    return (
        <div className={s.container}>
            <div className={s.generalTitle}>Profile Information</div>
            <p className={s.intro}>Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no.
             If two equally difficult paths, choose the one more painful in the short term
              (pain avoidance is creating an illusion of equality).</p>
            <div className={s.contactInfo}>
                <div>
                    <span className={s.intro}>Full Name:</span>
                    <span style={{fontSize: "0.875rem"}} className={s.generalTitle}>  Mark Johnson</span>
                </div>
                <div>
                    <span className={s.intro}>Mobile:</span>
                    <span style={{fontSize: "0.875rem"}} className={s.generalTitle}>  (44) 123 1234 123</span>
                </div>
                <div>
                    <span className={s.intro}>Email:</span>
                    <span style={{fontSize: "0.875rem"}} className={s.generalTitle}>  mark@simmmple.com</span>
                </div>
                <div>
                    <span className={s.intro}>Location:</span>
                    <span style={{fontSize: "0.875rem"}} className={s.generalTitle}>  United States</span>
                </div>
                <div className={s.social}>
                    <span className={s.intro}>Social:</span>
                    <div style={{display: "inline"}}>
                        <img src={face} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                        <img src={instagram} alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation;