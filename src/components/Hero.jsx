import { useTranslation } from "react-i18next";


export const Hero = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="container mx-auto mt-0 p-16 w-1/2">
      <h1 className="text-lg dark:text-cyan-300 text-black mb-6">{t("hero.hero.h1")}</h1>
      <h2 className="text-4xl text-slate-200 mb-2">{t("hero.hero.h2")}</h2>
      <h3 className="text-2xl text-slate-300 mb-6">{t("hero.hero.h3")}</h3>
      <p className="text-lg text-slate-400 w-8/12">{t("hero.hero.p")}</p>
    </div>
  );
};
