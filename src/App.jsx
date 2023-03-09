import { useState, useEffect } from "react";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

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
    <div className="App dark:bg-stone-900 mx-auto">
      <Header theme={theme} handleTheme={handleTheme} />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
