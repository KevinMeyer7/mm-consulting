
'use client';

export function ProofBar() {
  const clients = [
    { name: 'Google', logo: '/client-logos/google.svg' },
    { name: 'BlackRock', logo: '/client-logos/blackrock.svg' },
    { name: 'Y Combinator', logo: '/client-logos/yc.svg' },
    { name: 'Swissquote', logo: '/client-logos/swissquote.svg' },
    { name: 'Rational', logo: '/client-logos/rational.svg' },
    { name: 'Ocado', logo: '/client-logos/ocado.svg' },
  ];

  return (
    <section className="py-16 px-6 border-t border-brand-border/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-brand-textDim mb-8 text-sm uppercase tracking-wide">
          Trusted by teams at leading companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {/* Placeholder for client logos - replace with actual SVGs */}
              <div className="bg-brand-textDim/20 px-6 py-2 rounded text-brand-textDim text-sm font-medium">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
