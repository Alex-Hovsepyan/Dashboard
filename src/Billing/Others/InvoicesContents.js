import Svg from '../Svg';

function InvoicesContents({date, code, money}) {
    return (
        <div className='InvoicesItem'>
            <div className='LeftInvoicesPart'>
                <p>{date}</p>
                <span>{code}</span>
            </div>
            <div class='RightInvoicesPart'>
                <p>{money}</p>
                <div>
                <Svg value={'file'} />
                <span>PDF</span>
                </div>
            </div>
        </div>
    )
}

export default InvoicesContents