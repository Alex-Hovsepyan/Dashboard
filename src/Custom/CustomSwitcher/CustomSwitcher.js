import s from "./CustomSwitcher.module.scss";

const CustomSwitcher = ({ checked }) => <label className={s.switch}>
    <input type="checkbox" checked={checked} />
    <span className={`${s.slider} ${s.round}`} />
</label>

export default CustomSwitcher;