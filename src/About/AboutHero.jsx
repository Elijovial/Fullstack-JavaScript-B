import hero from "../assets/hero.png";
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
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
