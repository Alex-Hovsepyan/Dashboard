import Svg from "../Svg";

function TransactionContents({value, name, date, money, color}) {
    if(value === 'true') {
        return (
            <div className="TransationContainer">
                <div className="TransationLeftPart">
                    <div style={{color : color, borderColor : color}} className={'arrow'}>
                        ^
                    </div>
                    <div className="TransationText">
                        <p>{name}</p>
                        <span>{date}</span>
                    </div>
                </div>
                <p style={{color : color}}>{money}</p>
            </div>
        )
    }

    if(value === 'f') {
        return (
            <div className="TransationContainer">
                <div className="TransationLeftPart">
                    <div className={'arrow2'}>
                        ^
                    </div>
                    <div className="TransationText">
                        <p>{name}</p>
                        <span>{date}</span>
                    </div>
                </div>
                <p style={{color : color}}>{money}</p>
            </div>
        )
    }

    if(value === 'Webflow') {
        return (
            <div className="TransationContainer">
                <div className="TransationLeftPart">
                    <div className={'arrow3'}>
                        !
                    </div>
                    <div className="TransationText">
                        <p>{name}</p>
                        <span>{date}</span>
                    </div>
                </div>
                <p style={{color : color}}>{money}</p>
            </div>
        )
    }

}

export default TransactionContents