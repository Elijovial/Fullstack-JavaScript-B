const shoeData = [
  {
    id: 1,
    name: "Alaia Heels",
    color: "Brown",
    price: "$43",
    image:
      "https://i.pinimg.com/736x/2c/24/3f/2c243ffe4b673921d60552f8fbee6948.jpg",
    button: "🛒Add to cart",
  },
  {
    id: 2,
    name: "Alaia Heels",
    color: "Black",
    price: "$68",
    image:
      "https://i.pinimg.com/1200x/a7/ae/0e/a7ae0ecd89dbd66d7ec5334d2bd5381e.jpg",
    button: "🛒Add to cart",
  },
  {
    id: 3,
    name: "Alaia Heels",
    color: "White",
    price: "$25",
    image:
      "https://i.pinimg.com/1200x/f6/82/42/f68242096c3433a4e1f6b68617b5369d.jpg",
    button: "🛒Add to cart",
  },
];

const Shoe = () => {
  return (
    <div className=" grid grid-cols-3  items-center gap-4 md:gap-2 w-full">
      {shoeData.map((shoe) => (
        <div key={shoe.id}>
          <div className=" flex items-center gap-2 shadow-lg ">
            <div>
              <img className=" w-40 h-auto" src={shoe.image} />
            </div>
            <div className="flex flex-col  h-auto w-40 gap-2">
              <h2 className=" text-xl text-red-800 font-bold">{shoe.name}</h2>
              <p className=" text-xl text-gray-600">{shoe.color}</p>
              <p className="text-lg font-bold">{shoe.price}</p>
              <button className="bg-black text-white rounded-3xl  p-1 text-[12px]">
                {shoe.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoe;
