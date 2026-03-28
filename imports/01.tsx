import svgPaths from "./svg-mjbp0cltsz";
import imgPhotoRound from "figma:asset/b2cc6711436d51949770b8195d2d7d91779a3ccf.png";
import imgDsc807043 from "figma:asset/27f8135ef185ebe3b0ee7d3cf583c34320af71a7.png";
import imgHeader1Copy2 from "figma:asset/6df386b4891825f68d4ddadf997cf61cce73ad87.png";
import imgInstalling2 from "figma:asset/23c3b86719a3d3ac69b067c568932be884ce7c3c.png";
import imgGroup6531 from "figma:asset/82358469b979f9b94f3d7a1d10c63987d913a750.png";
import img031 from "figma:asset/96a1b9afaac52faba9868c7357f87f21bfa027d9.png";
import imgKevaKuva2 from "figma:asset/65d7bc7e568438e422a38fccee306d66ec8a0dcd.png";
import imgBenefitPaymentsAtAGlance61 from "figma:asset/d00a8f0f1357fc114ffec22ff442b7227f9e0f39.png";
import imgKevaKuva4 from "figma:asset/89afca2edea343678757de9515a7604daac8f4fa.png";
import img6Copy1 from "figma:asset/5065e0f2af8bc9d450bfe6336927afbea6f07abd.png";
import imgEnevo1 from "figma:asset/55f8d829edadbf624bb31162b9c8f42552c3ef4a.png";
import img0031 from "figma:asset/dc66c9db1db6919eae70202e94de3c9065eca24e.png";
import imgEnevo21 from "figma:asset/48e6ebe753e0a31ab149c987ae8b2b532dbd3f01.png";
import imgKone21 from "figma:asset/c8b79e8160b7f2e713eddc3e2b7122d72d3283e0.png";
import imgScreenshot20260324At1418021 from "figma:asset/3d22a968290d29d415fab26e61939dd7d0147c1c.png";
import imgScreenshot20260324At1420521 from "figma:asset/f4612257f6dd2a5e4628255c042d810049118feb.png";
import imgScreenshot20260324At1352181 from "figma:asset/b9e92727360974d06588d1fed4b4934c726d45e3.png";
import imgScreenshot20260324At1352091 from "figma:asset/959b8c5a7b06cb5e314104cfcdfc5557b5ab9007.png";
import imgScreenshot20260324At1423461 from "figma:asset/9eb6a768c2aed42943078242c8f3a7aa186c28ef.png";
import imgGrayHexagons311 from "figma:asset/a91fdd7e57c135fbcb791f65961264c2763415a5.png";
import imgUxResearchCustomerInsightAndAccessibilityHeroTransparentSKangas220620201 from "figma:asset/82611209d0734d04c28356f3c90ffd7033afcea1.png";
import imgScreenshot20260324At1437541 from "figma:asset/a5347e8a554a3c1dbea181d2bf290d4ee4b2aa3e.png";
import imgAiTool1 from "figma:asset/f7f2970cf440232a92ecc7d6a138113ed1d34e96.png";
import { imgDsc0807042, imgHeader1Copy1, imgInstalling1 } from "./svg-ve7pz";

function MaskGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 h-[512px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30px_-17px] mask-size-[529px_529px] ml-[-30px] mt-[17px] relative row-1 w-[591px]" data-name="DSC08070_4 2" style={{ maskImage: `url('${imgDsc0807042}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc807043} />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="photo">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[529px]" data-name="photo round">
        <img alt="" className="absolute block max-w-none size-full" height="529" src={imgPhotoRound} width="529" />
      </div>
      <MaskGroup />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[529px]" data-name="photo border">
        <div className="absolute inset-[-1.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 549 549">
            <circle cx="274.5" cy="274.5" id="photo border" r="269.5" stroke="var(--stroke-0, #FFDDE1)" strokeWidth="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderText1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[normal] not-italic relative shrink-0" data-name="header text 2">
      <p className="relative shrink-0 text-[#39cdff] text-[96px] whitespace-nowrap">Hello!</p>
      <p className="relative shrink-0 text-[20px] text-black w-[453px]">{`I’m Sanna, a UX & UI Designer passionate about creating user-centered digital experiences.`}</p>
    </div>
  );
}

