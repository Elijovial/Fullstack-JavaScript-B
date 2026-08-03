import { bags } from "../data";
import { Button } from "./button";

export function Bags() {
  return (
    <>
      {bags.map((item) => (
        <div key={item.id}>
          <div className="inline-block border-0 rounded shadow-black bg-white m-6 p-3">
            <div className="flex justify-center gap-6">
              {" "}
              <img
                className="w-40 h-40 rounded "
                src={item.image}
                alt="photo"
              />
              <div>
                <p className="mb-6">{item.name}</p>
                <p className="text-amber-700 mb-6">{item.price}</p>
                <Button />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
