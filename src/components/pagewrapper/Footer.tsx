import { Link } from "react-router-dom";
import { FaCircleArrowRight, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Mixlr from "../mixlr";

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Event", path: "/events" },
  { name: "Testimonies", path: "/testimonies" },
  { name: "Join Us", path: "/contact" },
];

const connectLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Sermon", path: "/sermons" },
  { name: "Prayer Request", path: "/prayer-request" },
];
export default function Footer() {
  return (
    <footer className="bg-neutral py-10">
      <div className="container px-6 mx-auto">
        <div className="footer-container flex flex-col space-y-6 md:grid grid-cols-4 pb-30 border-b border-b-[#c4c7c7]">
          <div className="footer-logo_description">
            <h1 className="uppercase text-[70px]">LISA</h1>
            <p className="text-[14px] w-62">
              Building a modern community of faith in the heart of the city.
              Join us as we explore the way of Jesus together.
            </p>
          </div>
          <div className="explore">
            <h3 className="uppercase tracking-[0.15em] text-[14px] font-semibold mb-5">
              explore
            </h3>
            <div className="footer-links flex flex-col space-y-3">
              {footerLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className="w-fit transition hover:translate-x-1 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="connect">
            <h3 className="uppercase tracking-[0.15em] text-[14px] font-semibold mb-5">
              connect
            </h3>
            <div className="footer-links flex flex-col space-y-3">
              {connectLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className="w-fit transition hover:translate-x-1 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="stay-updated">
            <h3 className="uppercase tracking-[0.15em] text-[14px] font-semibold mb-5">
              stay updated
            </h3>
            <div className="email-address border-b pr-2 pb-2 flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full outline-none"
              />
              <button className="cursor-pointer pl-2 transition hover:-translate-y-0.5 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0">
                <FaCircleArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="copyright-socials mt-15 flex justify-between items-center">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} LISA. All rights reserved.</p>
          </div>
          <div className="socials flex gap-2">
            <Link
              to=""
              className="transition hover:-translate-y-1 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              to=""
              className="transition hover:-translate-y-1 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
            >
              <FaInstagram size={28} />
            </Link>
            <Link
              to=""
              className="transition hover:-translate-y-1 hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
            >
              <Mixlr width={28} height={28} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
