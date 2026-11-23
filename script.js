const PHONE = "212660665952";

// Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", false);
}));

// Bascule Particulier / Équipe
const copy = {
  private: "Apprenez l’Intelligence Artificielle et Python à votre rythme, avec un professeur qui vous accompagne pas à pas.",
  team: "Formations pratiques en Intelligence Artificielle et Python pour les équipes et entreprises qui veulent passer à l’action."
};
const sub = document.getElementById("heroSub");
document.querySelectorAll(".switch__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".switch__btn").forEach(b => {
      b.classList.remove("is-on");
      b.setAttribute("aria-selected", false);
    });
    btn.classList.add("is-on");
    btn.setAttribute("aria-selected", true);
    sub.style.opacity = 0;
    setTimeout(() => { sub.textContent = copy[btn.dataset.mode]; sub.style.opacity = 1; }, 200);
  });
});

// Pré-sélection de la formation depuis les cartes
document.querySelectorAll(".fcard__cta").forEach(a => {
  a.addEventListener("click", () => {
    document.getElementById("formationSelect").value = a.dataset.subject;
  });
});

// Formulaire -> WhatsApp
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Bonjour Abdellah, je suis ${f.get("nom")}.\nFormation souhaitée : ${f.get("formation")}.\n${f.get("message") || ""}`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

// Apparition au scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Fond du header au défilement
const topbar = document.querySelector(".topbar");
const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
