import './CustomButton.css'

function CustomButton({ width, value, background, border }) {
    return (
        <div>
            <button style={{width : width, background : background, border : border}}>{value}</button>
        </div>
    )
}

export default CustomButton;