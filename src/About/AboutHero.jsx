import hero from "../assets/hero.png";
import { GiClothes, GiRunningShoe } from "react-icons/gi";
import { PiHandbagFill } from "react-icons/pi";
import { FaCrown } from "react-icons/fa";
export default function AboutHero() {
  return (
    <div className="w-full flex justify-around items-center py-5 px-16">
      <div className="w-1/2 ">
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
        <div className="flex justify-evenly items-center mb-8">
          <GiClothes className="w-12 h-12 text-[#C9A227]" />
          <GiRunningShoe className="w-12 h-12 text-[#05214C]" />
          <PiHandbagFill className="w-12 h-12 text-[#7D6C4A]" />
          <FaCrown className="w-12 h-12 text-[#21165A]" />
        </div>
        <button className="px-6 py-2.5 bg-[#31548C] text-[#FFFFFF] font-bold rounded-full hover:bg-[#313233] hover:text-[#111213]">
          Shop Now
        </button>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
