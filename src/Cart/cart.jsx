// import products from "../../public/data";
// import Products from "../../public/data";

import { useEffect, useState } from "react";

// export function Cart({ cartItems }) {
// const [itemsCart, setItemsCart] = useState(
//   cartItems.map((item) => ({
//     ...item,
//     quantity: 1,
//   })),
// );
// const [count, setCount] = useState(0);

// function deleteBtn(id) {
//   setItemsCart((prevItems) => prevItems.filter((item) => item.id !== id));
// }
// function addBtn(id) {
//   setItemsCart((prevItems) =>
//     prevItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//     ),
//   );
// }
// function reduceBtn(id) {
//   setItemsCart((prevItems) =>
//     prevItems.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item,
//     ),
//   );
// }
//   const total = itemsCart.reduce((sum, item) => {
//     return sum + item.price * item.quantity;
//   }, 0);
//   // const [total,setTotal]=useState(0)
//   // setTotal(
//   // products.map((item)=>
//   // ))
//   // const total =
//   //   // products.find((items) => items.price) *

//   return (
//     <div>
//       <div className="flex justify-between w-[80%] mx-auto mt-5">
//         <h1 className="text-5xl text-black font-bold">Your Cart</h1>
//         <p>({itemsCart.length} items)</p>
//       </div>
// <div>
//  {itemsCart.map((items, index) => (
//     <div key={items.id}>
//       <div className=" flex bg-[#ffff] mt-5 p-3 w-[60%] mx-auto  shadow-lg rounded-sm">
//         <img src={items.image} alt="" className="w-30 h-30 " />
//         <div className="p-5">
//           <div>
//             <h1 className="text-black text-bold">{items.name}</h1>
//             <p className="text-[#6c8ebd] ">{items.description}</p>
//           </div>
//           <div className="flex justify-between">
//             <div className="flex gap-5 mt-3">
//               <button onClick={(e) => addBtn(items.id)}>+</button>
//               {items.quantity}
//               <button onClick={(e) => reduceBtn(items.id)}>-</button>
//             </div>
//             <button
//               onClick={(e) => deleteBtn(items.id)}
//               type="button"
//               className="text-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//         <p className="text-xl text-[#3525cd] font-bold">
//           {items.price * items.quantity}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>
//       <p> Total: ${total}</p>
//     </div>
//   );
// }
export function Cart({ cartItems }) {
  // console.log(cartItems);
  // const [itemsCart, setItemsCart] = useState(
  //   cartItems.map((item) => ({
  //     ...item,
  //     quantity: 1,
  //   })),
  // );

  const [itemsCart, setItemsCart] = useState([]);

  useEffect(() => {
    setItemsCart(
      cartItems.map((item) => ({
        ...item,
        quantity: 1,
      })),
    );
  }, [cartItems]);
  console.log(cartItems);
  console.log(itemsCart);

  const [count, setCount] = useState(0);

  function addBtn(id) {
    setItemsCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function deleteBtn(id) {
    setItemsCart((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function reduceBtn(id) {
    setItemsCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }
  return (
    <div>
      <div className="flex justify-between w-[80%] mx-auto mt-5">
        <h1 className="text-5xl text-black font-bold">Your Cart</h1>
        {/* //         <p>({itemsCart.length} items)</p> */}
      </div>
      {/* {cartItems.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
      <div>
        {itemsCart.map((item) => (
          <div key={item.id}>
            <div className=" flex bg-[#ffff] mt-5 p-3 w-[60%] mx-auto  shadow-lg rounded-sm">
              <img src={item.image} alt="" className="w-30 h-30 " />
              <div className="p-5">
                <div>
                  <h1 className="text-black text-bold">{item.name}</h1>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-5 mt-3">
                    <button onClick={(e) => addBtn(item.id)}>+</button>
                    {item.quantity}
                    <button onClick={(e) => reduceBtn(item.id)}>-</button>
                  </div>
                  <button
                    onClick={(e) => deleteBtn(item.id)}
                    type="button"
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
              {/* <p className="text-xl text-[#3525cd] font-bold">
                {items.price * items.quantity}
              </p>bnbjbj */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
