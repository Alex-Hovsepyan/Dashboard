import './signUp.scss';
import SignUpForm from './SignUpForm';

function SignUp () {
    return (
        <div className='signUp'>

            <div className='left-part'>hly vor</div>

            <div className='right-part'>
                <h2>Welcome!</h2>
                <p>
                    Use these awesome forms to login or create
                    new <br/> accountin your project for free.
                </p>
                <SignUpForm />
            </div>

        </div>
    );
}

export default SignUp;