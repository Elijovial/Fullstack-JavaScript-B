import AboutWhyUs from "./AboutWhyUs";
import AboutHero from "./AboutHero";
import AboutHero1 from "./AboutHero1";
import AboutFooter from "./AboutFooter";
import AboutClient from "./AboutClient";

export default function About({ darkMode }) {
  return (
    <div>
      <AboutHero1 />
      <AboutHero />
      <AboutWhyUs darkMode={darkMode} />
      <AboutClient />
      <AboutFooter />
    </div>
  )
}
