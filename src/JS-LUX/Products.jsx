// import productList from "./productList";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
const productList = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/95/13/8e/95138e0951241d6b9573fbfea0fb5bfd.jpg",
    name: "Dolce & Gabbana The One",
    category: "Perfume",
    price: "$24.99",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/2c/24/3f/2c243ffe4b673921d60552f8fbee6948.jpg",
    name: "Alaia Heels",
    category: "Shoes",
    price: "$23.99",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/8c/d1/67/8cd16726be73737b03209241cd7c9444.jpg",
    name: "Prada milano",
    category: "Perfume",
    price: "$59.99",
  },
  {
    id: 4,
    image:
      "https://images.wrangler.com/is/image/Wrangler/112361456-HERO?$PDP24-XXLARGE$&fit=crop",

    name: "Cow Print Canvas Sling Bag",
    category: "Bags",
    price: "$23.99",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/23/39/1c/23391c9648da634a4729085939bba0e7.jpg",
    name: "Chanel No. 5",
    category: "Perfume",
    price: "$35.99",
  },

  {
    id: 6,
    image:
      "https://i.pinimg.com/1200x/a7/ae/0e/a7ae0ecd89dbd66d7ec5334d2bd5381e.jpg",
    name: "Alaia Heels (Black)",
    category: "Shoes",
    price: "$69.99",
  },
  {
    id: 7,
    image:
      "https://rukminim2.flixcart.com/image/1280/1280/xif0q/sling-bag/l/d/w/sling-bag01-1-33-876220-sling-bag-nycra-25-original-imahz3gjzndhmauk.jpeg?q=90",
    name: "NYCRA Flowered Blue Sling Bag",
    category: "Bags",
    price: "$15.99",
  },

  {
    id: 8,
    image:
      "https://i.pinimg.com/1200x/66/6e/3d/666e3dd0e4002dd65d6f95afb98a355d.jpg",
    name: "Bluey",
    category: "Shoes",
    price: "$114.99",
  },

  {
    id: 9,
    image:
      "https://rukminim1.flixcart.com/image/1280/1280/xif0q/sling-bag/d/q/6/chic-pu-leather-cross-body-bag-stylish-and-durable-1-12-0-original-imahkhnmw2ujupyt.jpeg?q=90",
    name: "White Tote Chic PU Leather Cross body bag",
    category: "Bags",
    price: "$19.99",
  },
];
const select = ["All", "Bags", "Shoes", "Perfume"];

function Product({ darkMode }) {
  const [sortOption, setSortOption] = useState(select[0]);
  const sortedProduct =
    sortOption === select[0]
      ? [...productList]
      : [...productList].filter((item) => item.category === sortOption);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#fff8e7] text-black"
      } p-8`}
    >
      <h1
        className={`font-bold text-[#05214C] text-4xl text-center mb-4${
          darkMode ? "bg-gray-900 text-white" : "bg-[#fff8e7] text-black"
        } p-8`}
      >
        Featured Collection
      </h1>
      <p className="text-sm text-center mb-3">
        Discover the latest trends at unbeatable prices
      </p>

      <hr className="w-30 bg-[#05214C] h-0.5 rounded-full mx-auto mb-9"></hr>
      <div className="flex justify-end">
        <select
          className="w-50 p-2 rounded-lg mb-4 bg-[#05214C] text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {select.map((item, index) => (
            <option key={index} className="bg-white text-[#05214C]">
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5   ">
        {sortedProduct.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 shadow-md rounded-2xl p-2 items-center bg-gray-50"
          >
            <div>
              {" "}
              <img
                src={item.image}
                alt={item.name}
                className="h-45 w-45 rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold mb-3 text-lg text-[#05214C]">
                {item.name}{" "}
              </p>
              <p className="text-[#05214C] mb-3">{item.price}</p>
              <button className="bg-[#05214C] text-white px-4 py-2 flex justify-center gap-2 rounded-xl hover:bg-gray-600 cursor-pointer items-center">
                <ShoppingCart size={16} /> Add to Cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