function HeaderText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="header text 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[453px]">{`I have gathered here some of my work, but for more info kindly scroll to the bottom to contact me & download my CV.`}</p>
    </div>
  );
}

function HeaderText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[470px]" data-name="header text">
      <HeaderText1 />
      <HeaderText2 />
    </div>
  );
}

function Tekstiboksi() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[100px] relative shrink-0" data-name="tekstiboksi">
      <HeaderText />
    </div>
  );
}

function HeaderGroup() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start left-[344px] top-[300px]" data-name="header group">
      <Photo />
      <Tekstiboksi />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-name="group 1">
      <p className="relative shrink-0">{`UX & UI Design`}</p>
      <p className="relative shrink-0">Visual Design</p>
      <p className="relative shrink-0">{`Visual accessibility & balance`}</p>
      <p className="relative shrink-0">Cognitive accessibility</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-name="group 2">
      <p className="relative shrink-0">Concepting</p>
      <p className="relative shrink-0">Prototypes</p>
      <p className="relative shrink-0">Flows</p>
      <p className="relative shrink-0">Graphics</p>
    </div>
  );
}

function CompetenciesGroup() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="competencies group">
      <div className="bg-[#39cdff] h-[100px] rounded-[20px] shrink-0 w-[8px]" data-name="palkki 1" />
      <Group />
      <Group1 />
    </div>
  );
}

function CoreCompetencies() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="core competencies">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Core Competencies</p>
      <CompetenciesGroup />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-name="group 3">
      <p className="relative shrink-0">Industrial design</p>
      <p className="relative shrink-0">Art Directing</p>
      <p className="relative shrink-0">User Research</p>
      <p className="relative shrink-0">Service Design</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-name="group 4">
      <p className="relative shrink-0">Workshops</p>
      <p className="relative shrink-0">3D modelling</p>
      <p className="relative shrink-0">AI design</p>
    </div>
  );
}

function SupportGroup() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="support group">
      <div className="bg-[#ffdde1] h-[100px] rounded-[20px] shrink-0 w-[8px]" data-name="palkki 2" />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Support() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="support">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Support Skills</p>
      <SupportGroup />
    </div>
  );
}

function Competencies2() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-name="competencies 2">
      <CoreCompetencies />
      <Support />
    </div>
  );
}

function Competencies() {
  return (
    <div className="absolute bg-[#f6f6f6] content-stretch flex h-[245px] items-center justify-between left-0 top-[1064px] w-[1728px]" data-name="competencies">
      <Competencies2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-name="group 1">
      <p className="decoration-solid leading-[normal] relative shrink-0 underline">Download CV</p>
      <a className="block leading-[0] relative shrink-0" href="https://www.linkedin.com/in/sanna-kangas/">
        <p className="cursor-pointer decoration-solid leading-[normal] underline">LinkedIn</p>
      </a>
      <a className="block leading-[0] relative shrink-0" href="mailto:brilapri19@gmail.com">
        <p className="cursor-pointer decoration-solid leading-[normal] underline">Email</p>
      </a>
    </div>
  );
}

function CompetenciesGroup1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="competencies group">
      <div className="bg-[#39cdff] h-[73px] rounded-[20px] shrink-0 w-[8px]" data-name="palkki 1" />
      <Group4 />
    </div>
  );
}

function CoreCompetencies1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0" data-name="core competencies">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">{`Download CV & Contact`}</p>
      <CompetenciesGroup1 />
    </div>
  );
}

function Competencies3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="competencies 2">
      <CoreCompetencies1 />
    </div>
  );
}

function Competencies1() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#39cdff] h-[245px] items-center justify-between left-0 to-[#ffdde1] to-[37.02%] top-[11214px] w-[1728px]" data-name="competencies">
      <Competencies3 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.82px] mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 h-[641.684px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_17.956px] mask-size-[372.184px_373px] ml-0 mt-[-17.96px] relative row-1 w-[396.573px]" data-name="header_1-copy 1" style={{ maskImage: `url('${imgHeader1Copy1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeader1Copy2} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MaskGroup1 />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[373px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
          <circle cx="186.5" cy="186.5" id="Ellipse 4" r="181.5" stroke="var(--stroke-0, white)" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}

