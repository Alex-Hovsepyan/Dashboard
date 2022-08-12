import './CustomButton.css'

function CustomButton(props) {
    return (
        <div>
            <button style={{width : props.width}}>{props.value}</button>
        </div>
    )
}

export default CustomButton;