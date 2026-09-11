"use strict";

/* =========================================
   ELEMENTS
========================================= */

const intro = document.getElementById("intro");

const openBtn = document.getElementById("openBtn");

const nextBtn = document.getElementById("nextBtn");

const againBtn = document.getElementById("againBtn");

const mainPhoto = document.getElementById("mainPhoto");

const stars = document.getElementById("stars");

const particles = document.getElementById("particles");

const hearts = document.getElementById("hearts");

const touchEffect = document.getElementById("touchEffect");

/* =========================================
   START DATE
========================================= */

const startDate = new Date("2024-01-01T00:00:00");

/* =========================================
   ALWAYS START FROM TOP
========================================= */

function goTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/* =========================================
   OPEN SITE
========================================= */

function openSite() {
  goTop();

  intro.classList.add("hide");

  document.body.style.overflow = "";

  /*
    نضمن أنه ما يبقى بالمكان القديم
  */

  setTimeout(() => {
    goTop();
  }, 30);

  setTimeout(() => {
    goTop();
  }, 250);

  setTimeout(() => {
    goTop();
  }, 700);
}

openBtn.addEventListener("click", openSite);

/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener("click", () => {
  const firstSection = document.querySelector(".section");

  if (!firstSection) return;

  firstSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* =========================================
   AGAIN
========================================= */

againBtn.addEventListener("click", () => {
  goTop();

  document.body.style.overflow = "hidden";

  intro.classList.remove("hide");
});

/* =========================================
   IMAGE
========================================= */

mainPhoto.addEventListener("load", () => {
  console.log("✅ akram.png loaded");

  mainPhoto.style.visibility = "visible";
});

mainPhoto.addEventListener("error", () => {
  console.error("❌ akram.png failed to load");

  /*
      ما نخلي الصورة تكسر الشكل
    */

  mainPhoto.style.visibility = "hidden";
});

/* =========================================
   REVEAL
========================================= */

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px -35px 0px",
  },
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

/* =========================================
   STARS
========================================= */

for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");

  star.className = "star";

  const size = 1 + Math.random() * 2.4;

  star.style.width = `${size}px`;

  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;

  star.style.top = `${Math.random() * 100}%`;

  star.style.animationDuration = `${2 + Math.random() * 5}s`;

  star.style.animationDelay = `${Math.random() * 5}s`;

  stars.appendChild(star);
}

/* =========================================
   PARTICLES
========================================= */

for (let i = 0; i < 30; i++) {
  const particle = document.createElement("span");

  particle.className = "particle";

  const size = 1.5 + Math.random() * 3;

  particle.style.width = `${size}px`;

  particle.style.height = `${size}px`;

  particle.style.left = `${Math.random() * 100}%`;

  particle.style.animationDuration = `${6 + Math.random() * 9}s`;

  particle.style.animationDelay = `${Math.random() * 10}s`;

  particles.appendChild(particle);
}

/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "float-heart";

  heart.textContent = Math.random() > 0.45 ? "♥" : "♡";

  heart.style.left = `${Math.random() * 100}%`;

  heart.style.fontSize = `${10 + Math.random() * 14}px`;

  heart.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);

  const duration = 7 + Math.random() * 6;

  heart.style.animationDuration = `${duration}s`;

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 850);

/* =========================================
   TOUCH LIGHT
========================================= */

function touchLight(x, y) {
  touchEffect.style.left = `${x}px`;

  touchEffect.style.top = `${y}px`;

  touchEffect.classList.remove("show");

  void touchEffect.offsetWidth;

  touchEffect.classList.add("show");
}

document.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];

    if (!touch) return;

    touchLight(touch.clientX, touch.clientY);
  },
  {
    passive: true,
  },
);

/* =========================================
   COUNTER
========================================= */

function updateCounter() {
  const now = new Date();

  let diff = now.getTime() - startDate.getTime();

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

/* =========================================
   INITIAL STATE
========================================= */

goTop();

document.body.style.overflow = "hidden";

/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {
  goTop();

  setTimeout(goTop, 100);

  setTimeout(goTop, 500);
});
