import ColorItem from "./ColorItem/ColorItem";
import s from "./RightSidebar.module.scss";

function RightSidebar() {
    const colorArray = [
        'linear-gradient(310deg, rgb(67, 24, 255), rgb(159, 122, 234))',
        'linear-gradient(310deg, rgb(0, 117, 255), rgb(33, 212, 253))',
        'linear-gradient(310deg, rgb(1, 181, 116), rgb(201, 251, 213))',
        'linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))',
        'linear-gradient(310deg, rgb(245, 60, 43), rgb(245, 60, 43))'
    ]
    return (
        <div className={s.sidebar}>
            {colorArray.map((item, idx) => <ColorItem key={idx} background={item} />)}
        </div>
    )
}

export default RightSidebar;