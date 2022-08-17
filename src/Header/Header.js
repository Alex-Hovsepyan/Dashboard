import s from './HeaderItem/header.module.scss';
import profile  from '../assets/icons/profile.svg';
import dashboard from '../assets/icons/dashboard.svg';
import signin from '../assets/icons/signin.svg';
import signup from '../assets/icons/signup.svg';
import HeaderItem from './HeaderItem/HeaderItem';
import CustomButton from '../Custom/CustomButton/CustomButton';

function Header() {
    const headerItems = [
        {
            title: "Dashboard",
            path: "/dashboard",
            src: dashboard
        },
        {
            title: "Profile",
            path: "/profile",
            src: profile
        },
        {
            title: "Sign In",
            path: "/signIn",
            src: signin
        },
        {
            title: "Sign Up",
            path: "/signUp",
            src: signup
        }
    ]
    return (
    <div className={s.header}>
            <p className={s.logo_container}>VISION UI FREE</p>
            <ul className={s.navigation}>
                {headerItems.map(item => <HeaderItem
                    path={item.path}
                    src={item.src}
                    title={item.title} />)}
            </ul>
            <CustomButton value={"Buy now"} />
    </div>
    )
}

export default Header;