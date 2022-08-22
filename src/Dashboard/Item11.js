import s from "./Dashboard.module.scss";
import CustomItem3 from "./CustomItems/CustomItem3";
import done from "../assets/images/done.svg";
import bell from "../assets/images/bell.svg";
import html from "../assets/images/html.svg";
import carts from "../assets/images/carts.svg";
import card from "../assets/images/credit-card.svg";
import dropBox from "../assets/images/dropbox.svg";
import xd from "../assets/images/logo-xd.svg";

function Item11 () {
    return (
        <div className={`${s.item} ${s.item11}`}>
            <h2>Orders overview</h2>
            <img src={done} alt="svg" />
            <span>+30% this month</span>
            <div>
                <br />
                <CustomItem3 h2="$2400, Design changes" p="22 DEC 7:20 PM" src={bell} />
                <CustomItem3 h2="New order #1832412" p="21 DEC 11 PM" src={html} />
                <CustomItem3 h2="Server payments for April" p="21 DEC 9:34 PM" src={carts} />
                <CustomItem3 h2="New card added for order" p="20 DEC 2:20 AM" src={card} />
                <CustomItem3 h2="New card added for order" p="18 DEC 4:54 AM" src={dropBox} />
                <CustomItem3 h2="New order #9583120" p="17 DEC" src={xd} />
            </div>
        </div>
    );
}

export default Item11;