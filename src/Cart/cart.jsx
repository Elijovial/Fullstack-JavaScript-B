import Products from "../../public/data";
import { useState } from "react";

export function Cart() {
  const [itemsCart, setItemsCart] = useState(Products);
  const [count, setCount] = useState(0);
  function deleteBtn(id) {
    setItemsCart((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function addBtn() {
    setCount(count + 1);
  }
  function reduceBtn() {
    setCount(count - 1);
  }
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-5xl text-black font-bold">Your Cart</h1>
        <p>(3 items)</p>
      </div>
      <div>
        {itemsCart.map((items, index) => (
          <div
            key={items.id}
            className=" flex bg-[#ffff] mt-5 p-3 w-[60%] mx-auto  shadow-lg rounded-sm"
          >
            <img src={items.image} alt="" className="w-30 h-30 " />
            <div className="p-5">
              <div>
                <h1 className="text-black text-bold">{items.name}</h1>
                <p className="text-[#6c8ebd] ">{items.description}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-5 mt-3">
                  <button onClick={(e) => addBtn(items.id)}>+</button>
                  <span>{count}</span>
                  <button onClick={(e) => reduceBtn(items.id)}>-</button>
                </div>
                <button onClick={(e) => deleteBtn(items.id)} type="button">
                  Remove
                </button>
              </div>
            </div>
            <p className="text-xl text-[#3525cd] font-bold">${items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
