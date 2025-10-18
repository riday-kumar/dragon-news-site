import React from "react";
import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classImg from "../../assets/class.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 py-5 px-3">
      <h2 className="text-[20px] font-bold mb-5">QZone</h2>
      <div className="flex flex-col items-center gap-5">
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
