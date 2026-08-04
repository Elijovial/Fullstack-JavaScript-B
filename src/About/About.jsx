import AboutWhyUs from "./AboutWhyUs";
import AboutHero from "./AboutHero";

export default function About({ darkMode }) {
  return (
    <div>
      <AboutHero />
      <AboutWhyUs darkMode={darkMode} />
    </div>
  );
}
