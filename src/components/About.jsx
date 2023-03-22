import { useTranslation } from "react-i18next";

export const About = () => {
  const [t] = useTranslation("global");

  return (
    <section id="about">
      <div className="container min-[320px]:px-8 sm:mx-auto sm:w-3/4 lg:w-3/4 xl:w-3/5 lg:flex lg:items-center gap-2 p-16 ">
        <div>
          <h2
            className="text-4xl font-bold text-black dark:text-white mb-8"
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <span className="text-2xl font-normal text-cyan-300">01. </span>
            {t("about.about.h2")}
          </h2>
          <p
            className="dark:text-slate-400 mb-4 font-semibold text-lg"
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            {t("about.about.p1")}
          </p>
          <p
            className="dark:text-slate-400 mb-4 font-semibold text-lg"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          >
            {t("about.about.p2")}
          </p>
          <p
            className="dark:text-slate-400 mb-4 font-semibold text-lg"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            {t("about.about.p3")}
          </p>
          <p
            className="dark:text-slate-400 mb-8 font-semibold text-lg"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
          >
            {t("about.about.p4")}
          </p>
          <ul
            className="dark:text-slate-400 font-semibold text-lg grid grid-rows-3 grid-cols-2 sm:grid-cols-3 mb-4"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              HTML
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              React
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              Git
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              CSS
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              NextJS
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              Github
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              JavaScript
            </li>
            <li>
              <span className="text-cyan-300">
                <ion-icon name="caret-forward-outline"></ion-icon>
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
        >
          <img src="/perfil.png" className="bg-contain bg-center" />
        </div>
      </div>
    </section>
  );
};
