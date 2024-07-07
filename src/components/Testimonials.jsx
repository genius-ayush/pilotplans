import React from 'react';

function Testimonials() {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-50">
      <h2 className="text-4xl font-serif italic text-gray-800 mb-4 text-center">Hear from our community</h2>

      <div className="flex flex-col lg:flex-row justify-around w-3/4 px-8 ">
        {/* Testimonial 1 */}
        <div className=" p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2 text-center">
          <div className="text-orange-500 mb-2">
            {'★'.repeat(5)}
          </div>
          <p className="text-gray-600 mb-4">
            Pilot has been a great place to put docs, notes, lists, and plans for trips. The best part is that it's collaborative! I've been able to map out a trip with a friend and it's been the easiest planning I've done in awhile.
          </p>
          <p className="font-semibold text-gray-700">Audrey N.</p>
        </div>

        {/* Testimonial 2 */}
        <div className=" p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2 text-center">
          <div className="text-orange-500 mb-2">
            {'★'.repeat(5)}
          </div>
          <p className="text-gray-600 mb-4">
            It keeps everything in the one place, and the map feature is super handy for seeing where everything is in a city. Also really useful for trip planning with friends - love the integrated chat feature and the voting feature for activities/attractions!
          </p>
          <p className="font-semibold text-gray-700">Michaela Egan</p>
        </div>

        {/* Testimonial 3 */}
        <div className=" p-6 rounded-md shadow-md mb-8 lg:mb-0 w-full lg:w-1/3 mx-2 text-center">
          <div className="text-orange-500 mb-2">
            {'★'.repeat(5)}
          </div>
          <p className="text-gray-600 mb-4">
            It’s intuitive and it is so nice to be able to share details and ideas with my travel companion. This consolidates the information into easily accessible information for the whole group.
          </p>
          <p className="font-semibold text-gray-700">Alison Orton</p>
        </div>
      </div>

      <button className="bg-white text-orange-500 border border-orange-500 px-6 py-2 rounded-md mt-8 hover:bg-orange-100 transition">
        See all reviews
      </button>
    </div>
  );
}

export default Testimonials;
