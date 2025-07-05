import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Button from "@/components/shared/Button";
import StepsCard from "@/components/Home/StepsCard";
import Testimonials from "@/components/Home/Testimonials";

interface FeatureIconProps {
  imageSrc: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  customClass?: string; // NEW prop
}

export default async function LandingPage2() {

  const FeatureIcon: React.FC<FeatureIconProps> = ({
    imageSrc,
    top,
    left,
    right,
    bottom,
    customClass,
  }) => {
    return (
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
          customClass ?? ""
        }`}
        style={{ top, left, right, bottom }}
      >
        <Image
          src={imageSrc}
          alt="Feature icon"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    );
  };

  return (
    <main style={{ backgroundImage: "url('/images/background1.jpg')" }} className="main-wrapper">
      <div className="wrapper">
        <Header /> 

        {/* {Hero Section} */}
        <section className="relative min-h-[650px] bg-center flex md:pt-0 pt-30 md:items-center justify-center" >
            {/* Floating Images */}
            <div className="site_banner_img_left">
                <Image
                    src="/images/storage.png"
                    alt="Storage"
                    width={300}
                    height={170}
                    className="rotate-[0deg]"
                />
            </div>
            <div className="site_banner_img_right">
                <Image
                    src="/images/usage.png"
                    alt="Usage"
                    width={200}
                    height={180}
                    className="md:block"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-white text-center px-6 w-full">
                <h1 className="site_banner_title text-4xl md:text-[82px] font-[700] mb-6 leading-tight"> 
                    Your Private Cloud.<br />
                    <span className="text-4xl md:text-[82px] font-[700] mb-6 leading-tight">Secure, Simple, Yours.</span>
                </h1>

                {/* Subtitles with Framed Icons */}
                <div className="text-lg  md:text-xl mb-10 ">
                    {/* Subtitle 1 */}
                    <div className="flex justify-center items-center flex-wrap gap-2 -mb-[10px]">
                        <span className="text-sm md:text-3xl font-medium">Securely upload, share, and manage your files</span>
                        <div
                            className="w-12 h-12 bg-center bg-contain bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: "url('/images/icons/frame.png')" }}
                        >
                            <Image src="/images/icons/file.png" alt="File Icon" width={24} height={24} className="" />
                           
                        </div>
                         <span className="text-sm md:text-3xl font-medium">with</span>
                    </div>

                    {/* Subtitle 2 */}
                    <div className="flex justify-center items-center flex-wrap">
                        <div
                            className="w-13 h-13 bg-center bg-contain bg-no-repeat flex items-center justify-center">
                            <Image src="/images/icons/lock-left.png" alt="Lock Icon" width={60} height={60} />
                        </div>
                        <span className="text-sm md:text-3xl font-medium">No privacy compromise and seamless sync to your preferred device.</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button text="Start for free" />
                    <Button text="Explore premium features" />                    
                </div>
            </div>
        </section>
        {/* {Hero Section End} */}

        <Footer />
      </div>
    </main>
  );
}
