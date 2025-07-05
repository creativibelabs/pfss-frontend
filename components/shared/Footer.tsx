import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  paymentIcons,
  socialIcons,
  quickLinks,
  legalLinks,
} from "@/constant/constants";
import Button from "./Button";
import Mail from "../icons/Mail";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 z-50 container mx-auto py-10 bg-transparent">
      <section
        className="site_footer_inner rounded-2xl md:p-10 p-4 border border-emerald-800 backdrop-blur-sm relative overflow-hidden"
        style={{ backgroundImage: "url('/images/noise-texture.png')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_318px] gap-4">
          <section>
            {/* Logo */}
            <Link
              href={`/`}
              className="bg-emerald-400/90 text-white px-15 mb-5 py-4 rounded-xl text-sm shadow-2xl md:text-left text-center block w-fit md:mx-0 mx-auto"
            >
              logo
            </Link>
            <p className="my-0  text-[#E6EDF5] text-sm md:text-base">
              Welcome to your private, secure cloud space
            </p>
            <p className="mt-2 md:mt-4 text-[#E6EDF5] text-sm md:text-sm max-w-sm">
              Upload, manage, and access your files with full control and
              end-to-end protection.
            </p>
            <div className="flex items-center md:gap-x-6 gap-x-4 md:mt-7 mt-4">
              {socialIcons.map((item, index) => {
                return (
                  <Link
                    href={item.link}
                    key={index}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <Image src={item.icon} alt={item.title} />
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-1 mt-4">
              {paymentIcons.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="border border-emerald-300 rounded-xl px-1.5 py-1 bg-emerald-50/20 w-16 h-9 flex items-center justify-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="md:ms-14 ms-1 mt-9 md:mt-0 flex flex-col md:text-center">
            <h1 className="text-[#43E1A9] font-bold md:mb-8 mb-3 text-sm">
              Quick Links
            </h1>
            <div className="flex flex-col md:items-center">
              {quickLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-[#E6EDF5] hover:text-emerald-400 leading-normal transition-colors mt-1.5 md:mt-2.5 block border border-emerald-400 py-1.5 text-[11px] text-center rounded-full w-28"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="md:ms-14 ms-1 mt-9 md:mt-0 flex flex-col ">
            <h2 className="text-[#43E1A9] font-bold md:mb-8 mb-3 text-sm ps-[20px]">
              Legal Links
            </h2>
            {legalLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[#E6EDF5] hover:text-emerald-400 leading-normal transition-colors mt-1.5 md:mt-2.5 block border border-emerald-400 py-1.5 text-[11px] text-center rounded-full w-28"
                >
                  {item.title}
                </Link>
              );
            })}
          </section>

          <section className="text-center md:text-left mt-9 md:mt-0">
            <h2 className=" font-normal text-[20px] mb-4 text-white">Stay Tuned!</h2>
            <p className="text-gray-100 font-normal text-[18px] mb-6">
              Fresh updates and news—<br />right where you need them
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2.5 rounded-full bg-emerald-800/50 border border-emerald-300 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-300"
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-full px-6 bg-emerald-50/20 text-white rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors border-l border-r border-l-emerald-300 border-r-gray-400"
              >
                Subscribe
              </button>
            </div>
            <button
              className="flex items-center justify-center gap-2 rounded-[50px] text-[#FDFDFD] md:text-[12px] w-[111px] h-[40px] border border-emerald-300 overflow-hidden font-bold px-2 py-1 mt-4"
              style={{ backgroundImage: "url('/images/noise-texture.png')" }}
            >
              <Mail />
              Email us
            </button>
          </section>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-2 md:mt-10 mt-4 text-sm text-gray-300 font-semibold">
          {/* <p className="order-3 text-emerald-300">
            support@PrivateFileShare.com
          </p> */}
          <p className="order-2 text-[#39FF14] font-[400]">
            © 2025 Ai All Rights Reserved.
          </p>
          <p className=""></p>
        </div>
      </section>
    </footer>
  );
};
