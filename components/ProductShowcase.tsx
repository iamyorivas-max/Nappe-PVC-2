import React from 'react';

// Simple SVG components for shapes
const SquareIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);
const RectIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
  </svg>
);
const CircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);
const OvalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
    <ellipse cx="12" cy="12" rx="10" ry="6"></ellipse>
  </svg>
);
const OctagonIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
  </svg>
);

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* SHAPES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Formes Disponibles</h2>
            <p className="text-slate-600">Nous découpons votre nappe selon la géométrie exacte de votre table.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: 'Carrée', icon: <SquareIcon /> },
              { label: 'Rectangulaire', icon: <RectIcon /> },
              { label: 'Ronde', icon: <CircleIcon /> },
              { label: 'Ovale', icon: <OvalIcon /> },
              { label: 'Octogone', icon: <OctagonIcon /> },
            ].map((shape, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {shape.icon}
                </div>
                <span className="font-semibold text-slate-800">{shape.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TYPES SECTION */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Types de nappes disponibles</h2>
            <p className="text-slate-600">Trouvez le style qui correspond à votre intérieur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
                <img 
                  src="https://picsum.photos/600/450?random=10" 
                  alt="Nappe Transparente" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Transparent</h3>
              <p className="text-sm text-slate-500 mt-1">L'élégance invisible qui sublime votre table.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
                <img 
                  src="https://picsum.photos/600/450?random=11" 
                  alt="Nappe Mate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                 <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Transparent Mat</h3>
              <p className="text-sm text-slate-500 mt-1">Finition givrée, anti-reflet et moderne.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
                <img 
                  src="https://picsum.photos/600/450?random=12" 
                  alt="Nappe Dorée" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Doré / À motifs</h3>
              <p className="text-sm text-slate-500 mt-1">Une touche de luxe pour les occasions spéciales.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;