import Svg from "../Svg";


function InformationContents({title, name, email, number}) {
    return (
        <div className="InformationContent">
            <div className="InformationHeader">
                <p>{title}</p>
                <div className="InfoRightPart">
                    <div className="Delete">
                        <Svg value={'delete'} />
                            <span>DELETE</span>
                    </div>
                    <div className="Edit">
                         <Svg value={'pencil'} color={'rgb(160, 174, 192)'} width={40} height={20} />
                <span>EDIT</span>
                    </div>
                </div>
            </div>
            <h5>Company Name: {name}</h5>
            <h5>Email Address: { email}</h5>
            <h5>VAT Number: FRB1235476</h5>
        </div>
    )
}

export default InformationContents