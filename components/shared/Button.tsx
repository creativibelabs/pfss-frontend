import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-full md:text-lg w-[240px] h-[56px] border border-emerald-300 overflow-hidden font-bold px-2" style={{ backgroundImage: "url('/images/noise-texture.png')" }}>
      {text}
    </button>
  );
};

export default Button;
