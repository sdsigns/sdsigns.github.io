export function Competencies() {
  const coreSkills1 = [
    'UX & UI Design',
    'Visual Design',
    'Visual accessibility & balance',
    'Cognitive accessibility'
  ];

  const coreSkills2 = [
    'Concepting',
    'Prototypes',
    'Flows',
    'Graphics'
  ];

  const supportSkills1 = [
    'Industrial design',
    'Art Directing',
    'User Research',
    'Service Design'
  ];

  const supportSkills2 = [
    'Workshops',
    '3D modelling',
    'AI design'
  ];

  return (
    <section className="w-full bg-[#f6f6f6] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Core Competencies */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl text-black text-center lg:text-left">
              Core Competencies
            </h2>
            <div className="flex gap-6">
              <div className="w-2 bg-[#39cdff] rounded-full shrink-0" />
              <div className="flex gap-8 md:gap-12">
                <ul className="flex flex-col gap-2 text-base text-black">
                  {coreSkills1.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2 text-base text-black">
                  {coreSkills2.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Support Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl text-black text-center lg:text-left">
              Support Skills
            </h2>
            <div className="flex gap-6">
              <div className="w-2 bg-[#ffdde1] rounded-full shrink-0" />
              <div className="flex gap-8 md:gap-12">
                <ul className="flex flex-col gap-2 text-base text-black">
                  {supportSkills1.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2 text-base text-black">
                  {supportSkills2.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}