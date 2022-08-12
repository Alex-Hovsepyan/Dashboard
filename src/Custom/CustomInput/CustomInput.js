import "./CustomInput.css"
function CustomInput({id, label, value, type, placeholder, width, setValue }){
    return (
      <label htmlFor={id}>{label}
        <input 
            id={id}
            value={value}
            type={type}
            placeholder={placeholder}
            style={{ width: width }}
            onChange={ e => setValue(e.target.value) }
          />
      </label>
    )
}


export default CustomInput;
