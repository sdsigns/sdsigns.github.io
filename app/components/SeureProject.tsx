import { ProjectDetail } from './ProjectDetail';
import imgKone21 from "figma:asset/c8b79e8160b7f2e713eddc3e2b7122d72d3283e0.png";
import imgKevaKuva4 from "figma:asset/17b242408c6526464280f5d9e9a23d858f951db5.png";
import imgSeureNew from "figma:asset/a711bfa4ce4b62ec23da4807df091dc9dc6c97e1.png";

export function SeureProject() {
  return (
    <div id="work-shift-order-path">
      <ProjectDetail
        title="Work Shift Order Path"
        client="Seure 2024"
        role="Mapping the order process and user needs, UX and UI design, creating the flow."
        principles="Easy and simple flow to make listing new work shifts smoother, clear action points."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#39CDFF] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgKevaKuva4} 
              alt="Work shift order path" 
              className="w-full h-full object-contain scale-[1.74]"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Seure work shift order path, choosing the type of the order</p>
            </div>
          </div>
          <div className="bg-[#ffdde1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgKone21} 
              alt="Work shift order path" 
              className="w-full h-full object-contain"
              style={{ transform: 'scale(1.56) translateX(-15px)', transformOrigin: 'center center' }}
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Seure work shift order path, choosing the type of the order</p>
            </div>
          </div>
          <div className="bg-[#ffdde1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgSeureNew} 
              alt="Work shift order path" 
              className="w-full h-full object-contain scale-[1.16]"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Seure order path, choosing skills and expertise</p>
            </div>
          </div>
        </div>
      </ProjectDetail>
    </div>
  );
}