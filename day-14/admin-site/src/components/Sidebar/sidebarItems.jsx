import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";

// Sidebar Item Component
export const SidebarItem = ({ sidebarItem }) => {
  return (
    <div className="flex w-full items-center rounded-md gap-2 px-3 hover:bg-slate-400 py-4">
      <div className="flex items-center justify-center">
        <sidebarItem.icon className="w-5 h-5" />
      </div>
      <Link className="flex-grow flex items-center justify-between" to={sidebarItem.link}>
        <span>{sidebarItem.text}</span>
        {sidebarItem.badge && (
          <button className="border-none flex justify-center items-center rounded-sm text-xs bg-purple-500 h-4 p-1 text-white">{sidebarItem.badge}</button>
        )}
      </Link>
    </div>
  );
};

// Sidebar Dropdown Item Component
export const SidebarDropdownItem = ({ sidebarItem }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <>
      <div className="flex w-full items-center rounded-md gap-2 px-3 hover:bg-slate-500 py-4 ">
        <div className="flex items-center justify-center">
          <sidebarItem.icon className="w-5 h-5" />
        </div>
        <Link className="flex-grow flex items-center justify-between" onClick={() => setIsDropdown(!isDropdown)}>
          <span>{sidebarItem.text}</span>
          {isDropdown ? <ChevronUp /> : <ChevronDown />}
        </Link>
      </div>
      {isDropdown && (
        <div className="dropdown">
          {sidebarItem?.elements.map((item, index) => (
            <div key={index} className="flex w-full items-center rounded-md gap-2 px-3 hover:bg-slate-500 py-4">
              <div className="flex items-center justify-center">
                <Dot className="w-5 h-5" />
              </div>
              <Link className="flex-grow flex items-center justify-between" to={item.link}>
                <span>{item.text}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
