import CustomItem1 from "./CustomItems/CustomItem1";
import wallet from "../assets/images/wallet.svg";

const Item1 = () => <CustomItem1 
    title="Today's Money"
    result="$53,000"
    percent="+55%"
    name="item1"
    src={wallet}
/>

export default Item1;