
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FootprintCalculator from '../components/FootprintCalculator';
import SustainabilityProgress from '../components/SustainabilityProgress';
import GreenDestinationMap from '../components/GreenDestinationMap';
import CarbonOffsetPrograms from '../components/CarbonOffsetPrograms';
import CustomSustainabilityGoals from '../components/CustomSustainabilityGoals';
import Footer from '../components/Footer';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  
  const handleCalculateFootprint = (value) => {
    setCarbonFootprint(value);
    toast({
      title: "Carbon Footprint Calculated",
      description: `Your travel will generate approximately ${value} kg of CO₂. Consider offsetting your impact!`,
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-800 mb-4">Sustainable Travel Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor and reduce your environmental impact while exploring the world. Calculate your
            carbon footprint, track progress, and discover eco-friendly alternatives.
          </p>
        </section>
        
        <section className="mb-12">
          <FootprintCalculator onCalculate={handleCalculateFootprint} />
        </section>
        
        <section className="mb-12">
          <CustomSustainabilityGoals />
        </section>
        
        <section className="mb-12">
          <SustainabilityProgress />
        </section>
        
        <section className="mb-12">
          <GreenDestinationMap />
        </section>
        
        <section className="mb-12">
          <CarbonOffsetPrograms />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
