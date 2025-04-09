
import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b py-3 px-4 md:px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-eco-500" />
          <h1 className="text-xl font-bold text-eco-700">Eco-Voyage Insights</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium text-eco-700">Dashboard</a>
          <a href="#" className="font-medium text-muted-foreground hover:text-eco-500">Resources</a>
          <a href="#" className="font-medium text-muted-foreground hover:text-eco-500">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
