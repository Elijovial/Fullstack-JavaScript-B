import heroimage from "../assets/Hero-image1.png";

function AboutHero1() {
  const heroImage = heroimage;

  return (
    <section className="relative bg-blue-900">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10"></div>

      <div className="absolute left-20 top-10 h-44 w-44 rounded-full border border-white/10"></div>

      <div className="relative mx-auto flex min-h-70 max-w-7xl flex-col items-center justify-center lg:justify-between gap-10 px-6 py-1 md:flex-row md:px-12 lg:px-20">
        {/* Left content */}
        <div className="text-center text-white md:text-left">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Us
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm md:justify-start">
            <a
              href="/"
              className="font-medium text-green-400 hover:text-green-300"
            >
              Home
            </a>

            <span className="text-white/60">/</span>

            <span className="text-white/80">About Us</span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-md hidden md:block">
          {heroImage ? (
            <img
              src={heroImage}
              alt="About us"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/40 bg-white/10 px-5 text-center text-white/70">
              <div>
                <p className="text-lg font-semibold">
                </p>

                <p className="mt-2 text-sm">

                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutHero1;