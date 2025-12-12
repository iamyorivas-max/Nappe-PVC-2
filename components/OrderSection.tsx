import React, { useState, useEffect } from 'react';
import { Check, Info, Phone } from 'lucide-react';

// Shape Icons
const RectIcon = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={selected ? "#16a34a" : "#64748b"} strokeWidth="2" className="transition-colors">
    <rect x="2" y="5" width="20" height="14" rx="1"></rect>
  </svg>
);
const SquareIcon = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={selected ? "#16a34a" : "#64748b"} strokeWidth="2" className="transition-colors">
    <rect x="4" y="4" width="16" height="16" rx="1"></rect>
  </svg>
);
const CircleIcon = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={selected ? "#16a34a" : "#64748b"} strokeWidth="2" className="transition-colors">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);
const OvalIcon = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={selected ? "#16a34a" : "#64748b"} strokeWidth="2" className="transition-colors">
    <ellipse cx="12" cy="12" rx="10" ry="6"></ellipse>
  </svg>
);
const OctagonIcon = ({ selected }: { selected: boolean }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={selected ? "#16a34a" : "#64748b"} strokeWidth="2" className="transition-colors">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
  </svg>
);

type ShapeType = 'rectangle' | 'square' | 'circle' | 'oval' | 'octagon';
type ThicknessType = '1.2mm' | '2mm';

