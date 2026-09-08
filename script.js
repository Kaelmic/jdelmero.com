 const nav = document.querySelector(".nav-split");
  const THRESHOLD = 80;
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();