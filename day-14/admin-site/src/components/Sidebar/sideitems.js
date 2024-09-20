import {
    BookText,
    PieChart,
    Grid3X3,
    Layers,
    Puzzle,
    Send,
    MapIcon,
    ClipboardList,
    Droplet,
    Pencil,
    Star,
    Calendar,
    Bell
  } from "lucide-react";

const sidebarItems = [
    {
      text: "THEME",
      items: [
        {
          text: "Color",
          icon: Droplet,
          link: "/color"
        },
        {
          text: "Typography",
          icon: Pencil,
          link: "/Topography"
        }
      ]
    },
    {
      text: "COMPONENTS",
      items: [
        {
          text: "Base",
          icon: Puzzle,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Accordion",
              link: "/accordion"
            },
            {
              text: "Breadcrumb",
              link: "breadcrumbs"
            }
          ]
        },
        {
          text: "Buttons",
          icon: Send,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Buttons",
              link: "/"
            },
            {
              text: "Buttons groups",
              link: "/"
            }
          ]
        },
        {
          text: "Forms",
          icon: BookText,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Form Control",
              link: "/"
            },
            {
              text: "Select",
              link: "/"
            }
          ]
        },
        {
          text: "Icons",
          icon: Star,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "CoreUI Free",
              link: "/"
            },
            {
              text: "CoreUI Flags",
              link: "/"
            }
          ]
        },
        {
          text: "Notifications",
          icon: Bell,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Alerts",
              link: "/"
            },
            {
              text: "Badges",
              link: "/"
            }
          ]
        },
        
      ]
    },
    {
      text: "PLUGINS",
      items: [
        {
          text: "Calendar",
          icon: Calendar,
          link: "/calendar",
          badge: "PRO"
        },
        {
          text: "Charts",
          icon: PieChart,
          link: "/"
        },
        {
          text: "Google Maps",
          icon: MapIcon,
          link: "/google",
          badge: "PRO"
        }
      ]
    },
    {
      text: "EXTRAS",
      items: [
        {
          text: "Pages",
          icon: Star,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Login",
              link: "/color"
            },
            {
              text: "Register",
              link: "/"
            }
          ]
        },
        {
          text: "Apps",
          icon: Layers,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Invoicing",
              link: "/"
            },
            {
              text: "Email",
              link: "/"
            }
          ]
        }
      ]
    }
  ];
  

export default sidebarItems;