const OrderSection: React.FC = () => {
  const [shape, setShape] = useState<ShapeType>('rectangle');
  const [thickness, setThickness] = useState<ThicknessType>('2mm');
  const [width, setWidth] = useState<number | ''>('');
  const [length, setLength] = useState<number | ''>('');
  const [price, setPrice] = useState<number>(0);

  // Prices per m2
  const prices = {
    '1.2mm': 199,
    '2mm': 299
  };

  useEffect(() => {
    if (width && length) {
      // Formula: (Width (cm) * Length (cm) / 10000) * Price_per_m2
      // For circle/square, we might only use one dimension, but let's keep it simple: assume user inputs bounding box
      const areaInM2 = (Number(width) * Number(length)) / 10000;
      const basePrice = areaInM2 * prices[thickness];
      // Minimum price threshold or rounding
      setPrice(Math.max(Math.ceil(basePrice), 50)); 
    } else {
      setPrice(0);
    }
  }, [width, length, thickness]);

  const handleShapeChange = (s: ShapeType) => {
    setShape(s);
    if (s === 'square' || s === 'circle' || s === 'octagon') {
      // Reset if switching to symmetric shapes (logic can be refined)
    }
  };

  const isSymmetric = shape === 'circle' || shape === 'square' || shape === 'octagon';

  return (
    <section className="py-12 lg:py-20 bg-slate-50" id="order-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Info & Selling Points */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Best-seller</h2>
            <p className="text-lg font-medium text-slate-700 mb-6">Livraison gratuite partout au Maroc</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Épaisseur 1.2mm : <strong className="text-slate-900">199 DH/m²</strong>, plus frais de découpe</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Épaisseur 2mm : <strong className="text-slate-900">299 DH/m²</strong>, plus frais de découpe</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Le film de protection de table peut entrer en contact avec des aliments.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Bords résistants à l'eau et protège contre les rayures.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm">Grâce à sa transparence, vous pouvez toujours voir la surface de la table.</span>
              </li>
            </ul>

            <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-bold text-green-800 text-sm mb-1">En stock</p>
                <p className="text-green-700 text-sm">Date de livraison : Entre 24h et 48h</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Calculator & Form */}
          <div className="w-full lg:w-7/12 bg-white p-5 md:p-8 rounded-3xl shadow-xl border border-slate-200">
            
            {/* Shape Selector */}
            <div className="mb-8">
              <label className="block text-slate-900 font-bold mb-4 text-base">Forme de votre table :</label>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { id: 'circle', comp: CircleIcon },
                  { id: 'octagon', comp: OctagonIcon },
                  { id: 'square', comp: SquareIcon },
                  { id: 'oval', comp: OvalIcon },
                  { id: 'rectangle', comp: RectIcon },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleShapeChange(item.id as ShapeType)}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-lg border-2 flex items-center justify-center transition-all ${
                      shape === item.id 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <item.comp selected={shape === item.id} />
                  </button>
                ))}
              </div>
            </div>

            {/* Calculator Box */}
            <div className="bg-slate-50 p-5 md:p-6 rounded-2xl mb-8 border border-slate-100">
              {/* Thickness */}
              <div className="mb-6">
                <label className="block text-slate-900 font-bold mb-3 text-base">Épaisseur :</label>
                <div className="flex gap-3 md:gap-4 w-full">
                  <button 
                    onClick={() => setThickness('1.2mm')}
                    className={`flex-1 py-3 px-2 md:px-6 rounded-md font-bold text-sm border-2 transition-all shadow-sm ${
                      thickness === '1.2mm' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-600 border-slate-300 hover:border-green-400'
                    }`}
                  >
                    1.2 MM
                  </button>
                  <button 
                    onClick={() => setThickness('2mm')}
                    className={`flex-1 py-3 px-2 md:px-6 rounded-md font-bold text-sm border-2 transition-all shadow-sm ${
                      thickness === '2mm' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-600 border-slate-300 hover:border-green-400'
                    }`}
                  >
                    2 MM
                  </button>
                </div>
              </div>

              {/* Dimensions Input */}
              <div className="mb-6">
                <label className="block text-slate-900 font-bold mb-3 text-base">Dimensions (en cm) :</label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold mb-1 block">
                      {isSymmetric ? 'Diamètre / Côté' : 'Longueur'}
                    </span>
                    <input 
                      type="number" 
                      value={length}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setLength(isNaN(val) ? '' : val);
                        if (isSymmetric) setWidth(isNaN(val) ? '' : val);
                      }}
                      placeholder="ex: 200"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-base bg-white"
                    />
                  </div>
                  <div className={isSymmetric ? 'opacity-50 pointer-events-none' : ''}>
                     <span className="text-xs text-slate-500 font-semibold mb-1 block">
                      {isSymmetric ? 'Largeur (Auto)' : 'Largeur'}
                     </span>
                    <input 
                      type="number" 
                      value={width}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setWidth(isNaN(val) ? '' : val);
                      }}
                      placeholder="ex: 90"
                      readOnly={isSymmetric}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-base bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Price Result */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium text-sm md:text-base">Prix Total Estimé :</span>
                  <div className="text-right">
                    {price > 0 ? (
                      <span className="text-2xl md:text-3xl font-extrabold text-green-600">{price} DHs</span>
                    ) : (
                      <span className="text-sm text-slate-400 italic">Saisissez vos dimensions</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Vos Informations :</h3>
              <div className="space-y-4">
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email : *</label>
                   <input type="email" className="w-full p-3 border-b-2 border-slate-200 bg-slate-50 focus:border-green-500 outline-none transition-colors text-base" placeholder="votre@email.com" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nom complet : *</label>
                   <input type="text" className="w-full p-3 border-b-2 border-slate-200 bg-slate-50 focus:border-green-500 outline-none transition-colors text-base" placeholder="Votre nom" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Téléphone : *</label>
                   <input type="tel" className="w-full p-3 border-b-2 border-slate-200 bg-slate-50 focus:border-green-500 outline-none transition-colors text-base" placeholder="06..." />
                </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Adresse complète : *</label>
                   <textarea className="w-full p-3 border-b-2 border-slate-200 bg-slate-50 focus:border-green-500 outline-none transition-colors resize-none text-base" rows={2} placeholder="Votre adresse de livraison"></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 text-lg active:scale-95">
                  Commander Maintenant
                </button>
              </div>
            </div>

            {/* Support Box */}
            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
               <p className="font-bold text-slate-900 mb-1">Besoin d'aide ?</p>
               <a href="tel:+212663310000" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg">
                 <Phone className="w-5 h-5" />
                 +212 600 000 000
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;