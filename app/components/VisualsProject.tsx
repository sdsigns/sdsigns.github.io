import { ProjectDetail } from './ProjectDetail';
import imgScreenshot20260324At1418021 from "figma:asset/3d22a968290d29d415fab26e61939dd7d0147c1c.png";
import imgScreenshot20260324At1420521 from "figma:asset/f4612257f6dd2a5e4628255c042d810049118feb.png";
import imgScreenshot20260324At1352181 from "figma:asset/b9e92727360974d06588d1fed4b4934c726d45e3.png";
import imgScreenshot20260324At1352091 from "figma:asset/959b8c5a7b06cb5e314104cfcdfc5557b5ab9007.png";
import imgScreenshot20260324At1423461 from "figma:asset/9eb6a768c2aed42943078242c8f3a7aa186c28ef.png";
import img031 from "figma:asset/96a1b9afaac52faba9868c7357f87f21bfa027d9.png";
import imgGrayHexagons311 from "figma:asset/a91fdd7e57c135fbcb791f65961264c2763415a5.png";
import imgUxResearchCustomerInsightAndAccessibilityHeroTransparentSKangas220620201 from "figma:asset/82611209d0734d04c28356f3c90ffd7033afcea1.png";
import imgScreenshot20260324At1437541 from "figma:asset/a5347e8a554a3c1dbea181d2bf290d4ee4b2aa3e.png";
import imgAiTool1 from "figma:asset/f7f2970cf440232a92ecc7d6a138113ed1d34e96.png";

export function VisualsProject() {
  return (
    <div id="brand-graphics-visual-design">
      <ProjectDetail
        title="Brand Graphics & Visual Design"
        client="Mendor, Enevo, Eficode, Zure"
        role="Concepting the visuals together with sales & marketing, groundwork & benchmarking, ideating, visual design & branding, drawing."
        principles="Visually balanced and informative visuals to boost the brand message, scalable and fit-for-purpose."
      >
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="rounded-3xl overflow-hidden aspect-square relative group flex-1">
              <img 
                src={imgScreenshot20260324At1418021} 
                alt="Brand graphics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Mendor Discreet Blood Glucose Meter's user manual cover</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square relative group flex-1">
              <img 
                src={imgScreenshot20260324At1420521} 
                alt="Brand graphics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Mendor Discreet visualisation for marketing purposes</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="rounded-[20px] overflow-hidden aspect-square relative group flex-1">
              <img 
                src={imgScreenshot20260324At1352091} 
                alt="Visual design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
                <p className="text-black text-lg font-medium text-center px-4">Enevo Fuel brochure</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square relative group flex-1">
              <img 
                src={imgScreenshot20260324At1352181} 
                alt="Visual design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Enevo Fuel brochure's cover</p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="bg-[#dcf6ff] rounded-3xl overflow-hidden aspect-square flex items-start justify-center relative group flex-1">
              <div className="w-full h-full overflow-hidden rounded-t-3xl">
                <img 
                  src={img031} 
                  alt="Visual design" 
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.2)' }}
                />
              </div>
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Enevo brand graphics for sales & marketing purposes</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square relative group flex-1">
              <img 
                src={imgScreenshot20260324At1423461} 
                alt="Visual design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Enevo brand graphics for sales & marketing purposes</p>
              </div>
            </div>
          </div>

          {/* Row 4 - Wide layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-[20px] aspect-square relative group flex items-center justify-center bg-[#39CDFF]">
              <img 
                src={imgGrayHexagons311} 
                alt="Visual design" 
                className="w-full h-full object-contain"
                style={{ transform: 'scale(0.8)' }}
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[20px]">
                <p className="text-black text-lg font-medium text-center px-4">Eficode brand graphics for sales & marketing purposes</p>
              </div>
            </div>
            <div className="rounded-[20px] overflow-hidden aspect-square flex items-center justify-center relative group">
              <img 
                src={imgUxResearchCustomerInsightAndAccessibilityHeroTransparentSKangas220620201} 
                alt="UX research illustration" 
                className="w-full h-full object-contain transform rotate-180 scale-y-[-1]"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Eficode brand graphics for sales & marketing purposes</p>
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-3xl overflow-hidden aspect-square relative group">
              <img 
                src={imgScreenshot20260324At1437541} 
                alt="Visual design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Zure graphics for sales & marketing purposes</p>
              </div>
            </div>
            <div className="bg-[#202020] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 md:p-12 relative group">
              <img 
                src={imgAiTool1} 
                alt="AI tool design" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-black text-lg font-medium text-center px-4">Zure graphics for sales & marketing purposes</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectDetail>
    </div>
  );
}