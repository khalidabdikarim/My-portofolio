import About from "./components/About";
import Bot from "./components/Bot";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Education from "./components/Education";

function app() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <Education/>
      <About />
      <Skills />
      <Hireme />

      <Project />
      <ContactMe />
      <Footer />
      <SocialLinks />
    </div>
  );
}
export default app;
