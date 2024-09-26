import sidebarItems from "./sideitems";
import "./Sidebar.css";
import { SidebarItem, SidebarDropdownItem } from "./sidebarItems";
import { Gauge} from "lucide-react";

// Main Sidebar Component
const Sidebar = () => {
  const navItems = sidebarItems

  return ( 
    <div className="w-full mt-4">
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <SidebarItem
            sidebarItem={{
              text: "Dashboard",
              icon: Gauge,
              link: "/Dashboard",
              badge: "NEW",
            }}
          />

          {navItems.map((navItem, index) => (
            <div key={index}>
              <div className="my-2 text-slate-400">{navItem.text}</div>
              {navItem.items.map((item, idx) =>
                item.dropdown ? (
                  <SidebarDropdownItem sidebarItem={item} key={idx} />
                ) : (
                  <SidebarItem sidebarItem={item} key={idx} />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
