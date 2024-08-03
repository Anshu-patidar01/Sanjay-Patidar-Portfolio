import "./App.css";
import About from "./components/About-me/About";
import Contact from "./components/Contact-me/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home-page/Home";
import Skills from "./components/key-skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile-summery/Profile";
import Experience from "./components/Work-experience/Experience";
function App() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Navbar />
        <Home />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
