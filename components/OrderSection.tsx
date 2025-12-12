import React, { useState, useEffect } from 'react';
import { Check, ShoppingBag, Ruler, ArrowRight, Truck, ShieldCheck } from 'lucide-react';

type Shape = 'rectangle' | 'square' | 'circle' | 'oval';
type Thickness = '1.2mm' | '2mm';

const OrderSection: React.FC = () => {
  const [shape, setShape] = useState<Shape>('rectangle');
  const [thickness, setThickness] = useState<Thickness>('2mm');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Constants
  const PRICES = { '1.2mm': 199, '2mm': 299 };
  const MIN_PRICE = 50;

  // Calculate Price
  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (!isNaN(l) && !isNaN(w) && l > 0 && w > 0) {
      const area = (l * w) / 10000; // cm² to m²
      const rawPrice = area * PRICES[thickness];
      const finalPrice = Math.max(Math.ceil(rawPrice), MIN_PRICE);
      
      if (finalPrice !== price) {
        setIsAnimating(true);
        setPrice(finalPrice);
        setTimeout(() => setIsAnimating(false), 300);
      }
    } else {
      setPrice(0);
    }
  }, [length, width, thickness]);

  // Handle Shape Selection logic
  const handleShapeSelect = (s: Shape) => {
    setShape(s);
    // If switching to square/circle, force width = length
    if (s === 'square' || s === 'circle') {
      if (length) setWidth(length);
    }
  };

  // Handle Dimension Inputs
  const handleLengthChange = (val: string) => {
    setLength(val);
    if (shape === 'square' || shape === 'circle') {
      setWidth(val);
    }
  };

  return (
    <section id="order-section" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
            <ShoppingBag size={16} />
            Commande en ligne
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Configurez votre nappe
          </h2>
          <p className="text-lg text-slate-600">
            Obtenez un prix immédiat et commandez votre protection sur mesure en quelques clics.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
          
          {/* LEFT PANEL: CONFIGURATOR */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* 1. Shape Selection */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Forme de la table
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'rectangle', label: 'Rectangle', path: 'M4 6h16v12H4z' },
                  { id: 'square', label: 'Carré', path: 'M4 4h16v16H4z' },
                  { id: 'circle', label: 'Rond', path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' },
                  { id: 'oval', label: 'Ovale', path: 'M12 22c5.523 0 10-3.582 10-8V10c0-4.418-4.477-8-10-8S2 5.582 2 10v4c0 4.418 4.477 8 10 8z' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleShapeSelect(item.id as Shape)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3 ${
                      shape === item.id
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className={shape === item.id ? 'text-blue-600' : 'text-slate-400'}>
                      <path d={item.path} />
                    </svg>
                    <span className="font-semibold">{item.label}</span>
                    {shape === item.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimensions & Thickness */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Dimensions & Épaisseur
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Length Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {shape === 'circle' ? 'Diamètre (cm)' : shape === 'square' ? 'Côté (cm)' : 'Longueur (cm)'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="Ex: 200"
                      value={length}
                      onChange={(e) => handleLengthChange(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 outline-none font-bold text-lg text-slate-900 transition-colors"
                    />
                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  </div>
                </div>

                {/* Width Input */}
                <div className={`${(shape === 'circle' || shape === 'square') ? 'opacity-50 pointer-events-none' : ''}`}>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Largeur (cm)</label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="Ex: 90"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      readOnly={shape === 'circle' || shape === 'square'}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-0 outline-none font-bold text-lg text-slate-900 transition-colors"
                    />
                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  </div>
                </div>
              </div>

              {/* Thickness Selection */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Choix de l'épaisseur</label>
                <div className="grid grid-cols-2 gap-4">
                  {(['1.2mm', '2mm'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setThickness(t)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        thickness === t
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-lg">{t}</span>
                      <span className={`text-sm ${thickness === t ? 'text-blue-100' : 'text-slate-500'}`}>
                        {t === '1.2mm' ? 'Standard' : 'Premium'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. User Details Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Livraison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nom complet" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors" />
                <input type="tel" placeholder="Numéro de téléphone" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors" />
                <input type="text" placeholder="Ville" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors" />
                <textarea placeholder="Adresse exacte" rows={1} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-colors md:col-span-2 resize-none"></textarea>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: STICKY SUMMARY */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <h3 className="text-xl font-bold mb-6 relative z-10">Récapitulatif</h3>
              
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Forme</span>
                  <span className="font-medium capitalize">{shape}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Dimensions</span>
                  <span className="font-medium">
                    {length || '0'} x {width || '0'} cm
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Épaisseur</span>
                  <span className="font-medium">{thickness}</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 relative z-10">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-slate-400">Total estimé</span>
                  <span className={`text-4xl font-extrabold text-blue-400 transition-transform duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                    {price} <span className="text-xl font-bold text-white">DH</span>
                  </span>
                </div>
                <p className="text-xs text-slate-500 text-right">TVA incluse + Livraison gratuite</p>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 relative z-10">
                Commander
                <ArrowRight size={20} />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500 relative z-10">
                <span className="flex items-center gap-1"><Truck size={14} /> Livraison 48h</span>
                <span className="flex items-center gap-1"><ShieldCheck size={14} /> Garantie</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderSection;