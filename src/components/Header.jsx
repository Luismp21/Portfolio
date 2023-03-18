import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = ({ theme, handleTheme }) => {
  const [t, i18n] = useTranslation("global");
  const [isHidden, setIsHidden] = useState(true);

  const selectorLanguaje = i18n.languages[0];

  const spanishLanguage = () => {
    const spanishLanguageOption = i18n.changeLanguage("es");
    menu.classList.add("hidden");
    setIsHidden(true);
    return spanishLanguageOption;
  };

  const englishLanguage = () => {
    const englishLanguageOption = i18n.changeLanguage("en");
    menu.classList.add("hidden");
    setIsHidden(true);
    return englishLanguageOption;
  };

  const hiddenLanguageButton = () => {
    if (isHidden) {
      setIsHidden(false);
      document.querySelector("#menu");
      menu.classList.add("block");
      menu.classList.remove("hidden");
    } else {
      setIsHidden(true);
      document.querySelector("#menu");
      menu.classList.add("hidden");
      menu.classList.remove("block");
    }
  };

  const hiddenMenuButton = () => {
    const mobileNav = document.querySelector("#mobileMenu");
    if (mobileNav.classList.contains("hidden")) {
      mobileNav.classList.remove("hidden");
    } else {
      mobileNav.classList.add("hidden");
    }
  };

  return (
    <header id="header">
      <nav
        className="xl:container mx-auto flex items-center justify-between flex-wrap p-6 fixed left-8 right-8 bg-white dark:bg-stone-900 z-50 "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="flex items-center flex-shrink-0 text-white">
          <a href="/">
            <img
              src="/logo1.svg"
              alt="logo"
              width={"60px"}
              height={"60px"}
            />
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            id="mobile-nav2"
            onClick={hiddenMenuButton}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div
          id="mobileMenu"
          className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto "
        >
          <div className="min-[320px]:flex min-[320px]:item-center text-sm sm:mt-12px sm:flex flex-col items-center lg:flex-grow">
            {" "}
            <ol className="lg:flex justify-center lg:gap-2">
              <li className="block mt-4 lg:inline-block lg:mt-0 py-4 mx-4">
                <a
                  href="#about"
                  className="text-black hover:text-cyan-300 dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left"
                  onClick={hiddenMenuButton}
                >
                  <span className="text-cyan-300">01. </span>
                  {t("header.about")}
                </a>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
                <a
                  href="#experience"
                  className="text-black hover:text-cyan-300 dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left"
                  onClick={hiddenMenuButton}
                >
                  <span className="text-cyan-300">02. </span>
                  {t("header.experience")}
                </a>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
                <a
                  href="#projects"
                  className="text-black hover:text-cyan-300 dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left"
                  onClick={hiddenMenuButton}
                >
                  <span className="text-cyan-300">03. </span>
                  {t("header.project")}
                </a>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
                <a
                  href="#contact"
                  className="text-black hover:text-cyan-300 dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left"
                  onClick={hiddenMenuButton}
                >
                  <span className="text-cyan-300">04. </span>
                  {t("header.contact")}
                </a>
              </li>
            </ol>
          </div>

          <div className="lg:flex-row flex mt-10 lg:mt-0 gap-6 justify-center items-end">
            <div className="flex-col relative flex lg:flex-row items-center gap-2">
              <button
                className="text-black hover:text-cyan-300 dark:text-slate-400  dark:hover:text-cyan-300 text-4xl p-2  hover:border-cyan-300 transition duration-300 cursor-pointer"
                type="button"
                onClick={handleTheme}
              >
                {theme === "dark" ? (
                  <ion-icon name="sunny-outline"></ion-icon>
                ) : (
                  <ion-icon name="moon-outline"></ion-icon>
                )}
              </button>

              <button
                className="text-black dark:text-white flex items-center gap-4 p-4"
                onClick={hiddenLanguageButton}
              >
                <div className=" text-cyan-300">
                  <ion-icon size="large" name="language-outline"></ion-icon>
                </div>

                <span className="text-black dark:text-white">
                  {selectorLanguaje === "en" ? "EN" : "ES"}
                  <ion-icon name="caret-down-outline"></ion-icon>
                </span>
              </button>

              <ul
                id="menu"
                className="hidden text-black dark:text-slate-400 bg-white dark:bg-stone-900 font-semibold absolute min-[320px]:top-32 min-[320px]:right-0.5 min-[375px]:top-32 min-[375px]:right-0.5 top-32 right-24 sm:top-32 sm:right-0.5 lg:top-16 lg:right-4 border border-cyan-300 rounded-md p-2"
              >
                <li
                  id="menu1"
                  className="flex flex-row cursor-pointer"
                  onClick={spanishLanguage}
                >
                  <img
                    src="/chile.png"
                    className="w-8 h-8"
                    alt="img-chile"
                  />
                  {t("header.buttonLanguage2")}
                </li>
                <li
                  id="menu2"
                  className="flex flex-row cursor-pointer"
                  onClick={englishLanguage}
                >
                  <img
                    src="/eeuu.png"
                    className="w-8 h-8"
                    alt="img-eeuu"
                  />
                  {t("header.buttonLanguage1")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
