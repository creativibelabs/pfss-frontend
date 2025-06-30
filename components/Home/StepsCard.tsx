import { steps } from "@/constant/constants"; // const steps = [
import Image from "next/image";

export default function StepsCard() {
  return (
    <section className="text-shadow-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3 gap-3">
        {steps.map((step, index) => (
          <div className="site_step_box" key={index}>
          <div className="site_step_number_wrap flex items-center relative top-3 -z-1">
            <p className="site_step_number text-emerald-300 font-black">{step.number}</p>
            {index < steps.length - 1 && (
                <div className="h-px bg-white flex-grow ms-1" />
              )}
              {index < steps.length - 1 && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
          </div>
            <div
              style={{ backgroundImage: "url('/images/noise-texture.png')" }}
              className="sm:min-h-[134px] rounded-xl flex p-3 shadow-lg transition-transform duration-300 hover:scale-105 text-white bg-emerald-600/30 border border-emerald-500/70 hover:bg-emerald-600/50 backdrop-blur"
            >
              <div className="site_step_content">
                <h3 className="site_step_title text-xl font-semibold mb-2">{step.title}</h3>
                <p className="site_step_content text-sm text-white">{step.description}</p>
              </div>
              <Image
                src={step.icon}
                width={100}
                height={100}
                alt={step.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
