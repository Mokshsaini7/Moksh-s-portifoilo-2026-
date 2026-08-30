// ==============================
// MOBILE NAVIGATION
// ==============================

const mobileToggle = document.getElementById("mobileToggle");
const mobileDrawer = document.getElementById("mobileDrawer");

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
  });
}


// ==============================
// CLOSE MOBILE MENU AFTER CLICK
// ==============================

document.querySelectorAll(".drawer-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
  });
});


// ==============================
// FAQ ACCORDION
// ==============================

document.querySelectorAll(".faq-item").forEach((item) => {
  const header = item.querySelector(".faq-header");

  if (header) {
    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});


// ==============================
// SERVICE CARDS
// ==============================

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    
    // Remove active class from all cards
    document.querySelectorAll(".service-card").forEach((item) => {
      item.classList.remove("active");
    });

    // Activate clicked card
    card.classList.add("active");
  });
});


// ==============================
// AVATAR MOUSE EFFECT
// ==============================

const character = document.getElementById("characterImg");

if (character && window.innerWidth > 768) {
  character.addEventListener("mousemove", (event) => {
    const rect = character.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    character.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  character.addEventListener("mouseleave", () => {
    character.style.transform = "rotateX(0) rotateY(0)";
  });
}
