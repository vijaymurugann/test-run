import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: "/icons/gauge.svg",
      title: "User-friendly dashboard",
      description:
        "Perform complex SEO audits and optimizations with a single click.",
    },
    {
      icon: "/icons/chart-line.svg",
      title: "Visual reports",
      description: "Visual insights into your site's performance.",
    },
    {
      icon: "/icons/sparkle.svg",
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
    },
    {
      icon: "/icons/list-checks.svg",
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
    },
    {
      icon: "/icons/target.svg",
      title: "SEO goal setting",
      description:
        "Helps you set and achieve SEO goals with guided assistance.",
    },
    {
      icon: "/icons/bell-ringing.svg",
      title: "Automated alerts",
      description:
        "Automatic notifications about your SEO health, including quick fixes.",
    },
    {
      icon: "/icons/files.svg",
      title: "Link Optimization Wizard",
      description:
        "Guides you through the process of creating and managing links.",
    },
    {
      icon: "/icons/cursor-click.svg",
      title: "One-click optimization",
      description:
        "Perform complex SEO audits and optimizations with a single click.",
    },
    {
      icon: "/icons/magic-wand.svg",
      title: "Competitor reports",
      description:
        "Provides insights into competitors' keyword strategies and ranking.",
    },
  ];

  return (
    <section className="w-screen mt-32 px-4">
      <div className="max-w-7xl mx-auto py-[76px] px-[50px] features-gradient border border-white/15">
        <h3 className="text-[56px] leading-[3.8rem]">
          Elevate your <br /> SEO efforts.
        </h3>
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col min-h-[125px]">
              <div className="flex items-center gap-1">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={16}
                  height={16}
                  className="mb-1 inline"
                />{" "}
                <h4 className="inline font-medium mb-1">{feature.title}</h4>
              </div>
              <p className="text-white/70 font-normal max-w-[300px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
