import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Benali",
    city: "Casablanca",
    text: "J'ai commandé une nappe de 2.5mm pour ma table en marbre. Le résultat est bluffant, on dirait du verre ! Livraison super rapide.",
    image: "https://picsum.photos/100/100?random=30"
  },
  {
    name: "Mohamed Idrissi",
    city: "Rabat",
    text: "Très satisfait de la découpe octogonale. C'était difficile de trouver ça ailleurs. Le service client a été très réactif pour confirmer les mesures.",
    image: "https://picsum.photos/100/100?random=31"
  },
  {
    name: "Lina Tazi",
    city: "Marrakech",
    text: "La nappe mate est parfaite pour mon bureau. Plus de reflets de lumière et ça protège bien le bois. Je recommande à 100%.",
    image: "https://picsum.photos/100/100?random=32"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Avis Clients</h2>
          <p className="text-slate-600">Ce que nos clients pensent de nos produits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-slate-100">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{review.name}</h3>
              <p className="text-xs text-blue-500 font-bold uppercase tracking-wide mb-4">{review.city}</p>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;