import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";

import { FaMusic } from "react-icons/fa";
import { BsFillPersonFill, BsFillBarChartFill } from "react-icons/bs";
import { CgMenu, CgClose } from 'react-icons/cg';

const links = [
  {
    id: 1,
    name: "云音乐",
    path: "/",
    icon: FaMusic,
  },
  {
    id: 2,
    name: "艺术家",
    path: "/top-artists",
    icon: BsFillPersonFill,
  },
  {
    id: 3,
    name: "排行榜",
    path: "/top-charts",
    icon: BsFillBarChartFill,
  },
];

const NavLinks = () => {
  const activatedId = useState(links[0].id);

  const handleLinkClick = useCallback(() => {});

  return (
    <nav className="w-full flex flex-col justify-center items-center">
      {links.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className="w-full rounded hover:bg-[#242529]"
            onClick={handleLinkClick && handleLinkClick()}
          >
            <div className="flex md:flex-col md:gap-x-0 gap-x-2 justify-center items-center h-28 w-full text-navText hover:text-brightRed">
              <item.icon className="w-6 h-6 md:w-8 md:h-8 block" />
              <h3 className="md:text-sm text-xl md:mt-1">{item.name}</h3>
            </div>
          </NavLink>
        );
      })}
    </nav>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <aside className="hidden sticky top-0 md:flex flex-col items-center h-screen w-[160px] bg-black md:px-4 py-8 z-10">
        <div className="mb-8">
          <img src={logo} alt="Logo" className="h-24" />
        </div>
        <NavLinks />
      </aside>

      <div
        className={`md:hidden block absolute top-14 right-14 z-20 cursor-pointer ${ mobileMenuOpen ? 'text-navText' : 'text-gray'}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <CgClose className="w-8 h-8" />
        ) : (
          <CgMenu className="w-8 h-8" />
        )}
      </div>

      <aside className={`md:hidden rounded-b-md flex flex-col justify-start items-center h-fit w-full bg-black py-16 px-4 transition-all fixed z-10 ${ mobileMenuOpen ? 'top-0' : '-top-full'}`}>
        <div className="flex flex-col justify-center items-center mb-4 select-none">
          <img src={logo} alt="Logo" className="h-24" />
        </div>
        <NavLinks />
      </aside>
    </>
  );
};

export default Sidebar;
