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
    <nav className="flex items-center justify-between flex-wrap p-6  container  mx-auto fixed left-8 right-8 bg-stone-900 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Tailwind CSS
        </span>
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
          <ol className="lg:flex justify-center gap-6 decoration-sky-400">
            <li className="block mt-4 lg:inline-block lg:mt-0 py-4 mx-4">
              <a className="text-black  dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left">
                <span className="text-black dark:text-cyan-300">01. </span>
                {t("header.about")}
              </a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
              <a className="text-black dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left">
                <span className="text-black dark:text-cyan-300">02. </span>
                {t("header.experience")}
              </a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
              <a className="text-black dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left">
                <span className="text-black dark:text-cyan-300">03. </span>
                {t("header.project")}
              </a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-cyan-300 py-4 mx-4">
              <a className="text-black dark:hover:text-cyan-300 dark:text-slate-400 font-bold transition duration-300 cursor-pointer hvr-underline-from-left">
                <span className="text-black dark:text-cyan-300">04. </span>
                {t("header.contact")}
              </a>
            </li>
          </ol>
        </div>

        <div className="lg:flex-row flex  mt-10 lg:mt-0 gap-6 justify-center items-end">
          <div className="flex-col relative flex lg:flex-row items-center gap-2">
            <button
              className="text-black dark:text-slate-400  dark:hover:text-cyan-300 text-4xl p-2  hover:border-cyan-300 transition duration-300 cursor-pointer"
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
              className="text-white flex items-center gap-4 p-4"
              onClick={hiddenLanguageButton}
            >
              <div className=" text-cyan-300">
                <ion-icon size="large" name="language-outline"></ion-icon>
              </div>

              <span className="text-white">
                {selectorLanguaje === "en" ? "EN" : "ES"}
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </button>

            <ul
              id="menu"
              className="hidden text-white absolute min-[320px]:top-32 min-[320px]:right-0.5 min-[375px]:top-32 min-[375px]:right-0.5 top-32 right-24 sm:top-32 sm:right-0.5 lg:top-16 lg:right-4 border border-cyan-300 rounded-md p-2"
            >
              <li
                id="menu1"
                className="flex flex-row cursor-pointer"
                onClick={spanishLanguage}
              >
                <img
                  src="./public/chile.png"
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
                  src="./public/eeuu.png"
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
  );
};
