import React from "react";
import LeftPartBackground from "../LeftPartBackground/LeftPartBackground";
import CustomInput from "../Custom/CustomInput/CustomInput"
import CustomButton from "../Custom/CustomButton/CustomButton";
import '../SignIn/SignIn.css'
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomSwitcher from "../Custom/CustomSwitcher/CustomSwitcher";
import Header from "../Header/Header"

function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [data, setData] = useState('');
    const notify = (text, type) => toast(text, {
        type,
    });
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(stream => stream.json())
        .then(results => setData(results))
    },[]);

    let error = true; 
return (    
    <div className="containerSignIn">
        <Header />
        <LeftPartBackground src = {'sinInImg'} /> 
        <div className="rightSignIn">
            <div className="textTop">
                <h1>Nice to see you!</h1>
                <p>Enter your email and password to sign in</p>
            </div>
        <div className="inputsAndButton">
            <form onSubmit={e => {
                e.preventDefault();
                data && data.map(e => {
                    if(e.login === email && e.node_id === password){
                        notify("Success!", "success");
                            setEmail('')
                            setPassword('') 
                            error = false  
                    }
                })
                Object.values(localStorage).map(item => {
                    let parsedInfo = JSON.parse(item);
                    if(parsedInfo.email === email && parsedInfo.pass === password){
                        notify("Success!", "success");
                        setEmail('')
                        setPassword('') 
                        error = false  
                    }
                })

                if(error){
                    notify("Try again", "error")
                    setEmail('')
                    setPassword('') 
                }
                }}>
                <CustomInput value={email} label={"Email"} width={300} placeholder={"Your email..."} type ={'text'} setValue = {setEmail}/> 
                <CustomInput value={password} label={"Password"} width={300} placeholder={"Your password..."} type ={'password'} setValue = {setPassword} /> 
                <CustomSwitcher checked={false} />
                <CustomButton value={"sign in"} width={300}/> 

            </form>
                         
        </div>

        <div className="links"> 
            <span>Don't have an account? 
                <a href="/signUp">Sign up</a>
            </span>
        </div>
    </div>
    <ToastContainer position="top-right" autoClose={3000}/>
</div>)}

export default SignIn;