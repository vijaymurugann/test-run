import React from "react";
import Image from "next/image";

const footerLinks = [
  ["Product", "Features", "Integration", "Updates", "FAQ", "Pricing"],
  ["Company", "About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
  ["Resources", "Examples", "Community", "Guides", "Docs", "Press"],
  ["Legal", "Privacy", "Terms", "Security"],
];

const Footer = () => {
  return (
    <footer className="w-screen mt-20 bg-black border-white/15 border-t-1 text-white">
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-4 flex flex-col min-h-[350px] justify-between h-full">
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 ">
          {/* Logo and socials */}
          <div className="flex flex-row md:flex-col justify-between">
            <div className="flex flex-col gap-8 min-w-[200px]">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-lg font-medium">AI Startup Kit</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-2 md:gap-8 md:mt-12 md:mb-2">
              <a href="#" aria-label="X">
                <Image src="/icons/x-logo.svg" alt="X" width={28} height={28} />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/icons/instagram-logo.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </a>
              <a href="#" aria-label="YouTube">
                <Image
                  src="/icons/youtube-logo.svg"
                  alt="YouTube"
                  width={28}
                  height={28}
                />
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 justify-items-start">
            {footerLinks.map((col, idx) => (
              <ul key={idx} className="flex flex-col gap-3 min-w-[120px]">
                <li>
                  <span className="font-medium text-[14px] mb-1 text-white">
                    {col[0]}
                  </span>
                </li>
                {col.slice(1).map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:underline text-white/50 text-sm font-normal">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
