import "./CustomInput.css"
function CustomInput({id, label, value, type, placeholder, width }){
    return (
      <label htmlFor={id}>{label}
        <input 
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          style={{ width: width }}/>
      </label>
    )
}


export default CustomInput;