function PensionAndRehabilitationApp() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0" data-name="pension and rehabilitation app">
      <Group5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center w-[min-content]">Pension and Rehabilitation App</p>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.82px] mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[60.722px_64.004px] mask-size-[374.179px_375px] ml-[-60.72px] mt-[-64px] relative row-1 size-[466.083px]" data-name="installing 1" style={{ maskImage: `url('${imgInstalling1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInstalling2} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MaskGroup2 />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[375px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 375">
          <circle cx="187.5" cy="187.5" id="Ellipse 5" r="182.5" stroke="var(--stroke-0, white)" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}

function WasteSensorInstallation() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0" data-name="waste sensor installation">
      <Group6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-[295px]">{`Waste Sensor Installation Process & App`}</p>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.82px] mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 h-[485px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[167.816px_21px] mask-size-[372.184px_373px] ml-[-167.82px] mt-[-21px] relative row-1 w-[756px]" data-name="Group 653 1" style={{ maskImage: `url('${imgHeader1Copy1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup6531} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MaskGroup3 />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[373px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
          <circle cx="186.5" cy="186.5" id="Ellipse 4" r="181.5" stroke="var(--stroke-0, white)" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}

function BrandGraphics() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0" data-name="brand graphics">
      <Group7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center w-[min-content]">Work Shift Order Path</p>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.82px] mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 h-[679.161px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[98.759px_214.659px] mask-size-[372.184px_373px] ml-[-98.76px] mt-[-214.66px] relative row-1 w-[538.616px]" data-name="03 1" style={{ maskImage: `url('${imgHeader1Copy1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img031} />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MaskGroup4 />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[373px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 373">
          <circle cx="186.5" cy="186.5" id="Ellipse 4" r="181.5" stroke="var(--stroke-0, white)" strokeWidth="10" />
        </svg>
      </div>
    </div>
  );
}

function BrandGraphics1() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0" data-name="brand graphics">
      <Group8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center w-[min-content]">{`Brand Graphics & Visual Design`}</p>
    </div>
  );
}

function Images() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="images">
      <PensionAndRehabilitationApp />
      <WasteSensorInstallation />
      <BrandGraphics />
      <BrandGraphics1 />
    </div>
  );
}

function SelectedProjects() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70px] h-[847px] items-start left-0 pb-[140px] pl-[112px] pr-[123px] pt-[75px] top-[1317px] w-[1728px]" data-name="selected projects" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 1728 847\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(5.2905e-15 42.35 -42.35 5.6843e-15 864 423.5)\\'><foreignObject x=\\'-387.63\\' y=\\'-387.63\\' width=\\'775.25\\' height=\\'775.25\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgb(57, 205, 255) -5.7672%, rgb(106, 209, 248) 2.1652%, rgb(156, 213, 240) 10.098%, rgb(205, 217, 233) 18.03%, rgb(255, 221, 225) 25.963%, rgb(205, 217, 233) 43.03%, rgb(156, 213, 240) 60.098%, rgb(106, 209, 248) 77.165%, rgb(57, 205, 255) 94.233%, rgb(106, 209, 248) 102.17%, rgb(156, 213, 240) 110.1%, rgb(205, 217, 233) 118.03%, rgb(255, 221, 225) 125.96%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')" }}>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Selected Projects</p>
      <Images />
    </div>
  );
}

function Client() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="client">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Client</p>
        <p>Keva 2025</p>
      </div>
    </div>
  );
}

function HeadlineKeva() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="headline Keva">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Pension and Rehabilitation App</p>
      <Client />
    </div>
  );
}

function KevaTeksti() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[760px]" data-name="Keva teksti">
      <HeadlineKeva />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">My role</p>
        <p className="mb-0">UX and UI design of the app, mapping user and client needs, creating flows and user paths, transforming design system elements to better fit to mobile environment, creating brand-loyal visual elements, accessibility at the core of design.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Design principles</p>
        <p>Simple and clear flows and visuals to minimise cognitive load and confusion, accessibility at the core of the design.</p>
      </div>
    </div>
  );
}

function KevaKuva() {
  return (
    <div className="bg-[#ffdde1] col-1 content-stretch flex flex-col items-start ml-px mt-0 pb-[73px] pl-[13px] pr-[10px] pt-[113px] relative rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 1">
      <div className="h-[532px] relative shrink-0 w-[719px]" data-name="Benefit payments at a glance 6 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-11.35%] max-w-none top-0 w-[131.66%]" src={imgBenefitPaymentsAtAGlance61} />
        </div>
      </div>
    </div>
  );
}

function KevaKuva2() {
  return (
    <div className="col-1 ml-0 mt-[750px] relative rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute bg-[#ffdde1] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[77.22%] left-[-13.68%] max-w-none top-[11.35%] w-[122.27%]" src={imgKevaKuva4} />
        </div>
      </div>
    </div>
  );
}

function KevaKuva3() {
  return (
    <div className="bg-[#39cdff] col-1 content-stretch flex flex-col items-start ml-[751px] mt-[750px] pb-[73px] pl-[13px] pr-[10px] pt-[44px] relative rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 5">
      <div className="h-[583px] relative shrink-0 w-[709px]" data-name="6 copy 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-15.35%] max-w-none top-[-0.07%] w-[146.28%]" src={img6Copy1} />
        </div>
      </div>
    </div>
  );
}

function RefeImages() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="refe images">
      <div className="col-1 ml-[751px] mt-0 relative rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-full left-[-90.34%] max-w-none top-0 w-[284.02%]" src={imgKevaKuva2} />
        </div>
      </div>
      <KevaKuva />
      <KevaKuva2 />
      <KevaKuva3 />
    </div>
  );
}

function KevaGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[112px] top-[2228px] w-[1483.005px]" data-name="Keva group">
      <KevaTeksti />
      <RefeImages />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-[2228px]">
      <div className="absolute bg-gradient-to-r from-[#ffdde1] from-[23.559%] h-[24px] left-0 to-[#39cdff] top-[2228px] w-[1728px]" data-name="keva color bar" />
      <KevaGroup />
    </div>
  );
}

function Client1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="client">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Client</p>
        <p>Enevo 2017</p>
      </div>
    </div>
  );
}

function HeadlineEnevo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="headline enevo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">{`Waste sensor installation process & installation app`}</p>
      <Client1 />
    </div>
  );
}

function KevaTeksti1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[760px]" data-name="Keva teksti">
      <HeadlineEnevo />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] mb-0">My role</p>
        <p className="leading-[normal] mb-0">Mapping the installation process and installers needs, user studies (field studies), 3D modelling and printing, industrial design, visual design, packaging.</p>
        <p className="leading-[normal] mb-0">{`UX and UI design of the app, creating flows and user paths, user testing. `}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] mb-0">Design principles</p>
        <p>
          <span className="leading-[normal]">{`Clear and unambiguous flows, `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic">simple and robust design</span>
          <span className="leading-[normal]">{` to support challenging installation conditions.`}</span>
        </p>
      </div>
    </div>
  );
}

function KevaKuva1() {
  return (
    <div className="bg-[#ffdde1] col-1 content-stretch flex flex-col items-center justify-center ml-0 mt-0 pl-[13px] relative rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 1">
      <div className="h-[601px] relative shrink-0 w-[633px]" data-name="enevo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-8.77%] max-w-none top-0 w-[108.86%]" src={imgEnevo1} />
        </div>
      </div>
    </div>
  );
}

function ImagesEnevo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="images enevo">
      <div className="col-1 ml-[750px] mt-0 rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 2" />
      <div className="col-1 ml-[752px] mt-0 relative rounded-[20px] row-1 size-[732px]" data-name="installing 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgInstalling2} />
      </div>
      <KevaKuva1 />
    </div>
  );
}

function KevaKuva4() {
  return (
    <div className="bg-[#39cdff] content-stretch flex flex-col items-start pb-[73px] pr-[10px] relative rounded-[20px] shrink-0 size-[732.005px]" data-name="keva kuva 4">
      <div className="h-[699px] relative shrink-0 w-[761px]" data-name="enevo_2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.06%] left-[-4.93%] max-w-none top-[-0.03%] w-[104.93%]" src={imgEnevo21} />
        </div>
      </div>
    </div>
  );
}

function ImagesEnevo1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="images enevo 2">
      <div className="relative rounded-[20px] shrink-0 size-[732px]" data-name="003 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[100.05%] left-[-8.46%] max-w-none top-[-0.02%] w-[154.7%]" src={img0031} />
        </div>
      </div>
      <KevaKuva4 />
    </div>
  );
}

function EnevoGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[112px] top-[4125px] w-[1483.005px]" data-name="Enevo group">
      <KevaTeksti1 />
      <ImagesEnevo />
      <ImagesEnevo1 />
    </div>
  );
}

function Client2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="client">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Client</p>
        <p>Seure 2024</p>
      </div>
    </div>
  );
}

function HeadlineEnevo1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="headline enevo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Work Shift Order Path</p>
      <Client2 />
    </div>
  );
}

function KevaTeksti2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[760px]" data-name="Keva teksti">
      <HeadlineEnevo1 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">My role</p>
        <p className="mb-0">Mapping the order process and user needs, UX and UI design, creating the flow.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Design principles</p>
        <p>Clear and unambiguous flows, simple and robust design to support challenging installation conditions.</p>
      </div>
    </div>
  );
}

function SeureKuva() {
  return (
    <div className="bg-[#f6f6f6] col-1 content-stretch flex flex-col h-[732px] items-center justify-center ml-0 mt-0 pl-[13px] relative rounded-[20px] row-1 w-[1483px]" data-name="seure kuva 1">
      <div className="h-[790px] relative shrink-0 w-[1070px]" data-name="kone2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.27%] left-[-27.51%] max-w-none top-[-6.02%] w-[143.54%]" src={imgKone21} />
        </div>
      </div>
    </div>
  );
}

function ImagesSeure() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="images seure">
      <SeureKuva />
    </div>
  );
}

function EnevoGroup1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[112px] top-[6003px] w-[1483.005px]" data-name="Enevo group">
      <KevaTeksti2 />
      <ImagesSeure />
    </div>
  );
}

function Client3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="client">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Clients</p>
        <p>Mendor, Enevo, Eficode, Zure</p>
      </div>
    </div>
  );
}

function HeadlineVisuals() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="headline visuals">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">{`Brand Graphics & Visual Design`}</p>
      <Client3 />
    </div>
  );
}

function KevaTeksti3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[760px]" data-name="Keva teksti">
      <HeadlineVisuals />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">My role</p>
        <p className="mb-0">{`Concepting the visuals together with sales & marketing, groundwork & benchmarking, ideating, visual design & branding, drawing.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0">Design principles</p>
        <p>Visually balanced and informative visuals to boost the brand message, scalable and fit-for-purpose.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[732px]">
      <div className="relative rounded-[20px] shrink-0 size-[732px]" data-name="Screenshot 2026-03-24 at 14.18.02 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-full left-[-2.23%] max-w-none top-0 w-[104.38%]" src={imgScreenshot20260324At1418021} />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative rounded-[20px] row-1 size-[732px]" data-name="Screenshot 2026-03-24 at 14.20.52 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[100.06%] left-[-5.4%] max-w-none top-[-0.03%] w-[108.26%]" src={imgScreenshot20260324At1420521} />
        </div>
      </div>
    </div>
  );
}

function ImagesVisuals() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="images visuals">
      <Frame />
      <Group10 />
    </div>
  );
}

