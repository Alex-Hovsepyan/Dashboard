import s from "./UserPart.module.scss";

function ListItem ({ src, text, id }) {
    return (
        <label htmlFor={s[id]}>
            <img src={src} alt={text} />
            <span>{text}</span>
        </label>
    );
}

export default ListItem;