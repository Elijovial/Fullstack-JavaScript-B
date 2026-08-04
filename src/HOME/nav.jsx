function Nav() {
  return (
    <div className="sticky top-0 z-1 w-full bg-white shadow-md shadow-gray-400 flex justify-between items-center">
      <div className="my-1 flex flex-col items-center px-3 sm:px-10">
        <img
          src="src\assets\java-luxury.png"
          alt="logo"
          className="size-10 h-auto"
        />
        <h1 className="tracking-tighter font-bold text-md sm:text-lg text-blue-900">
          JAVA<span className="text-[#D4AF37] text-xl sm:text-2xl">LUXURY</span>
        </h1>
      </div>
      <div className=" px-3 sm:px-10 ">
        <button className="bg-blue-900 text-white hover:cursor-pointer text-sm sm:text-md px-1.5 py-1  sm:p-2 rounded font-medium active:bg-blue-500">
          Order Online
        </button>
      </div>
    </div>
  );
}

export default Nav;
