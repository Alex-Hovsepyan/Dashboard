import s from "../Dashboard.module.scss";

function CustomItem1 ({ title, result, percent, src, name }) {
    return (
        <div className={`${s.item} ${s.customItem1} ${s[name]}`}>
            <div>
                <p>{title}</p>
                <h2>{result} <span>{percent}</span></h2>
            </div>
            <div className={s.iconDiv}> 
                <img src={src} alt='svg' />
            </div>
        </div>
    );
}

export default CustomItem1;