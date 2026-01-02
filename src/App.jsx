import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Differential from "./components/Differential";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <Problem />
        <Solutions />
        <HowItWorks />
        <Differential />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
