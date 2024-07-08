
function Shop() {
  return (
    <div className="flex items-center justify-center min-h-5/6">
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg ">
            <div className="relative md:w-1/2">
                <img src="../public/Shop/img1.webp" alt="Shop" className="rounded-lg  lg:w-3/4 w-96"/>
            </div>

            <div className="md:ml-8 mt-8 md:mt-0 text-center  md:text-left">
                <h2 className="text-5xl font-semibold text-gray-800">Shop travel gear and accessories</h2>
                <p className="mt-4 font-semibold text-gray-600 ">Our expert researchers have done the leg work already, so you can spend more time thinking about that beach</p>
                <div className="mt-5 mb-5">
                    <button className="px-10 py-2 rounded border-[#ED702E] border-2 bg-white text-[#ED702E] text-lg">Shop Now</button>
                </div>
                <div className="text-lg">
                    <p>Packing Cubes <span className="text-orange-500 pr-5">✓</span>Shoulder Bags <span className="text-orange-500 pr-5">✓</span>Organizers <span className="text-orange-500 pr-5">✓</span> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop