import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="mb-28">
      <div className="container flex flex-col items-center mx-auto w-1/2">
        <h2
          className="text-black dark:text-white text-4xl font-bold mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="text-cyan-300 text-2xl font-normal">04. </span>
          {t("contact.contact.h2")}
        </h2>
        <h3
          className="text-3xl font-semibold text-black dark:text-white mb-2"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          {t("contact.contact.h3")}
        </h3>
        <p
          className="text-black dark:text-slate-400 font-bold dark:font-normal mb-4 max-w-md"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          {t("contact.contact.p")}
        </p>
        <a
          className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white ont-bold p-5 mt-10 rounded-lg transition hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-cyan-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1900"
        >
          {t("contact.contact.button")}
        </a>
      </div>
    </section>
  );
};
