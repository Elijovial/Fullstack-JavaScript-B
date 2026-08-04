import AboutWhyUs from "./AboutWhyUs";
import AboutHero from "./AboutHero";
import AboutHero1 from "./AboutHero1";

export default function About({ darkMode }) {
  return (
    <div>
      <AboutHero1 />
      <AboutHero />
      <AboutWhyUs darkMode={darkMode} />
    </div>
  );
}
