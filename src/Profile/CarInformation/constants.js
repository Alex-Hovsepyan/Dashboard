import battery from "../../assets/icons/battery.svg";
import lightning from "../../assets/icons/lightning.svg";

export const carInformation = [
    {
        title: 'Battery Health',
        percentage: "76%",
        icon: {
            src: battery,
            alt: "Battery"
        }
    },
    {
        title: 'Efficiency',
        percentage: "+20%",
        icon: "chart"
    },
    {
        title: 'Consumption',
        percentage: "163W/km",
        icon: {
            src: lightning,
            alt: "Lightning"
        }
    },
    {
        title: 'This Week',
        percentage: "1.342km",
        icon: "chart"
    }
]