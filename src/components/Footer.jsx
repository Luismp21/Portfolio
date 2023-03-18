import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <section
      id="footer"
      className="container text-lg min-[320px]:px-8 mx-auto sm:w-3/4"
    >
      <div
        className="flex justify-between min-[320px]:flex-col min-[320px]:items-center mb-10 md:flex-row"
        data-aos="fade-up"
        data-aos-duration="1900"
      >
        <div className="min-[320px]:mb-10 sm:mb-0">
          <img
            src="/logo1.svg"
            alt="logo"
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div className="mt-20 sm:mt-0 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/luis-munoz-pinilla/"
            target="_blank"
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600 border-indigo-600"
          >
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://github.com/Luismp21?tab=repositories"
            target="_blank"
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600 border-indigo-600"
          >
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
          <a
            href="/docPrueba.pdf"
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border bg-indigo-500 dark:bg-transparent dark:hover:bg-indigo-600 border-indigo-600"
            rel="noopener noreferrer"
            download="docPrueba.pdf"
          >
            <ion-icon size="large" name="document-text-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center border-indigo-600 border-t-2 py-4">
        <div className="flex items-center justify-center gap-6 ">
          <p className="font-semibold dark:font-normal dark:text-slate-400">
            {t("footer.footer.p1")}
          </p>
          <img src="/react.svg" width={"40px"} />
          <img src="/tailwind.svg" width={"40px"} />
        </div>
        <p className="font-semibold dark:font-normal dark:text-slate-400">
          {t("footer.footer.p2")}
        </p>
      </div>
    </section>
  );
};
