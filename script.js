"use strict";

/* =========================
   ELEMENTS
========================= */

const intro = document.getElementById("intro");

const openBtn = document.getElementById("openBtn");

const nextBtn = document.getElementById("nextBtn");

const againBtn = document.getElementById("againBtn");

const mainPhoto = document.getElementById("mainPhoto");

const touchEffect = document.getElementById("touchEffect");

const stars = document.getElementById("stars");

const particles = document.getElementById("particles");

const hearts = document.getElementById("hearts");

/* =========================
   INTRO
========================= */

function startSite() {
  /*
    نضمن البداية من أعلى الموقع
  */

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  intro.classList.add("hide");

  document.body.style.overflow = "";
}

openBtn.addEventListener("click", startSite);

/* =========================
   NEXT
========================= */

nextBtn.addEventListener("click", () => {
  const target = document.querySelector(".section");

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* =========================
   AGAIN
========================= */

againBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  intro.classList.remove("hide");

  document.body.style.overflow = "hidden";
});

/* =========================
   IMAGE CHECK
========================= */

if (mainPhoto) {
  mainPhoto.addEventListener("load", () => {
    console.log("✅ akram.png loaded successfully");

    mainPhoto.style.opacity = "1";
  });

  mainPhoto.addEventListener("error", () => {
    console.error("❌ akram.png could not be loaded");

    /*
        يظهر مكان الصورة تنبيه واضح
      */

    mainPhoto.style.display = "none";

    const frame = mainPhoto.parentElement;

    frame.style.background =
      "radial-gradient(circle, rgba(255,40,130,.20), #15050d)";

    frame.setAttribute("data-error", "الصورة akram.png غير قابلة للقراءة");
  });
}

/* =========================
   REVEAL
========================= */

const reveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

reveal.forEach((item) => observer.observe(item));

/* =========================
   STARS
========================= */

for (let i = 0; i < 70; i++) {
  const star = document.createElement("span");

  star.className = "star";

  const size = Math.random() * 2.5 + 1;

  star.style.width = size + "px";

  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "%";

  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration = 2 + Math.random() * 5 + "s";

  star.style.animationDelay = Math.random() * 5 + "s";

  stars.appendChild(star);
}

/* =========================
   PARTICLES
========================= */

for (let i = 0; i < 30; i++) {
  const particle = document.createElement("span");

  particle.className = "particle";

  const size = Math.random() * 3 + 2;

  particle.style.width = size + "px";

  particle.style.height = size + "px";

  particle.style.left = Math.random() * 100 + "%";

  particle.style.animationDuration = 6 + Math.random() * 10 + "s";

  particle.style.animationDelay = Math.random() * 8 + "s";

  particles.appendChild(particle);
}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "float-heart";

  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = 10 + Math.random() * 15 + "px";

  heart.style.setProperty("--x", -80 + Math.random() * 160 + "px");

  const duration = 7 + Math.random() * 6;

  heart.style.animationDuration = duration + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 700);

/* =========================
   TOUCH EFFECT
========================= */

function touch(x, y) {
  touchEffect.style.left = x + "px";

  touchEffect.style.top = y + "px";

  touchEffect.classList.remove("show");

  void touchEffect.offsetWidth;

  touchEffect.classList.add("show");
}

document.addEventListener(
  "touchstart",
  (event) => {
    const t = event.touches[0];

    if (!t) return;

    touch(t.clientX, t.clientY);
  },
  {
    passive: true,
  },
);

/* =========================
   DESKTOP MOUSE
========================= */

document.addEventListener(
  "mousemove",
  (event) => {
    /*
      فقط تأثير صغير،
      والموقع لا يعتمد عليه.
    */

    if (window.innerWidth > 760) {
      touch(event.clientX, event.clientY);
    }
  },
  {
    passive: true,
  },
);

/* =========================
   COUNTER
========================= */

const startDate = new Date("2024-01-01T00:00:00");

function updateCounter() {
  const now = new Date();

  let diff = now - startDate;

  if (diff < 0) {
    diff = 0;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor((totalSeconds % 86400) / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(3, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateCounter();

setInterval(updateCounter, 1000);

/* =========================
   START STATE
========================= */

document.body.style.overflow = "hidden";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
