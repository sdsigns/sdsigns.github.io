interface ProjectDetailProps {
  title: string;
  client: string;
  role: string;
  principles: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export function ProjectDetail({ 
  title, 
  client, 
  role, 
  principles, 
  accentColor = '#39cdff',
  children 
}: ProjectDetailProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Text content */}
          <div className="w-full">
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-black">
                {title}
              </h2>
              <div className="text-base md:text-lg lg:text-xl text-black">
                <p className="font-semibold mb-1">Client</p>
                <p>{client}</p>
              </div>
            </div>
            
            <div className="text-base md:text-lg lg:text-xl text-black space-y-4">
              <div>
                <p className="font-semibold mb-2">My role</p>
                <p>{role}</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Design principles</p>
                <p>{principles}</p>
              </div>
            </div>
          </div>

          {/* Images */}
          {children && (
            <div className="w-full">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}