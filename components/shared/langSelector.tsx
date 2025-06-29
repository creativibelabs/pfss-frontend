"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

import UK from "@/public/images/uk.png";
import ZH from "@/public/images/zh.png";
import JA from "@/public/images/ja.png";

const languages = [
  { code: "en", name: "English", flag: UK },
  { code: "zh", name: "Chinese", flag: ZH },
  { code: "ja", name: "Japanese", flag: JA },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 rounded-xl border border-emerald-500 bg-green-900/40 px-4 py-2.5 text-sm text-white shadow-md hover:shadow-lg transition-all"
        style={{ backgroundImage: "url('/images/noise-texture.png')" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src={selected.flag}
            alt={`${selected.name} flag`}
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span>{selected.name}</span>
        </div>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-emerald-500 bg-green-950 shadow-xl animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-emerald-800 transition-colors"
            >
              <Image
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
