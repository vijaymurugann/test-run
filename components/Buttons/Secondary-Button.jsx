import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <div
      className="rounded-[12px] border border-white/15 p-[6px] flex gap-[10px] text-white cursor-pointer hover:p-[1px] transition-all duration-300"
      style={{
        backdropFilter: "blur(14px)",
      }}>
      <a
        className="w-full text-center rounded-[8px] border border-white/15 px-[15px] py-[5px] hover:px-[21px] hover:py-[11px] hover:rounded-[12px] transition-all duration-300"
        style={{
          color: "#000000",
          background: "#ffffff",
        }}>
        {text}
      </a>
    </div>
  );
};

export default SecondaryButton;
