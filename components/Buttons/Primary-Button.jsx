import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div
      className="rounded-[12px] text-center border border-white/15 p-[6px] flex gap-[10px] text-white cursor-pointer hover:p-[1px] transition-all duration-300"
      style={{
        backdropFilter: "blur(14px)",
      }}>
      <a
        className="w-full  rounded-[8px] border border-white/15 px-[15px] py-[2px] hover:px-[21px] hover:py-[6px] hover:rounded-[12px] transition-all duration-300"
        style={{
          background: "#8C45FF66",
          boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
        }}>
        {text}
      </a>
    </div>
  );
};

export default PrimaryButton;
