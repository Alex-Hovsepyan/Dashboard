import './Billing.scss'; 
import GeneralHeader from '../GeneralHeader/GeneralHeader';
import Sidebar from '../Sidebar/Sidebar';
import Svg from './Svg';
import InvoicesContents from './Others/InvoicesContents';
import InformationContents from './Others/InformationContents';
import TransactionContents from './Others/TransactionContents';
import Footer from "../Footer/Footer";

function Billing() {    
     return ( 
       <div className='main'>  
            <div className='sidebar'>
                <Sidebar />   
            </div>
            <div className='mainContainer'>
                <GeneralHeader locationName={"Billing"} />
                <div className='contents'>  
                        <div className='vision'>                 
                            <div className='visionContent'>                    
                                <p>Vision UI</p>                     
                                <Svg value={'masterCard'}/>                    
                            </div>                 
                            <h4>7812 2139 0823 7916</h4>                 
                                <div className='VisionTextContainer'>                     
                                    <div>                         
                                        <span>VALID THRU</span>                         
                                        <h6>05/24</h6>                     
                                    </div>                     
                                    <div>                         
                                        <span>CVV</span>                         
                                        <h6>09X</h6>                     
                                    </div>                 
                                </div>             
                        </div>              
                        <div className='credit'>                 
                            <div className='FirstCreditContent'>                     
                                <div>                     
                                    <span>Credit Balance</span>                    
                                    <h2>$25,215</h2>                     
                                </div>                     
                                <div className='RightCreditPart'>                               
                                    <Svg value={'elipsis'} />
                                    <Svg value={'wave'} />                                                     
                                </div>                 
                            </div>                 
                            <p>NEWEST</p>                 
                            <div className='SecondCreditContent'>                     
                                <div className='LeftCreditPart'>                    
                                    <div className='svg'>                     
                                        <Svg value={"building"} /> 
                                    </div>
                                    <div>                     
                                        <span>Bill & Taxes</span>                     
                                        <p>Today, 16:36</p>         
                                    </div>                     
                                </div>                     
                                <span>-$154.50</span>                 
                            </div>             
                        </div>              
                        <div className='payment'>                 
                            <div className='PaymentHeader'>                     
                                <span>Payment Method</span>                     
                                <button style={{fontWeight : 'bolder', borderRadius : '10px', background : 'rgb(0, 117, 255)'}}>ADD NEW CARD</button>                 
                            </div>                 
                            <div className='PaymentContainer'>                     
                                <div className='LeftPaymentPart'>                     
                                    <div>     
                                        <Svg value={"coloredMasterCard"} />                                             
                                        <span>7812 2139 0823 XXXX</span>                     
                                    </div>                    
                                    <Svg value={'pencil'} color={'#fff'} width={'30'} height={'30'} />                   
                                </div>                     
                                <div className='RightPaymentPart'>                         
                                    <div>                             
                                        <Svg value={'visa'} />                     
                                        <span>7812 2139 0823 XXXX</span>                         
                                    </div>                         
                                    <Svg value={'pencil'} color={'#fff'} width={'30'} height={'30'} />                    
                                </div>                 
                            </div>             
                        </div>             
                        <div className='invoices'>                 
                            <div className='invoicesHeader'>                     
                                <h6>Invoices</h6>                     
                                <button style={{padding : '0 30px',fontWeight : 'bolder', borderRadius : '10px', background : 'rgb(0, 117, 255)'}}>VIEW ALL</button>                 
                            </div> 
                            <div className='InvoicesContainer'>
                            <InvoicesContents date={'March, 01,2020'} code={'#MS-415646'} money={'$180'} />
                            <InvoicesContents date={'February, 10,2021'} code={'#RV-126749'} money={'$250'} />                       
                            <InvoicesContents date={'April, 05, 2020'} code={'#QW-103578'} money={'$120'} />                       
                            <InvoicesContents date={'June, 25, 2019'} code={'#MS-415646'} money={'$180'} />                       
                            <InvoicesContents date={'March, 01, 2019'} code={'#AR-803481'} money={'$300'} />                       
                            </div>    
                        </div>   

                        <div className='information'>
                            <p>Billing Information</p>
                            <div className='InfornationContainer'>
                                <InformationContents title={'Oliver Liam'} name={' Viking Burrito'} email={'oliver@burrito.com'}/>
                                <InformationContents title={'lucas Harper'} name={'Stone Tech Zone'} email={'lucas@stone-tech.com'} />
                                <InformationContents title={'Ethan James'} name={' Fiber Notion'} email={'ethan@fiber.com'} />
                            </div>
                        </div>   
                                    
                        <div className='transaction'>
                            <header>
                                <p>Your Transaction's</p>
                                <div className="HeaderRightPart">
                                    <Svg value={'calendar'} />
                                    <span>23 - 30 March 2020</span>
                                </div>
                            </header>
                            <h6>NEWEST</h6>  
                            <TransactionContents color={'red'} value={'true'} name={'Netflix'} date={'27 March 2020, at 12:30 PM'} money={'- $ 2,500'} />
                            <TransactionContents color={'green'} value={'f'} name={'Apple'} date={'27 March 2020, at 04:30 AM'} money={'+ $ 2,000'} />
                            <p className='yesterday'>YESTERDAY</p>
                            <TransactionContents color={'green'} value={'f'} name={'Stripe'} date={'26 March 2020, at 13:45 PM'} money={'+ $ 750'} />
                            <TransactionContents color={'green'} value={'f'} name={'Hubspot'} date={'26 March 2020, at 12:30 PM'} money={'+ $ 1,000'} />
                            <TransactionContents color={'green'} value={'f'} name={'Hubspot'} date={'26 March 2020, at 08:30 AM'} money={'+ $ 2,500'} />
                            <TransactionContents color={'rgb(160, 174, 192)'} value={'Webflow'} name={'Webflow'} date={'26 March 2020, at 05:00 AM'} money={'Pending'} />
                            
                             
                        </div>              
                </div>  
            </div>   
            <Footer/>
        </div>                        
        
    ) 
}  
            
            
            
export default Billing