function ImagesVisuals1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="images visuals 2">
      <div className="col-1 ml-[640px] mt-px rounded-[20px] row-1 size-[732.005px]" data-name="keva kuva 2" />
      <div className="col-1 h-[732px] ml-[753px] mt-px relative rounded-[20px] row-1 w-[731px]" data-name="Screenshot 2026-03-24 at 13.52.18 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgScreenshot20260324At1352181} />
      </div>
      <div className="col-1 h-[733px] ml-0 mt-0 relative row-1 w-[732px]" data-name="Screenshot 2026-03-24 at 13.52.09 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260324At1352091} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <div className="relative rounded-bl-[20px] rounded-br-[20px] shrink-0 size-[732px]" data-name="03 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[20px] rounded-br-[20px]">
          <img alt="" className="absolute h-[138.67%] left-[-9.14%] max-w-none top-[-12.62%] w-[109.98%]" src={img031} />
        </div>
      </div>
    </div>
  );
}

function KevaKuva5() {
  return (
    <div className="bg-[#dcf6ff] content-stretch flex flex-col items-end pb-[73px] relative rounded-[20px] shrink-0 size-[732.005px]" data-name="keva kuva 4">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <KevaKuva5 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative rounded-[20px] row-1 size-[732px]" data-name="Screenshot 2026-03-24 at 14.23.46 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[120.28%] left-[-4.81%] max-w-none top-[-20.25%] w-[125.41%]" src={imgScreenshot20260324At1423461} />
        </div>
      </div>
    </div>
  );
}

