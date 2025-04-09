
import React, { useState } from 'react';

const transportOptions = [
  { value: 'flight', label: 'Flight', factor: 0.12 },
  { value: 'car', label: 'Car', factor: 0.17 },
  { value: 'train', label: 'Train', factor: 0.05 },
  { value: 'bus', label: 'Bus', factor: 0.07 },
  { value: 'ferry', label: 'Ferry', factor: 0.11 },
  { value: 'bicycle', label: 'Bicycle/Walking', factor: 0 }
];

const accommodationOptions = [
  { value: 'hotel', label: 'Standard Hotel', factor: 15 },
  { value: 'eco-hotel', label: 'Eco-certified Hotel', factor: 7 },
  { value: 'hostel', label: 'Hostel', factor: 5 },
  { value: 'camping', label: 'Camping', factor: 2 },
  { value: 'homestay', label: 'Local Homestay', factor: 4 }
];

const FootprintCalculator = ({ onCalculate }) => {
  const [transport, setTransport] = useState('');
  const [distance, setDistance] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    if (!transport || !distance || !accommodation || !days) {
      alert('Please fill in all fields');
      return;
    }

    const transportOption = transportOptions.find(option => option.value === transport);
    const accommodationOption = accommodationOptions.find(option => option.value === accommodation);
    
    const transportEmission = transportOption.factor * parseFloat(distance);
    const accommodationEmission = accommodationOption.factor * parseFloat(days);
    const totalEmission = Math.round(transportEmission + accommodationEmission);
    
    setResult({
      transport: transportEmission,
      accommodation: accommodationEmission,
      total: totalEmission
    });
    
    if (onCalculate) {
      onCalculate(totalEmission);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="eco-card">
        <h2 className="text-xl font-bold mb-6">Enter Your Travel Details</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="transport">
              Mode of Transport
            </label>
            <select 
              id="transport" 
              className="eco-select"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
            >
              <option value="">Select transport mode</option>
              {transportOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="distance">
              Distance (km)
            </label>
            <input 
              id="distance" 
              type="number" 
              className="eco-input" 
              placeholder="Enter distance in kilometers"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="accommodation">
              Accommodation Type
            </label>
            <select 
              id="accommodation" 
              className="eco-select"
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
            >
              <option value="">Select accommodation type</option>
              {accommodationOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="days">
              Number of Days
            </label>
            <input 
              id="days" 
              type="number" 
              className="eco-input" 
              placeholder="Enter number of days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
          
          <button 
            className="eco-button w-full mt-4"
            onClick={calculateFootprint}
          >
            Calculate Footprint
          </button>
        </div>
      </div>
      
      <div className="eco-card">
        <h2 className="text-xl font-bold mb-6">Carbon Footprint</h2>
        
        {result ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-eco-700 mb-2">
                {result.total} kg
              </div>
              <p className="text-muted-foreground">CO₂ equivalent</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Transportation</span>
                  <span className="text-sm font-bold">{Math.round(result.transport)} kg CO₂</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div 
                    className="bg-eco-500 h-2 rounded-full" 
                    style={{ width: `${(result.transport / result.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Accommodation</span>
                  <span className="text-sm font-bold">{Math.round(result.accommodation)} kg CO₂</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div 
                    className="bg-eco-500 h-2 rounded-full" 
                    style={{ width: `${(result.accommodation / result.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
              <h3 className="font-medium text-amber-800 mb-1">Environmental Impact</h3>
              <p className="text-sm text-amber-700">
                This is equivalent to driving an average car for {Math.round(result.total / 0.17)} kilometers
                or the carbon absorbed by {Math.round(result.total / 22)} trees in one year.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <p className="text-muted-foreground mb-4">
              Submit travel details to see your carbon footprint
            </p>
            <img 
              src="public/lovable-uploads/e16f24be-1bd3-447e-a302-28121da9ba53.png" 
              alt="Carbon Footprint" 
              className="w-20 h-20 opacity-40"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FootprintCalculator;
