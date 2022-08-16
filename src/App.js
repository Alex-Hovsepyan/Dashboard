import React from "react";
import LeftPartBackground from "./LeftPartBackground/LeftPartBackground";
// import CustomInput from "./Custom/CustomInput/CustomInput"
// import CustomButton from "./Custom/CustomButton/CustomButton";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
        <LeftPartBackground src = {'sinInImg'} />
        {/* <CustomInput label={"Name"} width={300} placeholder={"Your password..."} /> */}
        {/* <CustomButton value={"sign in"} /> */}
         <Footer/>
    </div>
  );
}

export default App;
