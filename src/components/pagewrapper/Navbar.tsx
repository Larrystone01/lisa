import { Link, NavLink } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
import { PiBookOpenUser, PiHandHeartThin } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Event", path: "/events" },
  { name: "Testimonies", path: "/testimonies" },
  { name: "Join Us", path: "/contact" },
];

const sideBarLinks = [
  { name: "Gatherings", path: "/events", icon: <IoMdCalendar /> },
  { name: "Sermons", path: "/sermons", icon: <PiBookOpenUser /> },
  { name: "Giving", path: "/giving", icon: <PiHandHeartThin /> },
  { name: "About", path: "/about", icon: <CiCircleInfo /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const mobilestyling = `${isOpen ? "translate-x-0" : "-translate-x-full"}`;
  return (
    <nav className="bg-transparent relative border-b border-b-primary md:border-none">
      <div className="container mx-auto px-6">
        <div className="nav-container flex justify-between items-center py-6">
          <div className="hamburger-menu md:hidden">
            <button className="cursor-pointer" onClick={handleOpen}>
              <GiHamburgerMenu />
            </button>
          </div>
          <Link to="/" className="logo">
            <h1 className="logo font-primary text-[30px]">LISA</h1>
          </Link>
          {/* Mobile Navigation */}
          <div
            className={`${mobilestyling} mobile-nav absolute md:hidden bg-neutral w-[75%] h-screen top-0 left-0 py-20 px-8 shadow-2xl transition-all duration-1000`}
          >
            <div className="mobile-nav-container">
              <div className="top-heading flex justify-between items-center mb-10">
                <Link
                  to="/"
                  className="uppercase font-secondary text-[15px] font-light tracking-[0.15em]"
                >
                  Lisa church
                </Link>
                <button className="cursor-pointer" onClick={handleClose}>
                  <IoCloseSharp />
                </button>
              </div>
              <div className="nav-content flex flex-col gap-6">
                {sideBarLinks.map((link) => (
                  <Link
                    className="link-content flex gap-3 items-center font-extralight w-fit"
                    key={link.name}
                    to={link.path}
                  >
                    <span>{link.icon}</span>{" "}
                    <span className="text-[14px]">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="navlinks md:flex gap-8 hidden">
            {navLinks.map(({ name, path }) => (
              <NavLink
                to={path}
                key={name}
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-6" : ""
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
          <div className="plan-your-visit-btn hidden md:block">
            <Link to={""} className="bg-primary text-neutral py-2.5 px-5">
              Plan Your Visit
            </Link>
          </div>
          <Link to={""} className="md:hidden">
            Visit
          </Link>
        </div>
      </div>
    </nav>
  );
}
