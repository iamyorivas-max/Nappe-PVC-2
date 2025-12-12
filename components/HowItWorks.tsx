import React from 'react';
import { PenTool, Layers, Ruler, ShoppingBag } from 'lucide-react';

const steps = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "1. Choisissez la forme",
    desc: "Carrée, ronde, ovale ou sur plan."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "2. Sélectionnez l’épaisseur",
    desc: "1.2mm, 1.8mm ou 2.5mm."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "3. Définissez vos dimensions",
    desc: "Saisissez la longueur et la largeur."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "4. Validez votre choix",
    desc: "Livraison rapide à domicile."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
         <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-slate-300">Votre nappe sur mesure en 4 étapes simples.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
               {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 px-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
                Commencer ma personnalisation
             </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;