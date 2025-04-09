
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenDestinations = [
  { 
    id: 1, 
    name: 'Costa Rica', 
    position: [9.7489, -83.7534], 
    rating: 'High',
    description: 'Leading in conservation with 25% of land as national parks.'
  },
  { 
    id: 2, 
    name: 'Norway', 
    position: [60.4720, 8.4689], 
    rating: 'High',
    description: 'Pioneer in electric vehicle adoption and renewable energy.'
  },
  { 
    id: 3, 
    name: 'Bhutan', 
    position: [27.5142, 90.4336], 
    rating: 'High',
    description: 'World\'s only carbon-negative country with 70% forest cover.'
  },
  { 
    id: 4, 
    name: 'New Zealand', 
    position: [-40.9006, 174.8860], 
    rating: 'Medium',
    description: 'Committed to 100% renewable electricity by 2035.'
  },
  { 
    id: 5, 
    name: 'Iceland', 
    position: [64.9631, -19.0208], 
    rating: 'High',
    description: '100% of electricity from renewable geothermal and hydropower.'
  },
  { 
    id: 6, 
    name: 'Slovenia', 
    position: [46.1512, 14.9955], 
    rating: 'Medium',
    description: 'First country declared a green destination with 60% forest cover.'
  },
  { 
    id: 7, 
    name: 'Palau', 
    position: [7.5150, 134.5825], 
    rating: 'Medium',
    description: 'Created world\'s first shark sanctuary and banned toxic sunscreens.'
  },
  { 
    id: 8, 
    name: 'Finland', 
    position: [61.9241, 25.7482], 
    rating: 'Medium',
    description: 'Aims to be carbon neutral by 2035 with extensive forest coverage.'
  },
  { 
    id: 9, 
    name: 'Ecuador', 
    position: [-1.8312, -78.1834], 
    rating: 'Medium',
    description: 'Constitution recognizes rights of nature, preserving biodiversity.'
  },
  { 
    id: 10, 
    name: 'Sweden', 
    position: [60.1282, 18.6435], 
    rating: 'Medium',
    description: 'Pioneering waste management with less than 1% going to landfills.'
  },
  { 
    id: 11, 
    name: 'Nepal', 
    position: [28.3949, 84.1240], 
    rating: 'Trending',
    description: 'Sustainable trekking practices and community-based ecotourism.'
  }
];

const GreenDestinationMap = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Green Destination Map</h2>
      
      <div className="eco-card">
        <h3 className="text-lg font-semibold mb-4">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Real-Time Green Destination Popularity
          </span>
        </h3>
        
        <div className="mb-4">
          <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {greenDestinations.map(destination => (
              <Marker 
                key={destination.id} 
                position={destination.position}
                icon={customIcon}
              >
                <Popup>
                  <div className="font-medium">{destination.name}</div>
                  <div className="text-sm text-gray-600">{destination.description}</div>
                  <div className="mt-1 text-xs">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      destination.rating === 'High' ? 'bg-green-100 text-green-800' :
                      destination.rating === 'Medium' ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {destination.rating} Sustainability
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
        <div>
          <div className="text-sm text-gray-600 text-center mb-2">
            Visualizing real-time eco-friendly destination popularity
            <div className="text-xs text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Travel Insight:</h3>
                <div className="mt-1 text-sm text-amber-700">
                  Green destinations are gaining popularity with a 28% increase in eco-tourism bookings since last year. Click on destinations to learn more about their sustainability initiatives.
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-300 rounded-full mr-1.5"></span>
              <span className="text-xs text-gray-600">Low Score</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></span>
              <span className="text-xs text-gray-600">Medium</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-700 rounded-full mr-1.5"></span>
              <span className="text-xs text-gray-600">High</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-amber-500 rounded-full mr-1.5"></span>
              <span className="text-xs text-gray-600">Trending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenDestinationMap;
