import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="mb-28">
      <div className="container flex flex-col items-center mx-auto w-1/2">
        <h2 className="text-4xl font-bold text-white mb-8">
          <span className="text-2xl font-normal text-cyan-300">04. </span>
          {t("contact.contact.h2")}
        </h2>
        <h3 className="text-3xl font-semibold text-white mb-2">
          {t("contact.contact.h3")}
        </h3>
        <p className="text-slate-400 mb-4 max-w-md">{t("contact.contact.p")}</p>
        <a className="bg-indigo-500 hover:bg-indigo-600 font-bold text-white p-5 mt-10 rounded-lg transition hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-cyan-300 cursor-pointer">
          {t("contact.contact.button")}
        </a>
      </div>
    </section>
  );
};
