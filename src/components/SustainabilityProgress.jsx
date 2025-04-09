
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList, Cell } from 'recharts';

const progressData = [
  { month: 'Jan', emissions: 350, target: 300 },
  { month: 'Feb', emissions: 250, target: 280 },
  { month: 'Mar', emissions: 180, target: 260 },
  { month: 'Apr', emissions: 420, target: 240 },
  { month: 'May', emissions: 320, target: 220 },
  { month: 'Jun', emissions: 290, target: 200 },
  { month: 'Jul', emissions: 190, target: 180 },
];

const transportData = [
  { name: 'Flight', emissions: 260 },
  { name: 'Train', emissions: 170 },
  { name: 'Ferry', emissions: 120 },
  { name: 'Bus', emissions: 70 },
  { name: 'Car', emissions: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-blue-600">Amount : {payload[0].value} kg CO₂</p>
        <p className="text-sm text-green-600">Amount : {payload[1].value} kg CO₂</p>
      </div>
    );
  }
  return null;
};

const SustainabilityProgress = () => {
  const progress = 30; // Percentage progress
  const goalValue = 500; // kg
  const achievedValue = 150; // kg

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Sustainability Progress</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="eco-card">
          <h3 className="text-lg font-semibold mb-4">Sustainability Goal Progress</h3>
          
          <div className="flex justify-center mb-6">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E6E6E6"
                  strokeWidth="2"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray={`${progress}, 100`}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-3xl font-bold">{progress}.0%</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <div className="text-sm text-muted-foreground">
              {achievedValue} kg of {goalValue} kg goal
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1.5"></div>
              <span className="text-xs">Achieved</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-200 mr-1.5"></div>
              <span className="text-xs">Remaining</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-amber-600 font-medium text-sm">
            🔥 Making progress! Stay committed!
          </div>
        </div>
        
        <div className="eco-card">
          <h3 className="text-lg font-semibold mb-4">Your Emission Trend</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressData}>
                <defs>
                  <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="emissions" 
                  stroke="#10B981" 
                  fillOpacity={1} 
                  fill="url(#colorEmissions)" 
                  name="emissions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="eco-card">
          <h3 className="text-lg font-semibold mb-4">Transport Comparison</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transportData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="emissions" name="emissions" fill="#0EA5E9">
                  {transportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 ? '#0EA5E9' : '#0891B2'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityProgress;
