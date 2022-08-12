import SignUpForm from './SignUpForm';
import LeftPartBackground from '../LeftPartBackground/LeftPartBackground';
import './signUp.css';

function SignUp() { 
    return (
        <div className='signUp'>
            <LeftPartBackground src="signUpImg" />

            <div className='rightPart'>
                <div className='welcomeText'>
                    <h2>Welcome!</h2>
                    <p>
                        Use these awesome forms to login or create
                        new <br/> accountin your project for free.
                    </p>
                </div>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp;