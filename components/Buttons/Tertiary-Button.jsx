import React from "react";

const TertiaryButton = ({ text , active}) => {
  return (
    <a
      className="rounded-[12px] text-center border border-white/15 flex gap-[10px] text-white cursor-pointer hover:p-[1px] transition-all duration-300 "
      style={{
        backdropFilter: "blur(14px)",
        background: "#3D3D3D66",
        boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
      }}>
      <a
        className={`w-full py-[6px] rounded-[12px] transition-all duration-300 ${active && "bg-[#8c45ff92]"}  hover:bg-[#8c45ff92]`}
        style={{}}>
        {text}
      </a>
    </a>
  );
};

export default TertiaryButton;
