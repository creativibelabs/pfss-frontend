import React from "react";
import Link from "next/link;

interface PricingFeature {
  feature: string;
}

interface PricingCardProps {
  title: string;
  price: string | number;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  desc: string;
  msg: string;
  index?: number;
  hoveredIndex?: number | null;
  onHover?: (index: number | null) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  buttonText,
  popular,
  desc,
  msg,
  index = 0,
  hoveredIndex = null,
  onHover,
}) => {
  const isSecondCard = index === 1;
  const isHighlighted = hoveredIndex !== null ? hoveredIndex === index : isSecondCard;
  
  return (
    <div
      className={`rounded-2xl border border-[#116307] backdrop-blur-2xl p-6 relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] mt-10 ${
        isHighlighted ? 'scale-110 shadow-[0_4px_30px_rgba(16,185,129,0.4)]' : ''
      }`}
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-1.5">
          <h3 className="font-mono text-sm text-white">{title}</h3>
          <p className=" text-gray-200 text-[12.5px]">{desc}</p>
          <div className="flex items-end gap-1 my-6">
            <span className="text-[36px] font-[500] text-white">
              {price === "Free" || price === "Custom Pricing" ? price : `$${price}`}
            </span>
            {period && <span className="text-gray-300 mb-1">/{period}</span>}
          </div>
          {/* Button */}
          <Link
            href="/signup"
            className={`mt-6 block text-center  rounded-full font-medium transition-all duration-200 md:text-lg px-8 py-3 border border-emerald-700 overflow-hidden hover:bg-emerald-500/80 bg-gradient-to-r from-emerald-950 to-emerald-600/50 
            ${
              popular
                ? "bg-emerald-200 hover:bg-emerald-600 text-white"
                : "border border-emerald-300/30 text-white hover:bg-emerald-500/10"
            }`}
          >
            {buttonText}
          </Link>
          <hr className="my-5 md:my-10 text-emerald-800" />
        </div>

        <p>{msg}</p>

        {/* Features */}
        <div className="space-y-3 pt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-sm text-gray-200">{feature.feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
