import CustomInput from "../Custom/CustomInput/CustomInput";
import CustomButton from "../Custom/CustomButton/CustomButton";
import Option from "./Option";
import appleSvg from "../assets/images/logo-apple.svg";
import facebookSvg from "../assets/images/logo-facebook.svg";
import googleSvg from "../assets/images/logo-google.svg";
import { useEffect, useState } from "react";

function SignUpForm () {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ usersData, setUsersData ] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    async function getData () {
        const URL = 'https://api.github.com/users';
        const resp = await fetch(URL);
        const res = await resp.json();
        setUsersData(res);
    }

    function handleSubmit (e) { 
        e.preventDefault();
        const token = `${Date.now()}${Math.random()}`;

        setName('');
        setEmail('');
        setPass('');

        for (let i = 0; i < usersData.length; i++) {
            if (!name || !email || !pass) return;

            if (name === usersData[i].login) {  
                alert('The name you entered already exists');
                return;
            }
            localStorage.setItem(token, JSON.stringify({ name, email, pass }));
        }
    }

    return (
        <form autoComplete="off" className="signUpForm" onSubmit={handleSubmit}>
            <h2>Register with</h2>
            <div className="options"> 
                <Option src={facebookSvg} alt='facebook svg' />
                <Option src={appleSvg} alt='apple svg' />
                <Option src={googleSvg} alt='google svg' />
            </div>
            <p className="or">or</p>
            <CustomInput
                type='text'
                id='name'
                label='Name'
                placeholder='Your full name...'
                width='100%'
                value={name}
                setValue={setName}
            />
            <CustomInput 
                type='email'
                id='email'
                label='Email'
                placeholder='Your email...'
                width='100%'
                value={email}
                setValue={setEmail}
            />
            <CustomInput 
                type='password'
                id='pass'
                label='Password'
                placeholder='Your password...'
                width='100%'
                value={pass}
                setValue={setPass}
            />
            <CustomButton 
                value='SIGN UP'
                width='100%'
            />
            <p className="linkText">
                Already have an account?
                <a href="#signIn">Sign in</a>
            </p>
        </form>
    );
}

export default SignUpForm;

