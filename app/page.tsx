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

export default async function LandingPage() {

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
    <main style={{ backgroundImage: "url('/images/home-background.webp')" }} className="main-wrapper">
      <div className="wrapper">
        <Header />

        {/* {Hero Section} */}
        <section className="relative min-h-[650px] bg-center flex md:pt-0 pt-30 md:items-center justify-center" >
            {/* Floating Images */}
            <div className="site_banner_img_left">
                <Image
                    src="/images/storage.png"
                    alt="Storage"
                    width={250}
                    height={170}
                    className="rotate-[0deg]"
                />
            </div>
            <div className="absolute bottom-30 right-40 z-10">
                <Image
                    src="/images/usage.png"
                    alt="Usage"
                    width={180}
                    height={180}
                    className="-rotate-[6deg]  md:block"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-white text-center px-6 max-w-5xl w-full">
                <h1 className="site_banner_title text-4xl md:text-[82px] font-[700] mb-6 leading-tight"> 
                    Your Private Cloud.<br />
                    <span className="text-4xl md:text-[82px] font-extrabold mb-6 leading-tight">Secure, Simple, Yours.</span>
                </h1>

                {/* Subtitles with Framed Icons */}
                <div className="text-lg  md:text-xl mb-10 ">
                    {/* Subtitle 1 */}
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        <span className="text-sm md:text-3xl">Securely upload, share, and manage your files</span>
                        <div
                            className="w-12 h-12 bg-center bg-contain bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: "url('/images/icons/frame.png')" }}
                        >
                            <Image src="/images/icons/file.png" alt="File Icon" width={24} height={24} />
                            <span className="text-sm md:text-3xl">with</span>
                        </div>
                    </div>

                    {/* Subtitle 2 */}
                    <div className="flex justify-center items-center flex-wrap">
                        <div
                            className="w-12 h-12 bg-center bg-contain bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: "url('/images/icons/frame.png')" }}
                        >
                            <Image src="/images/icons/lock.png" alt="Lock Icon" width={60} height={60} />
                        </div>
                        <span className="text-sm md:text-2xl ">No privacy compromise and seamless sync to your preferred device.</span>
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

        {/* {Features Section Start} */}
        <section className=" px-4 text-white relative min-h-[400px] max-h-[650px] mt-40 md:mt-0">
          <div className="text-center">
            <h2 className="text-4xl md:text-[64px] lg:text-[64px] font-bold w-full md:max-w-150 mx-auto">
              Powerful Features At Your Fingertips.
            </h2>
          </div>
          <div className="relative mx-auto w-full max-w-3xl aspect-square">
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/images/feature/circle-large.png"
                  alt="Large circle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
    
              <div className="absolute  inset-[19%]">
                <Image
                  src="/images/feature/circle-medium.png"
                  alt="Medium circle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute md:top-95 top-40 inset-[30%]">
                <Image
                  src="/images/feature/circle-small.png"
                  alt="Small circle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
    
              {/* Features positioned correctly */}
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon1.png"
                top="23%"
                left="55%"
                customClass="feature-icon"
              />
    
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon2.png"
                top="50%"
                right="-5%"
                customClass="feature-icon"
              />
    
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon3.png"
                bottom="32%"
                right="50%"
                customClass="feature-icon"
              />
    
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon4.png"
                bottom="45%"
                right="17%"
                customClass="feature-icon"
              />
    
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon5.png"
                top="38%"
                left="35%"
                customClass="feature-icon"
              />
    
              <FeatureIcon
                imageSrc="/images/feature/FeatureIcon6.png"
                top="50%"
                left="7%"
                customClass="feature-icon"
              />
            </div>
          </div>
        </section>
        {/* {Features Section End} */}

        {/* {Get Started, Testimonials Section Start} */}
        <section className="relative py-10 overflow-hidden">
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl md:text-[64px] font-bold md:mb-3 text-white">
                Get Started in Minutes
              </h3>
              <p className="text-md md:text-[30px] font-[400] text-gray-200">
                <span className="block md:inline">Secure your data in minutes with seamless upload,</span>{" "}
                <span className="block">-management, and instant access.</span>
              </p>
            </div>
            <StepsCard />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 mt-20 md:mt-40">
            <div className="text-center max-w-5xl mx-auto md:mt-16 mt-4">
              <h3 className="text-3xl md:text-[64px] font-bold mb-2 mt-10 text-white">
                See Why Users Choose Us
              </h3>
              <p className="text-lg md:text-[30px] font-[400] text-gray-200 w-full mx-auto">
                Hear from individuals and teams who trust us to protect what matters most.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        {/* {Get Started, Testimonials Section End} */}

        {/* {Free Version Start} */}
        <section className='bg-no-repeat bg-center mb-15'>
            <div className="p-7 md:p-8 rounded-xl shadow-2xl bg-emerald-600/10 border border-emerald-500/70 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 relative overflow-hidden" style={{ backgroundImage: "url('/images/noise-texture.png')" }}>
                <div className="space-y-5">
                    <div>
                        <h2 className="text-4xl md:text-[50px] font-[800] mb-4">Love the free version?</h2>
                        <p className="text-[20px] font-[400] md:mb-10 mb-7">You'll love Premium even more. More features. More freedom.</p>
                        <Button text='See What Premium Offers' />
                    </div>
                    <hr className='text-emerald-500 md:my-10 my-5' />
                    <div>
                        <h2 className="text-4xl md:text-[50px] font-[800] mb-6">Want total control and complete privacy?</h2>
                        <p className="text-[20px] font-[400] md:mb-10 mb-7">You're in the right place, we don't sell your personal data.</p>
                        <Button text='Start for free' />
                    </div>
                </div>
                <div className="flex justify-center items-center z-100">
                    <Image
                        src="/images/globe.png"
                        alt="Globe"
                        width={600}
                        height={600}
                        className="max-w-full h-auto "
                    />
                </div>
            </div>
        </section>
        {/* {Free Version End} */}

        <Footer />
      </div>
    </main>
  );
}
