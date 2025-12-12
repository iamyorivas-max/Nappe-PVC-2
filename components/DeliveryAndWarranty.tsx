import React from 'react';
import { Truck, ShieldCheck, CreditCard, Award } from 'lucide-react';

const DeliveryAndWarranty: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 rounded-3xl bg-blue-50 p-8 md:p-12 overflow-hidden relative">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/600/400?random=20" 
                 alt="Livraison rapide" 
                 className="w-full h-auto object-cover"
               />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Service Premium &<br /> 
              <span className="text-blue-600">Garantie Totale</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Livraison partout au Maroc</h4>
                  <p className="text-sm text-slate-600">Recevez votre commande sous 24h à 48h dans toutes les villes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Paiement à la livraison</h4>
                  <p className="text-sm text-slate-600">Vérifiez votre produit avant de payer. Aucune avance requise.</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">PVC Premium Haute Résistance</h4>
                  <p className="text-sm text-slate-600">Matériau durable, sans odeur et sûr pour le contact alimentaire.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Garantie Satisfaction 100%</h4>
                  <p className="text-sm text-slate-600">Un défaut ? Une erreur de découpe ? Nous remplaçons immédiatement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAndWarranty;