import s from "./Dashboard.module.scss";
import Chart from "react-apexcharts"

const series = [
    {
        name: 'Mobile apps',
        data: [500, 250, 300, 210, 500, 255, 300, 230, 300, 350, 250, 400]
    },
    {
        name: 'Websites',
        data: [200, 230, 300, 340, 380, 410, 550, 350, 400, 500, 320, 550],
        color: 'rgb(70, 181, 218)'
    }
];

const options = {
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: { style: { colors: 'white', fontSize: '12px'}}
    },
    yaxis: {
        labels: { style: { colors: 'silver' } },
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    chart: {
        toolbar: {
            show: false
        }
    }
}

const Item8 = () => <div className={`${s.item} ${s.item8}`}>
    <h2>Sales Overview</h2>
    <p><span>+5% more</span> in 2021</p>
    <div className={s.chartArea}>
    <Chart 
        options={options} 
        series={series} 
        type="area" 
        height={300}
    />    
    </div>
</div> 

export default Item8;

