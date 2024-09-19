import { elements } from "chart.js";
import { Bell, Circle, Droplet, Pencil,Map, Puzzle,CalendarDays, Send,Star, BookText } from "lucide-react";
import { Link } from "react-router-dom";


export const sidebarItems = [
    {
        text: "THEME",
        items: [
            {
                Theme: "Colors",
                icon: Droplet,
                Link: "/Colors"
            },
            {
                Theme: "Typography",
                icon: Pencil,
                Link: "Topography"
            }
        ]
    },
    {
        text: "COMPONENTS",
        items: [
            {
                Theme: "Base",
                icon: Puzzle,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        Drop: "Accordion",
                        icon: Circle,
                        Link: "/Accordion"
                    },
                    {
                        Drop: "Breadcrumb",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                Theme: "Buttons",
                icon: Send,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        Drop: "Buttons",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        Drop: "Buttons Gropus",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
               Theme: "Forms",
                icon: BookText ,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        Drop: "Form Contol",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        Drop: "Select",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                Theme: "Icons",
                icon: Star ,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        Drop: "CoreUI Free",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        Drop: "CoreUI Flags",
                        icon: Circle,
                        Link: "/"
                    }
                ]
            },
            {
                Theme: "Notifications",
                icon: Bell,
                Link: "/",
                dropdown: true,
                elements: [
                    {
                        Drop: "Alerts",
                        icon: Circle,
                        Link: "/"
                    },
                    {
                        Drop: "Badges",
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
                Theme:"Calender",
                icon:CalendarDays,
                Link:"/"
            },
            {
                Theme:"Maps",
                icon: Map ,
                Link:"/"
            }
        ]
    }
]