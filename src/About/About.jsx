<<<<<<< HEAD
import AboutWhyUs from "./AboutWhyUs";
import AboutHero from "./AboutHero";
import AboutHero1 from "./AboutHero1";
import AboutFooter from "./AboutFooter";
import AboutClient from "./AboutClient";
=======
import AboutHero1 from "./AboutHero1"
import AboutWhyUs from "./AboutWhyUs"
import AboutHero from "./AboutHero"
import AboutClient from "./AboutClient"
import AboutFooter from "./AboutFooter"
>>>>>>> d99b16c696e4f573802c8e6c38ba733a9cdaa040

export default function About({ darkMode }) {
  return (
    <div>
      <AboutHero1 />
      <AboutHero />
<<<<<<< HEAD
      <AboutWhyUs darkMode={darkMode} />
=======
      <AboutWhyUs />
>>>>>>> d99b16c696e4f573802c8e6c38ba733a9cdaa040
      <AboutClient />
      <AboutFooter />
    </div>
  )
}
