export function Contact() {
  return (
    <section 
      id="contact"
      className="w-full py-12 md:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(to right, #39cdff 0%, #ffdde1 37%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-xl text-black text-center lg:text-left">
            Download CV & Contact
          </h2>
          <div className="flex gap-6">
            <div className="w-2 bg-[#39cdff] rounded-full shrink-0" />
            <ul className="flex flex-col gap-2 text-base text-black">
              <li>
                <a 
                  href="#" 
                  className="underline hover:no-underline"
                  download
                >
                  Download CV
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/sanna-kangas/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:brilapri19@gmail.com"
                  className="underline hover:no-underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}