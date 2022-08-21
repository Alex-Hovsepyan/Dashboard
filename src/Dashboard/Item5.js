import CustomWelcomeBack from "../Custom/CustomWelcomeBack/CustomWelcomeBack";
import image from '../assets/images/cardimgfree.5771cbbb.png';
import s from "./Dashboard.module.scss";

const Item5 = () => <CustomWelcomeBack 
    h4={<h4>Welcome back,</h4>}
    h2={<h2>Mark Johnson</h2>}  
    h3={<h3>Glad to see you again!<br/>Ask me anything.</h3>}
    image={image}
    className={s.item5}
/>

export default Item5;