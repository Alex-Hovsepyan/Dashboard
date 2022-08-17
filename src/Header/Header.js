import './HeaderItem/header.css';
import profile  from '../assets/icons/profile.svg';
import dashboard from '../assets/icons/dashboard.svg';
import signin from '../assets/icons/signin.svg';
import signup from '../assets/icons/signup.svg';

function Header() {
    return (
    <div className='header'>
        <div className='inner_header'>
            <div className='logo_container'>
                <ion-icon name="person-circle-outline"></ion-icon>
                <script type="module" src=""></script>
                <scrip nomodule src=""></scrip>
                <p>VISION UI FREE</p>
            </div>
            <ul className='navigation'>
            
                    <a href='/dashboard'><li>
                    <img style={{width:24,marginRight:5}} src={dashboard}/>
                    Dashboard
                    </li></a>
                    <a href='/profile'><li>
                    <img style={{width:24,marginRight:5,}} src={profile}/>
                    Profile
                    </li></a>
                    <a href='/signin'><li>
                    <img style={{width:24,marginRight:5}} src={signin}/>
                    SignIn
                    </li></a>
                    <a href='/signup'><li>
                    <img style={{width:24,marginRight:5}} src={signup}/>
                    SignUp
                    </li></a>

            </ul>
        </div>
        
    </div>
    )
}

export default Header;