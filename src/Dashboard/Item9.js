import s from "./Dashboard.module.scss";
import Chart from "react-apexcharts"
import CustomItem2 from "./CustomItems/CustomItem2";
import card from "../assets/images/credit-card.svg";
import rocket from "../assets/images/rocket.svg";
import carts from "../assets/images/carts.svg";
import wrench from "../assets/images/wrench.svg";

const series = [
    {
        name: 'Free Cash Flow',
        data: [300, 400, 360, 260, 450, 480, 220, 100, 410],
        color: 'white',
    }
];

const options = {
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25px',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
    },
    xaxis: {
        categories: [' '],
    },
    yaxis: {
        labels: { style: { colors: 'white' } }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
        formatter: function (val) {
            return "$ " + val + " thousands"
        }
        },
    }
};

const Item9 = () => <div className={`${s.item} ${s.item9}`}>
    <div className={s.chartBar}>
        <Chart 
            options={options} 
            series={series} 
            type="bar" 
            height={200}
        />
    </div>
    <div className={s.bottom}>
        <h2>Active Users</h2>
        <p><span>(+23)</span> than last week</p>
        <div className={s.grid}>
            <CustomItem2 src={card} text="Users" num="32,984" width="60%" />
            <CustomItem2 src={rocket} text="Clicks" num="2,42M" width="55%" />
            <CustomItem2 src={carts} text="Sales" num="2,400$" width="40%" />
            <CustomItem2 src={wrench} text="Items" num="320" width="80%" />
        </div>
    </div>
</div>

export default Item9;