import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function NavFooterWrapper() {
  return (
    <>
      <Navbar />
      {/* <div className="outlet h-screen"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
}
