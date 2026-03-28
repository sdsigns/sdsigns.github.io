import imgKevaKuva4 from "figma:asset/17b242408c6526464280f5d9e9a23d858f951db5.png";

function Frame() {
  return <div className="shrink-0 size-[732px]" />;
}

function KevaKuva() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[73px] pr-[10px] relative rounded-[20px] shrink-0 size-[732.005px]" data-name="keva kuva 4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute bg-[#ffdde1] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[98.36%] left-[-36.27%] max-w-none top-0 w-[172.02%]" src={imgKevaKuva4} />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function ImagesEnevo() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="images enevo 2">
      <KevaKuva />
    </div>
  );
}

export default function ImagesSeure() {
  return (
    <div className="relative size-full" data-name="images seure">
      <ImagesEnevo />
    </div>
  );
}