function ImagesVisuals2() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="images visuals 3">
      <Frame1 />
      <Group11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="h-[748px] relative shrink-0 w-[662px]" data-name="Gray Hexagons-31 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrayHexagons311} />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="col-1 h-[682px] ml-0 mt-0 relative row-1 w-[766px]" data-name="UX research, customer insight and accessibility Hero Transparent SKangas 22062020 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.55%] left-[-63.55%] max-w-none top-[-4.93%] w-[167.18%]" src={imgUxResearchCustomerInsightAndAccessibilityHeroTransparentSKangas220620201} />
        </div>
      </div>
    </div>
  );
}

function ImagesVisuals3() {
  return (
    <div className="content-stretch flex gap-[55px] items-center relative shrink-0 w-[1483px]" data-name="images visuals 4">
      <Frame3 />
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group12 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#202020] content-stretch flex flex-col items-start pb-[81px] pt-[80px] relative rounded-[20px] shrink-0 size-[732.005px]">
      <div className="h-[601px] relative shrink-0 w-[732px]" data-name="AI_tool 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.05%] left-[4.03%] max-w-none top-[-0.02%] w-[105.32%]" src={imgAiTool1} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="relative rounded-[20px] shrink-0 size-[732px]" data-name="Screenshot 2026-03-24 at 14.37.54 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[155.23%] left-[-21.12%] max-w-none top-[-31.31%] w-[147.49%]" src={imgScreenshot20260324At1437541} />
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function ImagesVisuals4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="images visuals 5">
      <Frame4 />
    </div>
  );
}

