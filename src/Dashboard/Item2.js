import CustomItem1 from "./CustomItems/CustomItem1";
import globe from "../assets/images/globe.svg";

const Item2 = () => <CustomItem1 
    title="Today's Users"
    result="2,300 "
    percent="+3%"
    name="item2"
    src={globe}
/>

export default Item2;