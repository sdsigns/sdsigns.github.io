import imgPhotoRound from "figma:asset/b2cc6711436d51949770b8195d2d7d91779a3ccf.png";
import imgDsc807043 from "figma:asset/27f8135ef185ebe3b0ee7d3cf583c34320af71a7.png";
import { imgDsc0807042 } from "../../imports/svg-ve7pz";

export function Hero() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-18 md:py-30 lg:py-48">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Photo */}
        <div className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
          <div className="absolute inset-0">
            <img 
              alt="Profile" 
              className="absolute block w-full h-full object-cover" 
              src={imgPhotoRound} 
            />
          </div>
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              maskImage: `url('${imgDsc0807042}')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center'
            }}
          >
            <img 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgDsc807043} 
            />
          </div>
          <div className="absolute inset-[-2%]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 549 549">
              <circle cx="274.5" cy="274.5" r="269.5" stroke="#FFDDE1" strokeWidth="10" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left max-w-xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#39cdff]">
              Hello!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-black">
              I'm Sanna, a UX & UI Designer passionate about creating user-centered digital experiences.
            </p>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-black">
            I have gathered here some of my work, but for more info kindly scroll to the bottom to <a href="#contact" className="underline hover:no-underline hover:bg-gradient-to-r hover:from-[#39cdff] hover:via-[#6ad1f8] hover:via-[#9cd5f0] hover:via-[#cdd9e9] hover:to-[#ffdde1] hover:bg-clip-text hover:text-transparent transition-all duration-300">contact me & download my CV.</a>
          </p>
        </div>
      </div>
    </section>
  );
}