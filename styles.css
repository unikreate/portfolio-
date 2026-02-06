// Smooth enter scroll
document.getElementById("enterBtn").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Reveal animation on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 150) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s ease";
});