function EnevoGroup2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[112px] top-[7078px] w-[1483.005px]" data-name="Enevo group">
      <KevaTeksti3 />
      <ImagesVisuals />
      <ImagesVisuals1 />
      <ImagesVisuals2 />
      <ImagesVisuals3 />
      <ImagesVisuals4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[57px] left-[856px] top-[999px] w-[36px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 57">
        <g id="icon">
          <path d={svgPaths.pe553900} fill="var(--fill-0, #39CDFF)" fillOpacity="0.5" id="icon/hardware/keyboard_backspace_24px" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="01">
      <div className="absolute bg-gradient-to-r from-[#ffdde1] from-[23.559%] h-[24px] left-0 to-[#39cdff] top-[4125px] w-[1728px]" data-name="enevo color bar" />
      <div className="absolute bg-gradient-to-r from-[#ffdde1] from-[23.559%] h-[24px] left-0 to-[#39cdff] top-[6003px] w-[1728px]" data-name="enevo color bar" />
      <div className="absolute bg-gradient-to-r from-[#ffdde1] from-[23.559%] h-[24px] left-0 to-[#39cdff] top-[7078px] w-[1728px]" data-name="visuals color bar" />
      <HeaderGroup />
      <Competencies />
      <Competencies1 />
      <SelectedProjects />
      <Group9 />
      <EnevoGroup />
      <EnevoGroup1 />
      <EnevoGroup2 />
      <Icon />
    </div>
  );
}