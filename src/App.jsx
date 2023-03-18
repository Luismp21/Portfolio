import { useState, useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { GoToTopBtn } from "./components/GoToTopBtn";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Proyects } from "./components/Proyects";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="App bg-slate-50 dark:bg-stone-900">
      <Header theme={theme} handleTheme={handleTheme} />
      <Hero />
      <About />
      <Experience />
      <Proyects />
      <Contact />
      <Footer />
      <GoToTopBtn />
    </div>
  );
}

export default App;
