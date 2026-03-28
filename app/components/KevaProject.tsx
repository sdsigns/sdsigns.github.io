import { ProjectDetail } from './ProjectDetail';
import imgBenefitPaymentsAtAGlance61 from "figma:asset/d00a8f0f1357fc114ffec22ff442b7227f9e0f39.png";
import imgKevaKuva2 from "figma:asset/65d7bc7e568438e422a38fccee306d66ec8a0dcd.png";
import imgKevaKuva4 from "figma:asset/89afca2edea343678757de9515a7604daac8f4fa.png";
import img6Copy1 from "figma:asset/5065e0f2af8bc9d450bfe6336927afbea6f07abd.png";

export function KevaProject() {
  return (
    <div id="pension-and-rehabilitation-app">
      <ProjectDetail
        title="Pension and Rehabilitation App"
        client="Keva 2025"
        role="UX and UI design of the app, mapping user and client needs, creating flows and user paths, transforming design system elements to better fit to mobile environment, creating brand-loyal visual elements, accessibility at the core of design."
        principles="Simple and clear flows and visuals to minimise cognitive load and confusion, accessibility at the core of the design."
        accentColor="#ffdde1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#ffdde1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgBenefitPaymentsAtAGlance61} 
              alt="Keva app screenshot" 
              className="w-full h-full object-contain"
              style={{ transform: 'scale(1.45) translateX(15px)', transformOrigin: 'center center' }}
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Payments view in Pension and Rehabilitation app</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative group">
            <img 
              src={imgKevaKuva2} 
              alt="Keva app screenshot" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Employee pension card view in Pension and Rehabilitation app</p>
            </div>
          </div>
          <div className="bg-[#ffdde1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgKevaKuva4} 
              alt="Keva app screenshot" 
              className="w-full h-full object-contain"
              style={{ transform: 'scale(1.32)' }}
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Main view and Documents in Pension and Rehabilitation app</p>
            </div>
          </div>
          <div className="bg-[#39cdff] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={img6Copy1} 
              alt="Keva app screenshot" 
              className="w-full h-full object-contain"
              style={{ transform: 'scale(1.4) translateX(20px)', transformOrigin: 'center center' }}
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Employee pension card in tablet and mobile</p>
            </div>
          </div>
        </div>
      </ProjectDetail>
    </div>
  );
}