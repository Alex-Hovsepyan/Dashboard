import s from "../Dashboard.module.scss";

function CustomItem2 ({ src, text, num, width }) {
    return (
        <div>
            <div className={s.flex}>
                <img src={src} alt='svg' />
                <span>{text}</span>
            </div>
            <p>{num}</p>
            <div className={s.percent}>
                <div style={{ width: width }}></div>
            </div>
        </div>
    );
}

export default CustomItem2;