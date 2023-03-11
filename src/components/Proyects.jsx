import { useTranslation } from "react-i18next";

export const Proyects = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section>
      <div className="container mx-auto w-1/2 mb-40">
        <h2 className="text-4xl font-bold text-white mb-8">
          <span className="text-2xl font-normal text-cyan-300">03. </span>
          {t("proyect.proyect.h2")}
        </h2>
        <div className="grid gap-10 grid-cols-2 grid-rows-2">
          <article className="rounded-3xl group relative block bg-black">
            <img
              alt="Proyect1"
              src="./public/proyecto1.png"
              className="absolute inset-0 h-full rounded-3xl  opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 translate-y-8 transform opacity-0 transition-all  duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-300 ">
                    {t("proyect.proyect.card.p1")}
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {t("proyect.proyect.card.p2")}
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://administrado-de-veterinaria.netlify.app/"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://github.com/Luismp21/Administrado-de-Veterinaria-React"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="open-outline"></ion-icon>
                  </a>
                </div>
              </div>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="">
                  <h3 className="text-2xl font-bold text-white">
                    {t("proyect.proyect.card1.h3")}
                  </h3>
                  <p className="text-sm text-white pb-4">
                    {t("proyect.proyect.card1.p3")}
                  </p>

                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #Tailwindcss
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #Vite
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl group relative block bg-black">
            <img
              alt="Proyect2"
              src="./public/proyecto2.png"
              className="absolute inset-0 h-full rounded-3xl  opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 translate-y-8 transform opacity-0 transition-all  duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-300 ">
                    {t("proyect.proyect.card.p1")}
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {t("proyect.proyect.card.p2")}
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://cotizador-de-cryptomoneda.netlify.app/"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://github.com/Luismp21/Cotizador-de-cryptomoneda-React"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="open-outline"></ion-icon>
                  </a>
                </div>
              </div>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="">
                  <h3 className="text-2xl font-bold text-white">
                    {t("proyect.proyect.card2.h3")}
                  </h3>
                  <p className="text-sm text-white pb-4">
                    {t("proyect.proyect.card2.p3")}
                  </p>

                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #StyledComponents
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #Vite
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className="rounded-3xl group relative block bg-black">
            <img
              alt="Proyect3"
              src="./public/proyecto3.png"
              className="absolute inset-0 h-full rounded-3xl  opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 translate-y-8 transform opacity-0 transition-all  duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-300 ">
                    {t("proyect.proyect.card.p1")}
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {t("proyect.proyect.card.p2")}
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <a
                    href="https://gif-expert-lm.netlify.app/"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://github.com/Luismp21/GifExpert-React"
                    target="_blank"
                    className="text-cyan-300"
                  >
                    <ion-icon size="large" name="open-outline"></ion-icon>
                  </a>
                </div>
              </div>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="">
                  <h3 className="text-2xl font-bold text-white">
                    {t("proyect.proyect.card3.h3")}
                  </h3>
                  <p className="text-sm text-white pb-4">
                    {t("proyect.proyect.card3.p3")}
                  </p>

                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #Tailwindcss
                  </span>
                  <span className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-white hover:text-cyan-300 mr-2 mb-2">
                    #Vite
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};