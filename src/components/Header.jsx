import { VscMenu } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Header() {
  let [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className=" w-full h-24 fixed top-0 left-0 flex items-center justify-center bg-white z-50">
      <div className="absolute left-3 md:hidden">
        <VscMenu color="#ED702E" size={28} onClick={handleClick} />
      </div>

      <div href="#" id="brand" className="flex md:absolute left-20">
        <img src="PilotLogoOrange.svg" alt="" className="w-24" />
      </div>

      <div className="gap-5 flex absolute left-60">
        <div className="hidden md:flex font-medium text-xl font-sans">
          <a href="#">How it works</a>
        </div>

        <div className="hidden md:flex font-medium text-xl font-sans">
          <a href="#">Reviews</a>
        </div>
      </div>

      <div className="hidden md:flex gap-3 absolute right-3">
        <div className="">
          <button className="px-10 py-2 rounded border-[#ED702E] border-2 bg-white text-[#ED702E] text-lg">
            Login
          </button>
        </div>

        <div>
          <button className="px-4 py-3 rounded bg-[#ED702E] text-white mr-20">
            Get the app
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center item-center p-3">

          <div className="md:hidden absolute left-3">
            <RxCross2 color="#ED702E" size={28} onClick={handleClick} />
          </div>
          <div id="brand" className="flex">
            <img
              src="./src/assets/PilotLogoOrange.svg"
              alt=""
              className="w-24"
            />
          </div>

        </div>

        <div className="flex flex-col items-center space-y-4 mt-8">
          <a href="#" className="font-medium font-sans  text-2xl ">How it works</a>
          <a href="#" className="font-medium font-sans  text-2xl">Reviews</a>
          <button className="px-4 py-2 rounded border-[#ED702E] border-2 bg-white text-[#ED702E] ">
            Login
          </button>
          <button className="px-4 py-2 rounded bg-[#ED702E] text-white">
            Get the app
          </button>

          <div className="font-medium font-sans  text-2xl">Follow us!</div>

          <div className="flex gap-5">
          <RiFacebookBoxFill size={25}/>
          <FaTwitter size={25}/>
          <FaInstagram size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
