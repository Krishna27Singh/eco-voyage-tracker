
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 py-6 border-t">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eco-Voyage Insights. All data is for demonstration purposes only.
      </div>
    </footer>
  );
};

export default Footer;
