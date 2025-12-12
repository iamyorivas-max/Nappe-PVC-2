import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Épaisseurs & Tarifs</h2>
          <p className="text-slate-600">Choisissez l'épaisseur idéale pour votre usage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Standard</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">1.2 mm</h3>
            <p className="text-slate-500 mb-6">Protection légère</p>
            <div className="text-3xl font-bold text-blue-600 mb-6">
              199 DHs<span className="text-lg text-slate-400 font-normal">/m²</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Discret et fin
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Protection basique
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Idéal tables d'appoint
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Choisir 1.2 mm
            </button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-500 relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              Recommandé
            </div>
            <div className="mb-6 mt-4">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">1.8 mm</h3>
            <p className="text-slate-500 mb-6">Usage quotidien</p>
            <div className="text-3xl font-bold text-blue-600 mb-6">
              229 DHs<span className="text-lg text-slate-400 font-normal">/m²</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-blue-500" /> Équilibre parfait
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-blue-500" /> Très résistant
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-blue-500" /> Tombé élégant
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-blue-500" /> Pour tables à manger
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              Choisir 1.8 mm
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Ultra</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">2.5 mm</h3>
            <p className="text-slate-500 mb-6">Ultra résistance</p>
            <div className="text-3xl font-bold text-blue-600 mb-6">
              299 DHs<span className="text-lg text-slate-400 font-normal">/m²</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Épaisseur maximale
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Protection absolue
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Check className="w-5 h-5 text-green-500" /> Effet verre
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors">
              Choisir 2.5 mm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;