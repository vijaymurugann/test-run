import React from "react";

const Badge = () => {
  return (
    <div className="rounded-full  border border-white/15 flex items-center gap-2 py-[8px] px-[14px]">
      <span className="bg-[#A259FF] text-xs font-bold text-white rounded-full px-2 py-0.5">
        NEW
      </span>
      <span className="text-[#A259FF] text-sm font-medium text-center">
        Latest integration just arrived
      </span>
    </div>
  );
};

export default Badge;
