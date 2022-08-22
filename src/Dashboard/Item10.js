import s from "./Dashboard.module.scss";
import done from "../assets/images/done.svg";
import { theadData, tbodyData } from "./TablePart/tableData";
import CustomTh from "./TablePart/CustomTh";
import CustomTr from "./TablePart/CustomTr";

function Item10 () {
    return (
        <div className={`${s.item} ${s.item10}`}>
            <h2>Projects</h2>
            <div className={s.text}>
                <img src={done} alt={done} />
                <span>30 done this month</span>
            </div>
            <table>
                <thead>
                    <tr>
                        {theadData.map(i => <CustomTh text={i.text} key={i.id} />)}
                    </tr>
                </thead>
                <tbody>
                    {tbodyData.map(i => <CustomTr 
                        key={i.id}
                        src={i.src}
                        companies={i.companies}
                        images={i.images}
                        budget={i.budget}
                        completion={i.completion}
                    />)}
                </tbody>
            </table>
        </div>
    );
}

export default Item10;