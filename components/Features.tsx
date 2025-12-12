import React from 'react';
import { ShieldCheck, Sparkles, Ruler, Droplets } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Anti-rayures",
    description: "Une surface traitée pour résister aux chocs et rayures du quotidien."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Ultra transparent ou mat",
    description: "Une clarté cristalline ou un fini mat élégant selon vos préférences."
  },
  {
    icon: <Ruler className="w-8 h-8 text-indigo-500" />,
    title: "Découpe précise sur mesure",
    description: "Technologie de découpe numérique pour une adaptation parfaite à votre table."
  },
  {
    icon: <Droplets className="w-8 h-8 text-cyan-500" />,
    title: "Nettoyage facile",
    description: "Imperméable et antitache, un simple coup d'éponge suffit."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pourquoi choisir nos nappes ?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Alliez esthétique et protection grâce à notre savoir-faire unique et nos matériaux de haute qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;