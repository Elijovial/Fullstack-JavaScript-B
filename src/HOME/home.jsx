import { FaShoppingCart } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-[url('./bg-image.png')] min-h-screen  bg-cover bg-center w-full  lg:flex md:justify-between md:items-center mx-auto">
      <div className="text-center  lg:ml-35">
        <h1 className="tracking-tighter text-5xl md:text-7xl font-bold text-blue-900 pt-10 lg:pt-1 mb-3">
          Style That Inspires
        </h1>
        <p className="tracking-tighter text-xl md:text-2xl font-bold mb-4">
          Discover the latest trends and exclusive deals.
        </p>
        <div className="flex justify-center mt-5 lg:mt-10 mb-2 md:mb-5">
          <button className="flex gap-2 bg-[#D4AF37] text-white font-bold text-xl py-2 px-5 md:px-10 rounded-2xl hover:cursor-pointer active:bg-amber-200 shadow-md shadow-gray-400">
            Shop Now
            <FaShoppingCart size={24} color="white" />
          </button>
        </div>
      </div>
      <div className="lg:mr-30 flex justify-center">
        <img
          src="src\assets\ddd.png"
          alt="image"
          className="w-90 h-full md:w-100 md:h-auto "
        />
      </div>
    </div>
  );
}

export default Home;
