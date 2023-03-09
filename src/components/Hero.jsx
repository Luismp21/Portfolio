import { useTranslation } from "react-i18next";

export const Hero = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="container sm:mx-auto min-[320px]:p-16 sm:pt-80 sm:w-3/4 lg:w-1/2 min-h-screen	">
      <h1 className="text-lg dark:text-cyan-300 text-black mb-6">
        {t("hero.hero.h1")}
      </h1>
      <h2 className="font-black min-[320px]:text-5xl sm:text-7xl text-slate-200 mb-2">{t("hero.hero.h2")}</h2>
      <h3 className="font-black min-[320px]:text-3xl sm:text-5xl text-slate-400 mb-6">{t("hero.hero.h3")}</h3>
      <p className="text-lg text-slate-400 md:w-8/12 mb-12">{t("hero.hero.p")}</p>

      <div className="sm:flex sm:gap-10 items-center justify-between">
        <a
          href=""
          className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white p-5 rounded-lg transition hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-cyan-300"
        >
          {t("hero.hero.button")}
        </a>
        <div className="mt-20 sm:mt-0 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/luis-munoz-pinilla/
            "
            target="_blank"
            className="transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://github.com/Luismp21?tab=repositories"
            target="_blank"
            className="transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
          <a
            href=""
            className="transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="document-text-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};
