import imgHeader1Copy2 from "figma:asset/6df386b4891825f68d4ddadf997cf61cce73ad87.png";
import imgInstalling2 from "figma:asset/23c3b86719a3d3ac69b067c568932be884ce7c3c.png";
import imgGroup6531 from "figma:asset/82358469b979f9b94f3d7a1d10c63987d913a750.png";
import img031 from "figma:asset/96a1b9afaac52faba9868c7357f87f21bfa027d9.png";
import { imgHeader1Copy1, imgInstalling1 } from "../../imports/svg-ve7pz";

export function SelectedProjects() {
  return (
    <section 
      className="w-full py-9 md:py-11 lg:py-16"
      style={{
        background: 'conic-gradient(from 90deg, rgb(57, 205, 255) -5.77%, rgb(106, 209, 248) 2.17%, rgb(156, 213, 240) 10.1%, rgb(205, 217, 233) 18.03%, rgb(255, 221, 225) 25.96%, rgb(205, 217, 233) 43.03%, rgb(156, 213, 240) 60.1%, rgb(106, 209, 248) 77.17%, rgb(57, 205, 255) 94.23%, rgb(106, 209, 248) 102.17%, rgb(156, 213, 240) 110.1%, rgb(205, 217, 233) 118.03%, rgb(255, 221, 225) 125.96%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-lg md:text-xl font-semibold text-black mb-12 lg:mb-16">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-12">
          
          {/* Project 1: Pension and Rehabilitation App */}
          <a href="#pension-and-rehabilitation-app" className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="relative w-[307px] h-[307px] md:w-[346px] md:h-[346px] lg:w-[307px] lg:h-[307px] group cursor-pointer overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${imgHeader1Copy1}')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }}
              >
                <img 
                  alt="Pension and Rehabilitation App"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]" 
                  src={imgHeader1Copy2}
                  style={{ transform: 'scale(1)' }}
                />
              </div>
              <div className="absolute inset-0">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
                  <circle cx="186.5" cy="186.5" r="181.5" stroke="white" strokeWidth="10" />
                </svg>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black text-center max-w-xs px-4">
              Pension and Rehabilitation App
            </p>
          </a>

          {/* Project 2: Waste Sensor Installation Process & App */}
          <a href="#waste-sensor-installation" className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="relative w-[307px] h-[307px] md:w-[346px] md:h-[346px] lg:w-[307px] lg:h-[307px] group cursor-pointer overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${imgInstalling1}')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }}
              >
                <img 
                  alt="Waste Sensor Installation Process & App"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]" 
                  src={imgInstalling2}
                  style={{ transform: 'scale(1)' }}
                />
              </div>
              <div className="absolute inset-0">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
                  <circle cx="186.5" cy="186.5" r="181.5" stroke="white" strokeWidth="10" />
                </svg>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black text-center max-w-xs px-4">
              Waste Sensor Installation Process & App
            </p>
          </a>

          {/* Project 3: Work Shift Order Path */}
          <a href="#work-shift-order-path" className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="relative w-[307px] h-[307px] md:w-[346px] md:h-[346px] lg:w-[307px] lg:h-[307px] group cursor-pointer overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${imgHeader1Copy1}')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }}
              >
                <img 
                  alt="Work Shift Order Path"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]" 
                  src={imgGroup6531}
                  style={{ transform: 'scale(1)' }}
                />
              </div>
              <div className="absolute inset-0">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
                  <circle cx="186.5" cy="186.5" r="181.5" stroke="white" strokeWidth="10" />
                </svg>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black text-center max-w-xs px-4">
              Work Shift Order Path
            </p>
          </a>

          {/* Project 4: Brand Graphics & Visual Design */}
          <div className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="relative w-[307px] h-[307px] md:w-[346px] md:h-[346px] lg:w-[307px] lg:h-[307px] group cursor-pointer overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${imgHeader1Copy1}')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center'
                }}
              >
                <img 
                  alt="Brand Graphics & Visual Design"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.2]" 
                  src={img031}
                  style={{ transform: 'scale(1.3)' }}
                />
              </div>
              <div className="absolute inset-0">
                <a href="#brand-graphics-visual-design">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
                    <circle cx="186.5" cy="186.5" r="181.5" stroke="white" strokeWidth="10" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black text-center max-w-xs px-4">
              Brand Graphics & Visual Design
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}