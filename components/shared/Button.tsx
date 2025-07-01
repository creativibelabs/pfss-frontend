import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
<a href="#" className="custom-gradient-border w-[240px] h-[56px] font-bold md:text-lg px-2 flex items-center justify-center">
  {text}
</a>


  );
};

export default Button;
