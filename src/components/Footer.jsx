import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="container mx-auto w-1/2">
      <div className="flex justify-between mb-10">
        <div>
          <img
            src="./public/logo1.svg"
            alt="logo"
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div className="mt-20 sm:mt-0 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/luis-munoz-pinilla/"
            target="_blank"
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://github.com/Luismp21?tab=repositories"
            target="_blank"
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
          <a
            href=""
            className="flex w-15 h-15 transition hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold p-2 hover:shadow-2xl hover:shadow-cyan-300 rounded-full border hover:bg-indigo-500 border-indigo-600"
          >
            <ion-icon size="large" name="document-text-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center border-indigo-600 border-t-2 py-4">
        <div className="flex items-center justify-center gap-6 ">
          <p className="text-slate-400">{t("footer.footer.p1")}</p>
          <img src="./public/react.svg" width={"40px"} />
          <img src="./public/tailwind.svg" width={"40px"} />
        </div>
        <p className="text-slate-400">{t("footer.footer.p2")}</p>
      </div>
    </section>
  );
};
