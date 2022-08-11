import React from "react";
import CustomInput from "./Custom/CustomInput/CustomInput"
import CustomButton from "./Custom/CustomButton/CustomButton";

function App() {
  return (
    <div>
      <CustomInput label={"Name"} width={300} placeholder={"Your password..."} />
      {/* <CustomButton value={"sign in"} /> */}
    </div>
  );
}

export default App;
