import s from "./CustomInput.module.scss";
function CustomInput({id, label, value, type, placeholder, width, setValue}){
    return (
      <div className={s.inputWrapper}>
        {label && <label className={s.label} htmlFor={id}>{label}</label>}
        <input 
          className={s.input}
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          style={{ width: width }}
          onChange = {e => setValue(e.target.value)}
        />
      </div>
    )
}


export default CustomInput;
