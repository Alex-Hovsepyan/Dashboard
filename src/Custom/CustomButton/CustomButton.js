import './CustomButton.css'

function CustomButton({ width, value }) {
    return (
        <div>
            <button style={{width : width}}>{value}</button>
        </div>
    )
}

export default CustomButton;