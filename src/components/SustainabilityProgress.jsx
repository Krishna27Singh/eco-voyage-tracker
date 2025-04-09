
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const transportData = [
  { name: 'Flight', emissions: 260 },
  { name: 'Train', emissions: 170 },
  { name: 'Ferry', emissions: 120 },
  { name: 'Bus', emissions: 70 },
  { name: 'Car', emissions: 30 },
];

const COLORS = ['#10B981', '#0EA5E9', '#F59E0B', '#EF4444'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-blue-600">Amount : {payload[0].value} kg CO₂</p>
      </div>
    );
  }
  return null;
};

const SustainabilityProgress = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Sustainability Progress</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="eco-card">
          <h3 className="text-lg font-semibold mb-4">Transport Comparison</h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transportData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="emissions" name="CO₂ Emissions" fill="#0EA5E9">
                  {transportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 ? '#0EA5E9' : '#0891B2'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Compare your eco-footprint across different transport methods to make informed, sustainable travel choices.
          </div>
        </div>
        
        <div className="eco-card">
          <h3 className="text-lg font-semibold mb-4">Sustainable Travel Tips</h3>
          <div className="space-y-3 text-sm">
            <div className="pb-2 border-b border-gray-100">
              <span className="font-medium text-eco-700">Choose rail travel</span>
              <p className="text-gray-600 mt-1">Trains produce up to 10x fewer carbon emissions than flying.</p>
            </div>
            <div className="pb-2 border-b border-gray-100">
              <span className="font-medium text-eco-700">Pack light</span>
              <p className="text-gray-600 mt-1">Less weight means less fuel consumed during transport.</p>
            </div>
            <div className="pb-2 border-b border-gray-100">
              <span className="font-medium text-eco-700">Use public transportation</span>
              <p className="text-gray-600 mt-1">Shared transit reduces per-person emissions.</p>
            </div>
            <div className="pb-2 border-b border-gray-100">
              <span className="font-medium text-eco-700">Stay in eco-certified accommodations</span>
              <p className="text-gray-600 mt-1">Look for LEED, Green Key, or Green Globe certifications.</p>
            </div>
            <div>
              <span className="font-medium text-eco-700">Support local businesses</span>
              <p className="text-gray-600 mt-1">Reduces transport emissions and supports local economies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityProgress;
