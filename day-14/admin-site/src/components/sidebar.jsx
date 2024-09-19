import { elements } from "chart.js";
import { Bell, Circle, Droplet, Pencil,Map, Puzzle,CalendarDays, Send,Star, BookText } from "lucide-react";
import { Link } from "react-router-dom";


export const sidebarItems = [
    {
        text: "THEME",
        items: [
            {
                text: "Colors",
                icon: Droplet,
                Link: "/Colors"
            },
            {
                text: "Typography",
                icon: Pencil,
                Link: "Topography"
            }
        ]
    },
    {
        text: "COMPONENTS",
        items: [
            {
                text: "Base",
                icon: Puzzle,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        text: "Accordion",
                        icon: Circle,
                        Link: "/Accordion"
                    },
                    {
                        text: "Breadcrumb",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                text: "Buttons",
                icon: Send,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        text: "Buttons",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        text: "Buttons Gropus",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                text: "Forms",
                icon: BookText ,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        text: "Form Contol",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        text: "Select",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                text: "Icons",
                icon: Star ,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        text: "CoreUI Free",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        text: "CoreUI Flags",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                text: "Notifications",
                icon: Bell,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        text: "Alerts",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        text: "Badges",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            }
        ]
    },
    {
        text: "PLUGINS",
        items: [
            {
                text:"Calender",
                icon:CalendarDays,
                Link:"/"
            },
            {
                text:"Maps",
                icon: Map ,
                Link:"/"
            }
        ]
    }
]