import React from "react";
import HamburgerBar from "../images/HamburgerBar";
import SeongnamLogo from "../images/SeongnamLogo";
import User from "../images/User";

export default function LogoBox() {
  return (
    <div>
      <div
        className="grid grid-cols-7 gap-20 px-20 justify-between font-semibold whitespace-nowrap
               text-white h-12 text-center items-center text-2xl"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div>
          <HamburgerBar />
        </div>
        <div>
          <SeongnamLogo />
        </div>
        <div>
          <User />
        </div>
      </div>
    </div>
  );
}
