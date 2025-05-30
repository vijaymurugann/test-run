import React from "react";

const companies = [
  { logo: "/images/company-logo-8.png" },
  { logo: "/images/company-logo-7.png" },
  { logo: "/images/company-logo-6.png" },
  { logo: "/images/company-logo-5.png" },
  { logo: "/images/company-logo-4.png" },
  { logo: "/images/company-logo-3.png" },
  { logo: "/images/company-logo-2.png" },
  { logo: "/images/company-logo-1.png" },
];

const Companies = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <p className="text-white/70 mb-8 text-center font-light">
        Trusted by the world's most innovative teams
      </p>
      <div className="flex flex-wrap justify-center max-w-5xl w-full">
        {companies.map((company) => (
          <div
            key={company.logo}
            className=" border-1 border-white/15 rounded-[10px] min-w-[220px]  max-w-xs flex items-center gap-4 px-8 m-2 ">
            <img
              src={company.logo}
              alt="Company logo"
              className="w-28 h-24 object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
