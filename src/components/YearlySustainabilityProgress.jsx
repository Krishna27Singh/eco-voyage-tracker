
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const yearlyData = [
  { month: 'Jan', actual: 350, target: 350 },
  { month: 'Feb', actual: 340, target: 330 },
  { month: 'Mar', actual: 320, target: 310 },
  { month: 'Apr', actual: 290, target: 290 },
  { month: 'May', actual: 250, target: 270 },
  { month: 'Jun', actual: 220, target: 250 },
  { month: 'Jul', actual: 190, target: 230 },
];

const goalData = [
  { name: 'Carbon Reduction', value: 43, goal: 30 },
  { name: 'Eco Accommodations', value: 65, goal: 100 },
  { name: 'Sustainable Transport', value: 40, goal: 100 },
];

const YearlySustainabilityProgress = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="eco-card">
        <h3 className="text-lg font-semibold mb-4">Yearly Sustainability Progress</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={yearlyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="actual" 
                stroke="#0EA5E9" 
                fillOpacity={1} 
                fill="url(#colorActual)" 
                name="Amount"
              />
              <Area 
                type="monotone" 
                dataKey="target" 
                stroke="#10B981" 
                fillOpacity={1} 
                fill="url(#colorTarget)" 
                name="Amount"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="eco-card">
        <h3 className="text-lg font-semibold mb-4">Sustainability Goals</h3>
        <div className="space-y-6">
          {goalData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-gray-500">{item.value}% of {item.goal}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-eco-500 h-2.5 rounded-full" 
                  style={{ width: `${(item.value / item.goal) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">How we calculate your impact</h4>
              <p className="text-sm text-gray-600">
                Your sustainability score is based on your travel choices, carbon offsets, and support for eco-friendly initiatives. 
                Higher percentages indicate greater progress toward sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlySustainabilityProgress;
