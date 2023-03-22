export const GoToTopBtn = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  window.onscroll = () => {
    if (window.scrollY < 300) {
      buttonTop.classList.add("hidden");
    } else {
      buttonTop.classList.remove("hidden");
    }
  };

  return (
    <div className="flex">
      <button
        id="buttonTop"
        className="hidden bg-cyan-300 rounded-3xl w-10 h-10 border-4 border-indigo-600 fixed bottom-10 right-10"
        onClick={goToTop}
      >
        <ion-icon size="large" name="arrow-up-outline"></ion-icon>
      </button>
    </div>
  );
};
