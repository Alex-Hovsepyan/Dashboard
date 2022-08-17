import s from "./Dashboard.module.scss";

const Item5 = () => <div className={`${s.item} ${s.item5}`}> 
    <h4>Welcome back,</h4>
    <h2>Mark Johnson</h2>
    <h3>Glad to see you again!<br/>Ask me anything.</h3>
    <p>Tap to record</p>
</div>

export default Item5;