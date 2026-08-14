import hero from "../assets/hero.png";
import { GiClothes, GiRunningShoe } from "react-icons/gi";
import { PiHandbagFill } from "react-icons/pi";
import { FaCrown } from "react-icons/fa";
export default function AboutHero() {
  return (
<<<<<<< HEAD
    <div className="w-full flex justify-around items-center py-5 px-16 mb-10">
      <div className="w-1/2 ">
=======
    <div className="w-full flex flex-col-reverse lg:flex-row justify-around items-center py-5 px-16">
      <div className="w-fill lg:w-1/2 ">
>>>>>>> d99b16c696e4f573802c8e6c38ba733a9cdaa040
        <h2 className="text-2xl font-bold mb-3 text-[#3C4758]">WHO WE ARE</h2>
        <p className="leading-7 mb-5">
          Java Luxury is a premium fashion brand dedicated to redefining modern
          elegance. We combine exceptional craftsmanship, quality fabrics, and
          contemporary designs to create clothing that inspires confidence and
          celebrates individuality.
        </p>
        <p className="mb-6">
          Because true luxury isn't just about what you wear—it's about how you
          feel.
        </p>
        <div className="flex justify-evenly lg:justify-evenly items-center mb-8">
          <GiClothes className="w-8 h-8 lg:w-12 lg:h-12 text-[#C9A227]" />
          <GiRunningShoe className="w-8 h-8 lg:w-12 lg:h-12 text-[#05214C]" />
          <PiHandbagFill className="w-8 h-8 lg:w-12 lg:h-12 text-[#7D6C4A]" />
          <FaCrown className="w-8 h-8 lg:w-12 lg:h-12 text-[#21165A]" />
        </div>
        <button className="px-4 py-1 lg:px-6 lg:py-2.5 bg-[#31548C] text-[#FFFFFF] font-bold rounded-full hover:bg-[#313233] hover:text-[#111213]">
          Shop Now
        </button>
      </div>
      <div>
        <img src={hero} alt="" className="w-full h-80" />
      </div>
    </div>
  );
}
