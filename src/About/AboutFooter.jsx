import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa"
import worldMap from "../assets/world-map.png"

function AboutFooter() {
  const quickLinks = ["Home", "Shop", "About Us", "Contact", "FAQs"]

  const customerSupport = [
    "Track Order",
    "Shipping Policy",
    "Returns & Refunds",
    "Privacy Policy",
    "Terms & Conditions",
  ]

  const latestProducts = [
    {
      name: "Luxury Wrist Watch",
      price: "$120",
      image:
        "https://i.pinimg.com/736x/a7/ba/24/a7ba24044e60ced4a0cc4956417a7312.jpg",
    },
    {
      name: "Wireless Headphones",
      price: "$89",
      image:
        "https://i.pinimg.com/736x/d2/88/3a/d2883a539f3c644ca97286ec7fe41c20.jpg",
    },
    {
      name: "Leather Backpack",
      price: "$75",
      image:
        "https://i.pinimg.com/736x/98/b9/04/98b90463a6d59f2e8b67408cce57fc69.jpg",
    },
  ]

  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#111111",
        backgroundImage: `url(${worldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-3xl font-bold">
                J-<span className="text-blue-900">Lux</span>
              </h2>

              <p className="text-gray-300 mt-5 leading-7">
                Discover premium products at unbeatable prices. Shop with
                confidence and enjoy fast delivery, secure payments, and
                excellent customer support.
              </p>

              <div className="flex mt-8">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 px-4 py-3 outline-none rounded-l-md"
                />

                <button className="bg-[#D4AF37] px-5 rounded-r-md hover:bg-blue-700 transition">
                  <FaPaperPlane />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-[#D4AF37]  hover:text-[#0047FF] transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Customer Support</h3>

              <ul className="space-y-3">
                {customerSupport.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-[#D4AF37]  hover:text-[#0047FF] transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Latest Products</h3>

              <div className="space-y-5">
                {latestProducts.map((product, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded object-cover"
                    />

                    <div>
                      <h4 className="text-sm hover:text-[#0047FF] transition cursor-pointer">
                        {product.name}
                      </h4>

                      <p className="text-[#D4AF37] font-semibold mt-1">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} J-Lux. All Rights Reserved.
            </p>

            <div className="flex gap-4 text-2xl">
              <FaFacebookF className="hover:text-[#0047FF] cursor-pointer transition" />
              <FaInstagram className="hover:text-[#0047FF] cursor-pointer transition" />
              <FaTwitter className="hover:text-[#0047FF] cursor-pointer transition" />
              <FaLinkedinIn className="hover:text-[#0047FF] cursor-pointer transition" />
            </div>

            <div className="flex gap-4 text-3xl text-[#D4AF37]">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AboutFooter
