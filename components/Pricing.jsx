import Image from "next/image";
import React from "react";
import TertiaryButton from "./Buttons/Tertiary-Button";

const pricingPlans = [
  {
    title: "Plus",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    title: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    active: true,
  },
  {
    title: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

const PricingCard = ({ plan, idx }) => {
  return (
    <div
      key={idx}
      className={`relative flex-1 flex flex-col bg-[#0000000F] border border-white/15 rounded-[10px] overflow-hidden ${
        plan.active && `pricing-card-shadow`
      }`}>
      {plan.active && (
        <div className="absolute top-0 left-0 w-[110%] -translate-x-2 h-full pricing-gradient -z-10">
          <Image
            src="/images/pattern.png"
            alt="plus"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="m-4 pb-6 border-b border-[#282729]">
        <h3 className="text-white text-[24px] font-medium">{plan.title}</h3>
        <span className="text-white/70 text-[16px] font-normal">
          {plan.price}
        </span>
      </div>
      <div className="m-4 flex-1  flex flex-col gap-4">
        {plan.features.map((feature, fIdx) => (
          <p
            key={fIdx}
            className="text-white text-[14px] font-normal flex items-center gap-2">
            <Image
              src="/icons/tick.svg"
              alt="check"
              width={15}
              height={15}
              className="inline"
            />
            {feature}
          </p>
        ))}
      </div>
      <div className="m-4">
        <TertiaryButton text="Join waitlist" active={plan.active} />
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="w-screen px-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className=" mx-auto py-[76px] px-[50px] text-center">
        <h3 className="mb-4 text-white text-[56px] font-medium">Pricing</h3>
        <p className="hidden md:block max-w-[500px] text-white md:text-[20px] font-normal">
          Choose the right plan to meet your SEO <br /> needs and start
          optimizing today.
        </p>

        <p className=" block md:hidden max-w-[500px] text-white font-normal">
          Choose the right plan to meet your SEO needs and start
          optimizing today.
        </p>
      </div>
      <div className="pricing flex flex-col md:flex-row gap-4 max-w-5xl w-full">
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
