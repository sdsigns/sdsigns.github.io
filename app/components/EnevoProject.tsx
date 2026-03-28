import { ProjectDetail } from './ProjectDetail';
import imgEnevo1 from "figma:asset/55f8d829edadbf624bb31162b9c8f42552c3ef4a.png";
import imgEnevo2 from "figma:asset/23c3b86719a3d3ac69b067c568932be884ce7c3c.png";
import imgEnevo3 from "figma:asset/dc66c9db1db6919eae70202e94de3c9065eca24e.png";
import imgEnevoTools2 from "figma:asset/48e6ebe753e0a31ab149c987ae8b2b532dbd3f01.png";

export function EnevoProject() {
  return (
    <div id="waste-sensor-installation">
      <ProjectDetail
        title="Waste sensor installation process & installation app"
        client="Enevo 2017"
        role="Mapping the installation process and installers needs, user studies (field studies), 3D modelling and printing, industrial design, visual design, packaging. UX and UI design of the app, creating flows and user paths, user testing."
        principles="Clear and unambiguous flows, simple and robust design to support challenging installation conditions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#ffdde1] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative group">
            <img 
              src={imgEnevo1} 
              alt="Enevo product" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Enevo waste sensor installation app, installation flow</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative group">
            <img 
              src={imgEnevo2} 
              alt="Enevo installation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Installing a waste sensor to a bin outside</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative group">
            <img 
              src={imgEnevo3} 
              alt="Enevo installation" 
              className="w-full h-full object-cover"
              style={{ objectPosition: '30% center' }}
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Enevo waste sensor installed with a bracket</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative group">
            <img 
              src={imgEnevoTools2} 
              alt="Enevo tools" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FFDDE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-black text-lg font-medium text-center px-4">Enevo waste sensor installation tools</p>
            </div>
          </div>
        </div>
      </ProjectDetail>
    </div>
  );
}