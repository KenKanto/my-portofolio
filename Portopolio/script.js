// ==========================================================
// Kanto — Portfolio
// ==========================================================

// 1. Fade-in on scroll (elements with class "reveal")
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 },
    );

    items.forEach((el, i) => {
        el.style.transitionDelay = (i % 4) * 90 + "ms"; // small stagger
        io.observe(el);
    });
} else {
    // Fallback for very old browsers: just show everything
    items.forEach((el) => el.classList.add("is-visible"));
}

// 2. Footer year
document.getElementById("year").textContent = new Date().getFullYear();
