import React from "react";
import LeftPartBackground from "../LeftPartBackground/LeftPartBackground";
import CustomInput from "../Custom/CustomInput/CustomInput"
import CustomButton from "../Custom/CustomButton/CustomButton";
import '../SignIn/SignIn.css'
import { useEffect, useState } from "react";

function SignIn() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [title,setTitle] = useState('')
        useEffect(()=>{
          fetch(`https://api.github.com/users`)
          .then(stream => stream.json())
          .then(results => setTitle(results))
        },[]);

    let error = true; 
return (
    <div className="containerSignIn">
        <div className="leftImg">
            <LeftPartBackground src = {'sinInImg'} /> 
        </div>
        <div className="rightSignIn">
            <div className="textTop">
                <h1>Nice to see you!</h1>
                <p>Enter your email and password to sign in</p>
            </div>
        <div className="inputsAndButton">
            <form onSubmit={e=>{
                e.preventDefault();
                title.map(e =>{
                    if(e.login === email && e.node_id === password){
                        alert('Login was successful')
                            setEmail('')
                            setPassword('') 
                            error = false  
                    }
                })

                if(error){
                    alert("Try again")
                    setEmail('')
                    setPassword('') 
                }
                }}>
                <CustomInput value={email} label={"Email"} width={300} placeholder={"Your email..."} type ={'text'} setValue = {setEmail}/> 
                <CustomInput value={password} label={"Password"} width={300} placeholder={"Your password..."} type ={'password'} setValue = {setPassword} /> 
                <CustomButton value={"sign in"} width={300}/> 

            </form>
                         
        </div>

        <div className="links"> 
            <span>Don't have an account? 
                <a href="#">Sign up</a>
            </span>
        </div>
    </div>
</div>)}

export default SignIn;