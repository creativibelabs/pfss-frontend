import React from "react";
import UserCard from "../shared/UserCard";
import { testimonials } from "@/constant/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
    <div className="site_polygon_icon_left">
      <Image src={"/images/polygon.png"} width={135} height={156} alt="polygon icon" />
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map((testimonial, index) => (
          <UserCard
            key={index}
            name={testimonial.name}
            avatar={testimonial.avatar}
            rating={testimonial.rating}
            comment={testimonial.comment}
          />
        ))}
      </div>
      <div className="site_polygon_icon_right">
      <Image src={"/images/polygon.png"} width={120} height={100} alt="polygon icon" />
    </div>
    </>
  );
};

export default Testimonials;
