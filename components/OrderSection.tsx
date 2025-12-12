import React, { useState, useEffect } from 'react';
import { Check, ShoppingBag, Ruler, ArrowRight, Truck, ShieldCheck, AlertCircle } from 'lucide-react';

type Shape = 'rectangle' | 'square' | 'circle' | 'oval';
type Thickness = '1.2mm' | '2mm';

const OrderSection: React.FC = () => {
  const [shape, setShape] = useState<Shape>('rectangle');
  const [thickness, setThickness] = useState<Thickness>('2mm');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prices per m2
  const PRICES = { 
    '1.2mm': 199, 
    '2mm': 299 
  };
  const MIN_PRICE = 50;

  // Calculate Price Effect
  useEffect(() => {
    calculatePrice();
  }, [length, width, thickness, shape]);

  const calculatePrice = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    // Validation: Check if inputs are numbers and greater than 0
    if (!isNaN(l) && !isNaN(w) && l > 0 && w > 0) {
      const areaInM2 = (l * w) / 10000; // Convert cm² to m²
      const rawPrice = areaInM2 * PRICES[thickness];
      const finalPrice = Math.max(Math.ceil(rawPrice), MIN_PRICE);
      
      if (finalPrice !== price) {
        setPrice(finalPrice);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
      }
    } else {
      setPrice(0);
    }
  };

  const handleShapeSelect = (s: Shape) => {
    setShape(s);
    // If switching to symmetric shape, sync width to length
    if (s === 'square' || s === 'circle') {
      if (length) setWidth(length);
    }
  };

  const handleLengthChange = (val: string) => {
    setLength(val);
    if (shape === 'square' || shape === 'circle') {
      setWidth(val);
    }
  };

  return (
    <section id="order-section" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider shadow-lg shadow-blue-200">
            <ShoppingBag size={14} />
            Calculateur de prix
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Votre nappe sur mesure
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Configurez votre protection idéale en quelques secondes. Prix immédiat, satisfaction garantie.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          
          {/* LEFT: Configuration Panel */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Step 1: Shape */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold">1</span>
                Choisissez la forme
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { id: 'rectangle', label: 'Rectangle', path: 'M4 6h16v12H4z' },
                  { id: 'square', label: 'Carré', path: 'M4 4h16v16H4z' },
                  { id: 'circle', label: 'Rond', path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' },
                  { id: 'oval', label: 'Ovale', path: 'M12 22c5.523 0 10-3.582 10-8V10c0-4.418-4.477-8-10-8S2 5.582 2 10v4c0 4.418 4.477 8 10 8z' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleShapeSelect(item.id as Shape)}
                    className={`group relative p-4 flex flex-col items-center gap-3 rounded-2xl border-2 transition-all duration-200 ${
                      shape === item.id
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md ring-2 ring-blue-600/20'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-white'
                    }`}
                  >
                    <div className={`transition-transform duration-300 ${shape === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className={shape === item.id ? 'text-blue-600' : 'text-slate-400'}>
                        <path d={item.path} />
                      </svg>
                    </div>
                    <span className="font-bold text-sm">{item.label}</span>
                    {shape === item.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Thickness */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold">2</span>
                Dimensions & Épaisseur
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {shape === 'circle' ? 'Diamètre (cm)' : shape === 'square' ? 'Côté (cm)' : 'Longueur (cm)'}
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      inputMode="decimal"
                      value={length}
                      onChange={(e) => handleLengthChange(e.target.value)}
                      placeholder="ex: 200"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white outline-none font-bold text-lg text-slate-900 transition-all placeholder:font-normal placeholder:text-slate-400"
                    />
                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  </div>
                </div>

                <div className={shape === 'circle' || shape === 'square' ? 'opacity-60 pointer-events-none select-none' : ''}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Largeur (cm)
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      inputMode="decimal"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="ex: 90"
                      readOnly={shape === 'circle' || shape === 'square'}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white outline-none font-bold text-lg text-slate-900 transition-all placeholder:font-normal placeholder:text-slate-400"
                    />
                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Épaisseur
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {(['1.2mm', '2mm'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setThickness(t)}
                      className={`flex flex-col md:flex-row items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        thickness === t
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200 scale-[1.02]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-lg">{t}</span>
                      <span className={`text-xs md:text-sm font-medium ${thickness === t ? 'text-blue-100' : 'text-slate-400'}`}>
                        {t === '1.2mm' ? 'Standard' : 'Premium'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Delivery Info */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
               <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold">3</span>
                Informations de livraison
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Nom complet</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Téléphone</label>
                    <input type="tel" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Adresse complète</label>
                  <textarea rows={2} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors resize-none"></textarea>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Price & Action */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full blur-[60px] opacity-30 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">Récapitulatif</h3>
                
                <div className="space-y-4 mb-8 text-sm relative z-10 border-t border-slate-800 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Forme</span>
                    <span className="font-semibold capitalize text-white">{shape}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Dimensions</span>
                    <span className="font-semibold text-white">
                      {length || '0'} x {width || '0'} cm
                    </span>
                  </div>
                   <div className="flex justify-between items-center">
                    <span className="text-slate-400">Épaisseur</span>
                    <span className="font-semibold text-white">{thickness}</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-5 mb-6 relative z-10 border border-slate-700/50">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-sm font-medium mb-1">Total estimé</span>
                    <div className={`transition-transform duration-300 origin-right ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                      <span className="text-3xl font-extrabold text-blue-400">{price}</span>
                      <span className="text-lg font-bold text-white ml-1">DH</span>
                    </div>
                  </div>
                  {price === 0 && (
                     <div className="mt-2 flex items-center gap-2 text-xs text-amber-400">
                       <AlertCircle size={12} />
                       Entrez vos dimensions
                     </div>
                  )}
                </div>

                <button 
                  disabled={price === 0}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                    price > 0 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50 hover:-translate-y-1' 
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Commander Maintenant
                  <ArrowRight size={20} />
                </button>
                
                <div className="mt-6 grid grid-cols-2 gap-2 text-[10px] md:text-xs text-slate-500 font-medium text-center">
                  <span className="flex items-center justify-center gap-1 bg-slate-800/50 py-2 rounded-lg"><Truck size={12} /> Livraison Rapide</span>
                  <span className="flex items-center justify-center gap-1 bg-slate-800/50 py-2 rounded-lg"><ShieldCheck size={12} /> Garantie Incluse</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderSection;