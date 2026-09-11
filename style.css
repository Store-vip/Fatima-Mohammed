:root {
  --bg: #080208;
  --pink: #ff2d82;
  --pink-light: #ff70ae;
  --white: #fff8fc;
  --muted: #dcc3cf;
  --card: rgba(255, 255, 255, 0.05);
  --border: rgba(255, 255, 255, 0.09);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: var(--bg);
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(255, 32, 126, 0.16),
      transparent 34%
    ),
    #080208;

  color: var(--white);

  font-family: "Cairo", sans-serif;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  overscroll-behavior-x: none;
}

button {
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
}

img {
  display: block;
  max-width: 100%;
}

/* =========================================
   INTRO
========================================= */

.intro {
  position: fixed;
  inset: 0;

  z-index: 10000;

  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px 22px max(30px, env(safe-area-inset-bottom));

  background:
    radial-gradient(
      circle at center,
      rgba(255, 35, 130, 0.16),
      transparent 38%
    ),
    #080208;

  transition:
    opacity 0.8s ease,
    visibility 0.8s ease,
    transform 0.8s ease;
}

.intro.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(1.03);
}

.intro-glow {
  position: absolute;

  width: 250px;
  height: 250px;

  border-radius: 50%;

  background: rgba(255, 36, 130, 0.22);

  filter: blur(80px);

  animation: introGlow 3s ease-in-out infinite alternate;
}

@keyframes introGlow {
  from {
    transform: scale(0.8);
    opacity: 0.45;
  }

  to {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

.intro-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 430px;

  text-align: center;

  animation: introEnter 1s cubic-bezier(0.16, 0.8, 0.25, 1) both;
}

@keyframes introEnter {
  from {
    opacity: 0;
    transform: translateY(35px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.intro-small {
  color: var(--pink-light);

  font-weight: 900;
  font-size: 0.82rem;

  margin-bottom: 25px;
}

.intro-heart {
  width: 108px;
  height: 108px;

  margin: auto auto 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.045);

  border: 1px solid rgba(255, 255, 255, 0.11);

  box-shadow:
    0 0 0 12px rgba(255, 45, 130, 0.03),
    0 0 60px rgba(255, 45, 130, 0.28);

  animation: heartFloat 2.3s ease-in-out infinite;
}

.intro-heart span {
  color: #ff3d91;

  font-size: 3.3rem;

  line-height: 1;

  filter: drop-shadow(0 0 18px rgba(255, 55, 145, 0.75));
}

@keyframes heartFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-8px) scale(1.05);
  }
}

.intro h1 {
  font-family: "Tajawal", sans-serif;

  font-size: clamp(3.3rem, 15vw, 5.7rem);

  line-height: 0.92;

  font-weight: 900;

  letter-spacing: -0.06em;
}

.intro h1 strong {
  display: block;

  color: var(--pink);

  margin-top: 7px;
}

.intro p {
  margin: 20px auto 28px;

  max-width: 320px;

  color: var(--muted);

  font-size: 0.96rem;

  line-height: 2;

  font-weight: 800;
}

.open-btn {
  min-height: 60px;

  padding: 0 22px;

  border: 0;

  border-radius: 999px;

  background: linear-gradient(135deg, #ff2d83, #d91868);

  color: white;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 15px;

  font-size: 0.98rem;

  font-weight: 900;

  cursor: pointer;

  box-shadow: 0 18px 45px rgba(255, 24, 113, 0.25);

  transition: transform 0.2s ease;
}

.open-btn:active {
  transform: scale(0.95);
}

.open-btn b {
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.15);

  font-size: 1.2rem;
}

/* =========================================
   BACKGROUND
========================================= */

.background {
  position: fixed;
  inset: 0;

  z-index: 0;

  overflow: hidden;

  pointer-events: none;
}

.glow {
  position: absolute;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  filter: blur(100px);

  opacity: 0.14;

  animation: bgFloat 12s ease-in-out infinite alternate;
}

.glow-1 {
  top: -210px;
  left: -190px;

  background: #ff1479;
}

.glow-2 {
  right: -220px;
  top: 35%;

  background: #8216ff;

  animation-delay: -4s;
}

.glow-3 {
  bottom: -200px;
  left: 10%;

  background: #ff2b53;

  animation-delay: -7s;
}

@keyframes bgFloat {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(45px, -30px, 0) scale(1.13);
  }
}

/* =========================================
   SITE
========================================= */

.site {
  position: relative;
  z-index: 5;
}

.section {
  width: min(100%, 720px);

  margin: 0 auto;

  padding: 88px 20px;
}

/* =========================================
   HERO
========================================= */

.hero {
  min-height: 100svh;

  padding: max(35px, env(safe-area-inset-top)) 20px 80px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: flex-start;

  text-align: center;
}

.hero-badge {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  min-height: 36px;

  padding: 0 15px;

  margin-bottom: 26px;

  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.09);

  background: rgba(255, 255, 255, 0.045);

  color: #ffd6e8;

  font-size: 0.78rem;

  font-weight: 900;

  backdrop-filter: blur(10px);
}

.hero-badge span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #ff3e92;

  box-shadow: 0 0 15px #ff3e92;

  animation: dotPulse 1.4s ease-in-out infinite;
}

@keyframes dotPulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* =========================================
   PHOTO
========================================= */

.photo-area {
  position: relative;

  width: min(76vw, 340px);
  aspect-ratio: 1;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  margin-bottom: 34px;

  animation: photoFloat 5s ease-in-out infinite;

  will-change: transform;
}

@keyframes photoFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(3px, -4px, 0);
  }

  50% {
    transform: translate3d(0, -7px, 0);
  }

  75% {
    transform: translate3d(-3px, -3px, 0);
  }
}

.photo-aura {
  position: absolute;

  width: 67%;
  height: 67%;

  border-radius: 50%;

  background: rgba(255, 38, 129, 0.28);

  filter: blur(45px);

  animation: auraPulse 3s ease-in-out infinite alternate;
}

@keyframes auraPulse {
  from {
    transform: scale(0.88);
    opacity: 0.45;
  }

  to {
    transform: scale(1.14);
    opacity: 0.85;
  }
}

/*
   مهم:
   الإطار الخارجي وحده يتحرك.
   الصورة لا تتحرك ولا تدور معه.
*/

.photo-border {
  position: relative;

  z-index: 3;

  width: 77%;
  aspect-ratio: 1;

  padding: 6px;

  border-radius: 50%;

  background: conic-gradient(from 0deg, #ff287f, #ffafd1, #9228ff, #ff287f);

  animation: borderRotate 9s linear infinite;

  box-shadow:
    0 0 0 7px rgba(255, 255, 255, 0.025),
    0 0 55px rgba(255, 43, 138, 0.32);

  will-change: transform;
}

/*
  يرجع المحتوى الداخلي عكس دوران الإطار
  حتى تبقى الصورة ثابتة.
*/

.photo-inner {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  border-radius: 50%;

  border: 5px solid #0c040a;

  background: radial-gradient(circle, rgba(255, 50, 135, 0.12), #15050d);

  /*
    عكس دوران الإطار
  */

  animation: innerCounterRotate 9s linear infinite;
}

@keyframes borderRotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes innerCounterRotate {
  to {
    transform: rotate(-360deg);
  }
}

#mainPhoto {
  width: 100%;
  height: 100%;

  object-fit: cover;

  object-position: center;

  border-radius: 50%;

  background: #14050d;

  /*
    حركة تكبير صغيرة فقط
    بدون أي دوران
  */

  animation: imageBreath 5s ease-in-out infinite;

  will-change: transform;

  /*
    يمنع التشوه
  */

  transform-origin: center center;
}

@keyframes imageBreath {
  0%,
  100% {
    transform: scale(1.03);
  }

  50% {
    transform: scale(1.075);
  }
}

.photo-shine {
  position: absolute;

  inset: -35%;

  border-radius: 50%;

  pointer-events: none;

  background: linear-gradient(
    115deg,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%
  );

  transform: translateX(-110%) rotate(8deg);

  animation: shineMove 5.2s ease-in-out infinite;
}

@keyframes shineMove {
  0%,
  42% {
    transform: translateX(-110%) rotate(8deg);
  }

  65%,
  100% {
    transform: translateX(110%) rotate(8deg);
  }
}

/* =========================================
   ORBITS
========================================= */

.orbit {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  border: 1px solid rgba(255, 104, 170, 0.2);
}

.orbit-1 {
  width: 85%;
  height: 85%;

  animation: orbitA 11s linear infinite;
}

.orbit-2 {
  width: 100%;
  height: 100%;

  border-style: dashed;

  animation: orbitB 16s linear infinite;
}

.orbit-3 {
  width: 113%;
  height: 113%;

  border-color: rgba(255, 255, 255, 0.07);

  animation: orbitA 22s linear infinite;
}

@keyframes orbitA {
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbitB {
  to {
    transform: rotate(-360deg);
  }
}

.photo-dot {
  position: absolute;

  z-index: 5;

  border-radius: 50%;

  background: #ff4997;

  box-shadow: 0 0 18px #ff4997;

  animation: littleDot 2s ease-in-out infinite;
}

.dot-1 {
  width: 9px;
  height: 9px;

  top: 5%;
  right: 21%;
}

.dot-2 {
  width: 6px;
  height: 6px;

  bottom: 10%;
  left: 10%;
}

.dot-3 {
  width: 5px;
  height: 5px;

  left: 3%;
  top: 31%;
}

@keyframes littleDot {
  0%,
  100% {
    transform: scale(0.7);
  }

  50% {
    transform: scale(1.25);
  }
}

/* =========================================
   HERO TEXT
========================================= */

.hero-copy {
  width: 100%;
}

.mini-title {
  color: var(--pink-light);

  font-size: 0.78rem;

  font-weight: 900;
}

.hero-title {
  margin-top: 7px;

  font-family: "Tajawal", sans-serif;

  font-size: clamp(3.25rem, 18vw, 6.3rem);

  line-height: 0.92;

  font-weight: 900;

  letter-spacing: -0.07em;
}

.hero-title span {
  display: block;

  color: var(--pink);

  text-shadow: 0 0 35px rgba(255, 43, 137, 0.28);
}

.title-line {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  margin: 19px 0;
}

.title-line i {
  width: 55px;
  height: 1px;

  background: rgba(255, 255, 255, 0.22);
}

.title-line b {
  color: #ff438f;
}

.hero-copy > p {
  width: min(100%, 520px);

  margin: 0 auto;

  color: #ead4de;

  line-height: 2.1;

  font-size: 1rem;

  font-weight: 800;
}

.main-button {
  margin-top: 25px;

  min-height: 56px;

  padding: 0 19px;

  border-radius: 18px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.045);

  color: white;

  display: inline-flex;

  align-items: center;

  gap: 15px;

  font-weight: 900;

  cursor: pointer;
}

.main-button:active {
  transform: scale(0.96);
}

.main-button b {
  width: 32px;
  height: 32px;

  border-radius: 10px;

  display: grid;
  place-items: center;

  background: #ff2d83;
}

/* =========================================
   MESSAGE
========================================= */

.section-label {
  margin-bottom: 20px;

  color: #ff66a8;

  font-size: 0.8rem;

  font-weight: 900;
}

.message-card {
  padding: 30px 22px;

  border: 1px solid rgba(255, 255, 255, 0.09);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(15px);

  overflow: hidden;
}

.quote {
  font-family: Georgia, serif;

  font-size: 4.5rem;

  line-height: 0.5;

  color: rgba(255, 81, 154, 0.32);

  margin-bottom: 25px;
}

.message-card h3 {
  font-family: "Tajawal", sans-serif;

  font-size: clamp(2rem, 9vw, 3.4rem);

  line-height: 1.1;

  font-weight: 900;
}

.message-card h3 span {
  display: block;

  color: var(--pink);
}

.message-card p {
  margin-top: 20px;

  color: var(--muted);

  line-height: 2;

  font-weight: 800;
}

.highlight {
  margin-top: 23px;

  min-height: 58px;

  padding: 14px 16px;

  border-radius: 18px;

  display: flex;

  align-items: center;

  gap: 12px;

  color: #ff4a96;

  background: rgba(255, 45, 132, 0.08);
}

.highlight strong {
  color: white;

  font-weight: 900;
}

/* =========================================
   CARDS
========================================= */

.cards {
  display: grid;

  gap: 14px;
}

.card {
  padding: 24px 20px;

  border-radius: 24px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(255, 255, 255, 0.045);

  transition: transform 0.3s ease;
}

.card:active {
  transform: scale(0.985);
}

.card-icon {
  width: 50px;
  height: 50px;

  margin-bottom: 14px;

  border-radius: 16px;

  display: grid;
  place-items: center;

  color: #ff4a96;

  background: rgba(255, 48, 137, 0.09);

  font-size: 1.35rem;
}

.card h3 {
  font-size: 1.22rem;

  font-weight: 900;
}

.card p {
  margin-top: 8px;

  color: var(--muted);

  line-height: 1.9;

  font-weight: 700;
}

/* =========================================
   MEMORY
========================================= */

.memory {
  position: relative;

  width: 100%;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  border-radius: 30px;

  border: 1px solid rgba(255, 255, 255, 0.09);

  background: #12050c;
}

.memory img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  animation: memoryZoom 8s ease-in-out infinite alternate;
}

@keyframes memoryZoom {
  from {
    transform: scale(1.01);
  }

  to {
    transform: scale(1.07);
  }
}

.memory-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(to top, rgba(5, 2, 7, 0.9), transparent 60%);
}

.memory-title {
  position: absolute;

  right: 20px;
  bottom: 20px;
}

.memory-title small {
  display: block;

  color: #ff70ae;

  font-weight: 900;
}

.memory-title strong {
  display: block;

  margin-top: 2px;

  font-family: "Tajawal", sans-serif;

  font-size: 2rem;

  font-weight: 900;
}

.memory-copy {
  margin-top: 28px;
}

.memory-copy small {
  color: var(--pink-light);

  font-weight: 900;
}

.memory-copy h3 {
  margin-top: 8px;

  font-family: "Tajawal", sans-serif;

  font-size: clamp(2.1rem, 10vw, 4rem);

  line-height: 1;

  font-weight: 900;
}

.memory-copy h3 span {
  display: block;

  color: var(--pink);
}

.memory-copy p {
  margin-top: 17px;

  color: var(--muted);

  line-height: 2;

  font-weight: 800;
}

/* =========================================
   COUNTER
========================================= */

.counter-card {
  padding: 28px 17px;

  border-radius: 28px;

  text-align: center;

  background: rgba(255, 255, 255, 0.045);

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.counter-card small {
  color: var(--pink-light);

  font-weight: 900;
}

.counter-card h3 {
  margin-top: 8px;

  font-family: "Tajawal", sans-serif;

  font-size: clamp(2.2rem, 10vw, 3.6rem);

  font-weight: 900;
}

.counter-card > p {
  margin-top: 6px;

  color: var(--muted);

  font-weight: 700;
}

.counter-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 7px;

  margin-top: 24px;
}

.counter-grid > div {
  padding: 14px 4px;

  border-radius: 17px;

  background: rgba(0, 0, 0, 0.18);
}

.counter-grid strong {
  display: block;

  color: #ff59a0;

  font-family: "Tajawal", sans-serif;

  font-size: clamp(1.5rem, 8vw, 2.4rem);

  font-weight: 900;
}

.counter-grid span {
  color: #cdb5c1;

  font-size: 0.68rem;

  font-weight: 800;
}

/* =========================================
   FINAL
========================================= */

.final-section {
  width: min(100%, 720px);

  min-height: 88svh;

  margin: auto;

  padding: 88px 20px max(50px, env(safe-area-inset-bottom));

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;
}

.final-heart {
  width: 105px;
  height: 105px;

  margin-bottom: 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  color: #ff438f;

  font-size: 3.3rem;

  background: rgba(255, 42, 136, 0.05);

  border: 1px solid rgba(255, 69, 151, 0.2);

  animation: finalPulse 2.5s ease-in-out infinite;
}

@keyframes finalPulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}

.final-copy small {
  color: var(--pink-light);

  font-weight: 900;
}

.final-copy h3 {
  margin-top: 8px;

  font-family: "Tajawal", sans-serif;

  font-size: clamp(2.2rem, 11vw, 4.5rem);

  line-height: 1;

  font-weight: 900;
}

.final-copy h3 span {
  display: block;

  color: var(--pink);
}

.final-copy p {
  max-width: 450px;

  margin: 18px auto 0;

  color: var(--muted);

  line-height: 2;

  font-weight: 800;
}

.signature {
  display: block;

  margin-top: 27px;

  color: white;

  font-weight: 900;
}

.again-button {
  margin-top: 30px;

  min-height: 48px;

  padding: 0 20px;

  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.04);

  color: #ffd6e7;

  font-weight: 800;

  cursor: pointer;
}

footer {
  padding: 30px 20px max(50px, env(safe-area-inset-bottom));

  text-align: center;

  color: #806876;

  font-size: 0.72rem;

  font-weight: 800;
}

/* =========================================
   REVEAL
========================================= */

.reveal {
  opacity: 0;

  transform: translateY(26px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.show {
  opacity: 1;

  transform: translateY(0);
}

/* =========================================
   PARTICLES
========================================= */

.star {
  position: absolute;

  border-radius: 50%;

  background: white;

  animation: starBlink 3s ease-in-out infinite;
}

@keyframes starBlink {
  0%,
  100% {
    opacity: 0.12;
  }

  50% {
    opacity: 0.95;
  }
}

.particle {
  position: absolute;

  border-radius: 50%;

  background: #ff5da2;

  box-shadow: 0 0 12px rgba(255, 93, 162, 0.7);

  animation: particleUp linear infinite;
}

@keyframes particleUp {
  from {
    transform: translateY(110vh);

    opacity: 0;
  }

  15% {
    opacity: 0.75;
  }

  85% {
    opacity: 0.55;
  }

  to {
    transform: translateY(-15vh);

    opacity: 0;
  }
}

.float-heart {
  position: absolute;

  bottom: -30px;

  color: #ff559d;

  opacity: 0.6;

  animation: heartUp linear forwards;
}

@keyframes heartUp {
  0% {
    transform: translate3d(0, 0, 0) scale(0.6);

    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  100% {
    transform: translate3d(var(--drift), -110vh, 0) rotate(360deg) scale(1.1);

    opacity: 0;
  }
}

/* =========================================
   TOUCH
========================================= */

#touchEffect {
  position: fixed;

  z-index: 99999;

  width: 100px;
  height: 100px;

  border-radius: 50%;

  pointer-events: none;

  opacity: 0;

  transform: translate(-50%, -50%) scale(0.2);

  background: radial-gradient(
    circle,
    rgba(255, 71, 151, 0.22),
    transparent 70%
  );
}

#touchEffect.show {
  animation: touchPulse 0.7s ease-out;
}

@keyframes touchPulse {
  from {
    opacity: 0.8;

    transform: translate(-50%, -50%) scale(0.2);
  }

  to {
    opacity: 0;

    transform: translate(-50%, -50%) scale(1.5);
  }
}

/* =========================================
   DESKTOP
========================================= */

@media (min-width: 760px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* =========================================
   SMALL PHONES
========================================= */

@media (max-height: 700px) {
  .hero {
    padding-top: 25px;
  }

  .hero-badge {
    margin-bottom: 18px;
  }

  .photo-area {
    width: min(66vw, 290px);

    margin-bottom: 24px;
  }

  .hero-title {
    font-size: clamp(2.8rem, 15vw, 4.4rem);
  }

  .hero-copy > p {
    font-size: 0.9rem;

    line-height: 1.9;
  }
}

/* =========================================
   VERY NARROW
========================================= */

@media (max-width: 360px) {
  .section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero {
    padding-left: 16px;
    padding-right: 16px;
  }

  .photo-area {
    width: 245px;
  }
}
