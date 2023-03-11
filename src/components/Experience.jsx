import { useTranslation } from "react-i18next";

export const Experience = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section>
      <div className="container mx-auto w-1/2 gap-2 p-16 mb-64">
        <h2 className="text-4xl font-bold text-white mb-8">
          <span className="text-2xl font-normal text-cyan-300">02. </span>
          {t("experience.experience.h2")}
        </h2>
        <div className="p-4 w-3/4 border rounded-lg border-indigo-600">
          <div className="">
            <h3 className="text-white mb-2">{t("experience.experience.h3")}</h3>
            <h5 className="text-slate-400 mb-4">
              {t("experience.experience.h5")}
            </h5>
            <ul>
              <li>
                <p className="text-slate-400 text-lg mb-2">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  {t("experience.experience.p1")}
                </p>
              </li>
              <li>
                <p className="text-slate-400 text-lg mb-2">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  {t("experience.experience.p2")}
                </p>
              </li>
              <li>
                <p className="text-slate-400 text-lg mb-2">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  <span className="text-white">
                    {t("experience.experience.p3")}
                  </span>
                  {t("experience.experience.p4")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
