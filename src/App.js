import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import SignIn from "./SignIn/SignIn";
import Billing from "./Billing/Billing";
import Profile from "./Profile/Profile";
import SignUp from "./SignUp/SignUp";
import Tables from "./Tables/Tables";
import Projects from "./Profile/Projects/Projects";

function App(){
  return (
    <Routes>
      <Route path="" element={<Dashboard />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/billing" element={<Billing />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
    </Routes>

  );
}

export default App;
