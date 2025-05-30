import React from "react";

const PrimaryButton = () => {
  return (
    <div
      className="rounded-[12px] border border-white/15 p-[6px] flex gap-[10px] text-white cursor-pointer hover:p-[1px] transition-all duration-300"
      style={{
        backdropFilter: "blur(14px)",
      }}>
      <a
        className="primary-button-inner rounded-[8px] border border-white/15 px-[25px] py-[8px] flex gap-[10px] hover:px-[30px] hover:py-[10px] transition-all duration-300"
        style={{
          background: "#8C45FF66",
          boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
        }}>
        Join waitlist
      </a>
    </div>
  );
};

export default PrimaryButton;
