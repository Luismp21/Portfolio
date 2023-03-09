import { useTranslation } from "react-i18next";

export const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="container mx-auto w-1/2 flex gap-2">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="text-2xl font-normal text-cyan-300">01. </span>
            {t("about.about.h2")}
          </h2>
          <p className="text-slate-400 mb-4 text-lg">{t("about.about.p1")}</p>
          <p className="text-slate-400 mb-4 text-lg">{t("about.about.p2")}</p>
          <p className="text-slate-400 mb-4 text-lg">{t("about.about.p3")}</p>
          <p className="text-slate-400 mb-8 text-lg">{t("about.about.p4")}</p>
          <ul className="text-slate-400 grid grid-rows-3 grid-cols-3 text-lg">
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
        <div>
          <img src="./public/perfil.png" className="bg-contain bg-center" />
        </div>
      </div>
    </>
  );
};
