import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold text-lg mb-4">Pilot</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Log In</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Sign Up</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Reviews</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Roadmap</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Press Kit</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Advertise with Us</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold text-lg mb-4">FlightDeck Guides</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Asia</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Europe</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Oceania</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">North America</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">South America</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Central America & Caribbean</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold text-lg mb-4">Experiences</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Travel Styles</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Food & Culture</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Adventure & Active Travel</a></li>
            </ul>
            <h3 className="font-bold text-lg mb-4 mt-8">Guides</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Tips & Advice</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Air Travel</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Communities</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <img src="../public/PilotLogoOrange.svg" alt="Pilot Logo" className="mb-4 w-24" />
          <div className="text-center text-gray-600 mb-4">
            <p>Privacy Policy | Terms & Conditions © 2021–2024, Pilot</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
    
export default Footer;
