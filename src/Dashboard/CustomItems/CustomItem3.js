import s from "../Dashboard.module.scss";

function CustomItem3 ({ src, h2, p }) {
    return (
        <div className={s.flex}>
            <img src={src} alt="svg" />
            <div>
                <h2>{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
}

export default CustomItem3;