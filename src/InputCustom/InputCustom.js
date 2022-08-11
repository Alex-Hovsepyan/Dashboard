import {useEffect, useState} from "react"
import "./Input.css"
function InputCustom (){
    return (
        <form >
            <label htmlFor="name">Name
             <input 
              type={"login"}
               placeholder={"Your full name..."}
                style={{width: '264px',}}/>
                 </label>
            <label htmlFor="email">Email
              <input 
                type={"email"}
                 placeholder={"Your email..."}
                  style={{width: '264px',}}/>
                   </label>
            <label htmlFor="password">password
              <input 
                type={"password"}
                 placeholder={"Your password..."}
                  style={{width: '264px',}}/>
                 </label>
        </form>
    )
}


export default InputCustom;
