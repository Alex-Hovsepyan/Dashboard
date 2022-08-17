import home from "../assets/sidebarIcons/home.svg";
import tables from "../assets/sidebarIcons/chart.svg";
import billing from "../assets/sidebarIcons/credit-card.svg";
import profile from "../assets/sidebarIcons/signup.svg";
import signIn from "../assets/sidebarIcons/file.svg";
import signUp from "../assets/sidebarIcons/rocket.svg";

export const generalItems = [
    {
        route: "Dashboard",
        path: "/dashboard",
        icon: {
            src: home,
            alt: "Dashboard"
        }
    },
    {
        route: "Tables",
        path: "/tables",
        icon: {
            src: tables,
            alt: "Tables"
        }
    },
    {
        route: "Billing",
        path: "/billing",
        icon: {
            src: billing,
            alt: "Billing"
        }
    }
]

export const accountPages = [
    {
        route: "Profile",
        path: "/profile",
        icon: {
            src: profile,
            alt: "Profile"
        }
    },
    {
        route: "Sign In",
        path: "/signIn",
        icon: {
            src: signIn,
            alt: "Sign in"
        }
    },
    {
        route: "Sign Up",
        path: "/signUp",
        icon: {
            src: signUp,
            alt: "Sign up"
        }
    }
]