import SignUpForm from './SignUpForm';
import LeftPartBackground from '../LeftPartBackground/LeftPartBackground';
import './signUp.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

function SignUp() { 
    return (
        <div className='signUp'>
            <Header />
            <LeftPartBackground src="signUpImg" height={"auto"} />
            <div className='rightPart'>
                <div className='welcomeText'>
                    <h2>Welcome!</h2>
                    <p>
                        Use these awesome forms to login or create
                        new <br/> accountin your project for free.
                    </p>
                </div>
                <SignUpForm />
            <Footer/>
            </div>
        </div>
    );
}


export default SignUp;