
import React from 'react';

const carbonOffsetCards = [
  {
    id: 1,
    title: 'Gold Standard',
    description: 'Supports renewable energy projects worldwide',
    image: 'public/lovable-uploads/54a494d8-f362-4165-a4a2-0ec509185de7.png'
  },
  {
    id: 2,
    title: 'Carbon Fund',
    description: 'Funds reforestation and conservation projects',
    image: 'public/lovable-uploads/37546d67-5fc9-4748-a18b-270c50211a7b.png'
  },
  {
    id: 3,
    title: 'Climate Action Reserve',
    description: 'Invests in verified emission reduction projects',
    image: 'public/lovable-uploads/4373a710-54f1-4d7a-95d9-e3a345fc728d.png'
  }
];

const CarbonOffsetPrograms = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Offset Your Impact</h2>
      
      <div className="eco-card">
        <h3 className="text-xl font-semibold mb-2">Carbon Offset Programs</h3>
        <p className="text-gray-600 mb-8">Support verified projects to neutralize your carbon footprint</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {carbonOffsetCards.map(card => (
            <div key={card.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <button className="text-eco-600 font-medium hover:text-eco-700 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarbonOffsetPrograms;
