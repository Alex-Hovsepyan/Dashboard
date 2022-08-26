import xd from "../../assets/images/logo-xd.svg";
import slack from "../../assets/images/logo-slack.svg";
import webdev from "../../assets/images/logo-webdev.svg";
import spotify from "../../assets/images/logo-spotify.svg";
import jira from "../../assets/images/logo-jira.svg";
import invision from "../../assets/images/logo-invision.svg"; 
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";

export const tbodyData = [
    {
        id: Math.random(),
        src: xd,
        companies: "Chakra Vision Ul Version",
        images: [avatar1, avatar2, avatar3, avatar4],
        budget: "$14,000",
        completion: "60%"
    },
    {
        id: Math.random(),
        src: webdev,
        companies: "Add Progress Track",
        images: [avatar2, avatar4],
        budget: "$3,000",
        completion: "10%"
    },
    {
        id: Math.random(),
        src: slack,
        companies: "Fix Platform Errors",
        images: [avatar1, avatar3],
        budget: "Not set",
        completion: "100%"
    },
    {
        id: Math.random(),
        src: spotify,
        companies: "Launch our Mobile App",
        images: [avatar4, avatar3, avatar2, avatar1],
        budget: "$20,500",
        completion: "100%"
    },
    {
        id: Math.random(),
        src: jira,
        companies: "Add the New Pricing Page",
        images: [avatar4],
        budget: "$500",
        completion: "25%"
    },
    {
        id: Math.random(),
        src: invision,
        companies: "Redesign New Online Shop",
        images: [avatar1, avatar4],
        budget: "$2,000",
        completion: "40%"
    },
];



export const theadData = [
    {text: "COMPANIES", id: Math.random()},
    {text: "MEMBERS", id: Math.random()},
    {text: "BUDGET", id: Math.random()},
    {text: "COMPLETION", id: Math.random()}
];