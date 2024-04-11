import React, { useState } from "react";
import {
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "../assets/icons/right-arrow.png";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
<motion.div
  animate={isExpanded ? "expanded" : "nonexpanded"}
  variants={variants}
  className={
    "py-10 flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
    (isExpanded ? " px-10" : " px-6")
  }
>
  <div
    onClick={() => setIsExpanded(!isExpanded)}
    className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
  >
    <img src={RightArrowIcon} className="w-2" />
  </div>

  <div
    onClick={() => setIsExpanded(!isExpanded)}
    className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#4ce07d] flex justify-center items-center"
  >
    <img src={RightArrowIcon} className="w-2" />
  </div>
  <div className="logo-div flex space-x-4 items-center text-xl font-bold">
    <span className={!isExpanded ? "hidden" : "block"}>Electrify</span>
  </div>
  <div className="flex flex-col space-y-8 mt-12">
    <div className="nav-links w-full">
      <div className="flex space-x-3 w-full p-2 rounded bg-[#4ce07d] text-white">
        <LayoutDashboard />
        <span className={!isExpanded ? "hidden" : "block"}>Dashboard</span>
      </div>
    </div>
  </div>
</motion.div>

  );
}

export default Navbar;