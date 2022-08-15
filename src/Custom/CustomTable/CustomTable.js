import TableForm from "./TableForm";
import s from  "./CustomTable.module.scss";
function CustomTable() {
    const dataAuthors=[
        {   
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" ,'Esthera Jackson','esthera@simmmple.com'],
            FUNCTION:['Manager','Organization'],
            STATUS: "Online",
            EMPLOYED: "23/04/18",
            ACTION : "Edit"
        },
        {   
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png" ,'Alexa Liras','alexa@simmmple.com'],
            FUNCTION:['Programator','Developer'],
            STATUS: "Offline",
            EMPLOYED: "11/01/19",
            ACTION : "Edit"
        },
        {       
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png" ,'Laurent Michael','laurent@simmmple.com'],
            FUNCTION:['Executive','Projects'],
            STATUS: "Online",
            EMPLOYED: "24/12/08",
            ACTION : "Edit"
        },
        {    
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png" ,'Freduardo Hill','freduardo@simmmple.com'],
            FUNCTION:['Programator','Developer'],
            STATUS: "Online",
            EMPLOYED: "04/10/21" ,
            ACTION : "Edit"
        },
        {   
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar5.ffd2f0d1.png" ,'Daniel Thomas','daniel@simmmple.com'],
            FUNCTION:['Managerr','Executive'],
            STATUS: "Offline",
            EMPLOYED: "11/01/19" ,
            ACTION : "Edit"
        },
        {   
            AUTHOR:[ "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar6.ce4b99ea.png" ,'Mark Wilson','mark@simmmple.com'],
            FUNCTION:['Programator','Developer'],
            STATUS: "Offline",
            EMPLOYED: "14/09/20" ,
            ACTION : "Edit"
        }
    ];
   
    const dataProjects =[
        {   
            PROJECT:["https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw" ,'Chakra Vision UI Version'],
            BUDGET:'	$14,000',
            STATUS: "Working",
            COMPLETION: "60%" ,
            ACTION : []
        },
        {   
            PROJECT:[ "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/44/a1aa6de0754300a8bb8a2f2d2ac817/atlassian-logo-gradient-vertical-white.png?auto=format%2Ccompress&dpr=1" ,'Add Progress Track'],
            BUDGET:'$3,000',
            STATUS: "Done",
            COMPLETION: "100%" ,
            ACTION : []
        },
        {       
            PROJECT:[ "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/55/24/18/552418a7-6b9e-57b1-6b98-5f7d2b458c78/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp" ,'Fix Platform Errors',],
            BUDGET:'Not set',
            STATUS: "Canceled",
            COMPLETION: "30%" ,
            ACTION : []
        },
        {       
            PROJECT:[ "https://play-lh.googleusercontent.com/qZpgL9UUqJ4vqDPV8nRYACCt5DUFrMZxJHwozHNsckNBa3x3nWcliksooqaw_DEzvQ=w240-h480-rw" ,'Launch our Mobile App',],
            BUDGET:'$32,000',
            STATUS: "Canceled",
            COMPLETION: "0%" ,
            ACTION : []
        },  
        {       
            PROJECT:[ "https://www.qmedia.by/assets/images/blog/google-tag-manager-reco.png" ,'Add the New Pricing Page',],
            BUDGET:'$2,300',
            STATUS: "Done",
            COMPLETION: "100%" ,
            ACTION : []
        }   
    ];
    
 
return(  
   <div className={s.container}>
        <div className={s.left}></div>
            <div className={s.right}>
                <div className={s.top}>
                    <TableForm value={'data'} data = {dataAuthors} tableName = {'Authors table'} width = {'100%'} height = {"75vh"}/>
                </div>
            <div>
                <TableForm value={'data1'} data = {dataProjects} tableName = {'Projects table'} width = {'100%'} height = {"50vh"}/>
            </div>
        </div>
    </div>
)
}

export default CustomTable;