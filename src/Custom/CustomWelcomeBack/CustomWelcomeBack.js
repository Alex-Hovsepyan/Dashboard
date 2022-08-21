import { Link } from "react-router-dom";
import rocket from "../../assets/images/rocket.svg";
import s from "./CustomWelcomeBack.module.scss";

function CustomWelcomeBack ({ image, width, height, className, h2, h3, h4, p }) {
    // Alex jan du qo motic es kpoxances heto nor mnacacy
    // h2={<h2>Welcoe back!</h2>}
    // p={<p>how to see you</p>}

    const styles = {
        width,
        height,
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return (
        <div className={`${s.container} ${className}`} style={styles}>
            {h4 && h4}
            {h2 && h2}
            {p && p}
            {h3 && h3}
            <Link to={'/dashboard'} className={s.item}>
                <span>Tap to record</span>
                <img src={rocket} alt="Rocket" /> 
            </Link>
        </div>
    );
}

export default CustomWelcomeBack;

