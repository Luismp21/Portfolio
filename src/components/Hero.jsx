import { useTranslation } from "react-i18next";

export const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <section id="hero">
      <div className="container min-[320px]:px-8 min-[320px]:pt-44 sm:mx-auto sm:pt-80 sm:w-3/4 lg:w-3/4 xl:w-3/5 min-h-screen">
        <h1
          className="text-lg font-semibold text-cyan-300 mb-6"
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
        >
          {t("hero.hero.h1")}
        </h1>
        <h2
          className="font-black min-[320px]:text-5xl sm:text-7xl text-black dark:text-white mb-2"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          {t("hero.hero.h2")}
        </h2>
        <h3
          className="font-black min-[320px]:text-3xl sm:text-5xl text-black dark:text-slate-400 mb-6"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-sine"
        >
          {t("hero.hero.h3")}
        </h3>
        <p
          className="text-lg font-semibold text-black dark:text-slate-400 md:w-8/12 mb-12"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          {t("hero.hero.p")}
        </p>

        <div
          className="flex flex-col sm:flex-row sm:gap-10 items-center justify-between"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <a
            href="#about"
            className="bg-indigo-500 dark:hover:bg-indigo-600 font-bold text-white p-5 rounded-lg transition hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-cyan-300"
          >
            {t("hero.hero.button")}
          </a>
          <div className="mt-20 sm:mt-0 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/luis-munoz-pinilla/"
              target="_blank"
              className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600  border-indigo-700"
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://github.com/Luismp21?tab=repositories"
              target="_blank"
              className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600  border-indigo-700"
            >
              <ion-icon size="large" name="logo-github"></ion-icon>
            </a>
            <a
              href="../public/docPrueba.pdf"
              className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600  border-indigo-700"
              rel="noopener noreferrer"
              download="docPrueba.pdf"
            >
              <ion-icon size="large" name="document-text-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
