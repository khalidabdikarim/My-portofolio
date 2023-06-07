import About from "./components/About";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Test from "./components/Test";


function app() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <Test/>
      <About />
      <Skills />
      <Hireme />
     
      
      <Project/>
      <ContactMe/>
      <Footer/>
      <SocialLinks />
      
    </div>
  );
}
export default app;
