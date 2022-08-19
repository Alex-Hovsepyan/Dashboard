import s from './footer.module.scss'
import { Link } from "react-router-dom"; 

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerPart_1}>
                <p>@ 2021, Made with ❤️</p>
                <Link to="/dashboard">by Simmmple&Creative Timfor a better web</Link>
            </div>
            <div className={s.footerPart_2}>
                <Link to="/dashboard">Marketplace</Link>
                <Link to="/dashboard">Blog</Link>
                <Link to="/dashboard">License</Link>
            </div>
        </div>
    )
}

export default Footer;


