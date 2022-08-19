import CustomSwitcher from '../../Custom/CustomSwitcher/CustomSwitcher';
import './PlatformSettings.scss'

let x = 0;
let y = 0;

function PlatformSettings() {


    function Content({value}) {
        return (
            <div className='SettingsContent'>
                <CustomSwitcher />
                <p>{value}</p>
            </div>
        
            
        )
    }

    const text = [
            'Email me when someone follows me',
            'Email me when someone answers on my post',
            'Email me when someone mentions me',
    ]

    const text2 = [
        'New launches and projects',
        'Monthly product updates',
        'Subscribe to newsletter',
        'Receive mails weekly',
    ]

    return (
        <div className="SettingsContainer">
            <h1>Platform Settings</h1>
            <p>ACCOUNT</p>
                {text.map(item => <Content  
                value={text[x++]}
                />)}
            <p>APPLICATION</p>
            <Content  value={text2[y++]}/>
        </div>
    )
}

export default PlatformSettings;