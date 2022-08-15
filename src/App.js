// import SignUp from "../src/SignUp/SignUp";
import React from "react";
import LeftPartBackground from "./LeftPartBackground/LeftPartBackground";
// import CustomInput from "./Custom/CustomInput/CustomInput"
// import CustomButton from "./Custom/CustomButton/CustomButton";
import CustomTable from "./Custom/CustomTable/CustomTable";
import SignIn from "./SignIn/SignIn";
import Dashboard from "./Dashboard/Dashboard";

function App(){
  const location = document.location.pathname;
  console.log(location)
  return (
    <div>
      {/* <CustomTable/> */}
      <Dashboard />
      {/* <SignIn /> */}
      {/* {location === "/signIn" ? <SignIn /> : <SignUp />} */}
      {/* <SignIn/> */}
        {/* <LeftPartBackground src = {'sinInImg'} /> */}
        {/* <CustomInput label={"Name"} width={300} placeholder={"Your password..."} /> */}
        {/* <CustomButton value={"sign in"} /> */}
      
    </div>
  );
}

export default App;
