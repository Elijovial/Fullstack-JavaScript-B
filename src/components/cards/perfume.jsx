import { roles, products } from "./perfumeproduct"


export default function Perfume() {
    return (
<div className="grid  grid-cols-3 gap-2 p-2 ">
    {products.map((item, index) => (
        <div
        key={item.id}  className="flex p-2 bg-white gap-2 rounded-lg border border-gray-900 shadow-lg w-full ">
            <img className="h-auto w-40 rounded-lg" src={item.image} alt={item.name}/>
            <div className="flex flex-col p-3 gap-4 mt-4 "><h2 className="font font-serif font-bold text-xl text-red-800 mt-4 ">{item.name}</h2>
            <h3 className="mt-4 text-lg font-bold ">${item.price}</h3>
            <button className="border border-white bg-black text-white text-12px font-bold rounded-2xl p-1 mt-4 w-38">{item.button}</button>
           </div>

        </div>
    ))}
</div>
    )
    
} 