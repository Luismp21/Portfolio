import { useTranslation } from "react-i18next";

export const Experience = () => {
  const [t] = useTranslation("global");

  return (
    <section id="experience">
      <div className="container text-lg mx-auto lg:flex lg:flex-col lg:items-center sm:w-3/4 lg:h-3/4 xl:w-3/5 gap-2 min-[320px]:px-8 p-16 mb-64">
        <h2 className="text-4xl font-bold min-[320px]:text-center text-black font dark:text-white mb-8" data-aos="fade-left" data-aos-duration="300" data-aos-easing="ease-in-sine">
          <span className="text-2xl font-normal text-cyan-300">02. </span>
          {t("experience.experience.h2")}
        </h2>
        <div className="p-4 xl:w-2/3 border rounded-lg border-indigo-600">
          <div className="">
            <h3 className="text-black dark:text-white mb-2" data-aos="fade-left" data-aos-duration="400" data-aos-easing="ease-in-sine">{t("experience.experience.h3")}</h3>
            <h5 className="text-black dark:text-slate-400 mb-4" data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine">
              {t("experience.experience.h5")}
            </h5>
            <ul>
              <li>
                <p className="text-black dark:text-slate-400 font-semibold dark:font-normal text-lg mb-2" data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-sine">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  {t("experience.experience.p1")}
                </p>
              </li>
              <li>
                <p className="text-black dark:text-slate-400 font-semibold dark:font-normal text-lg mb-2" data-aos="fade-left" data-aos-duration="700" data-aos-easing="ease-in-sine">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  {t("experience.experience.p2")}
                </p>
              </li>
              <li>
                <p className="text-black dark:text-slate-400 font-semibold dark:font-normal text-lg mb-2" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-sine">
                  <span className="text-cyan-300">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </span>
                  <span className="text-cyan-300 dark:text-white font-semibold dark:font-normal">
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
