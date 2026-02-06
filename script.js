/* ===================== SCROLL REVEAL ===================== */
const sections = document.querySelectorAll(".section");

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();

/* ===================== HERO BUTTONS ===================== */
const enterBtn = document.getElementById("enterWorld");
const contactBtn = document.getElementById("contactMe");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });
    });
}

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

/* ===================== PARALLAX FEEL ===================== */
window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.getElementById("world-background").style.transform =
        `translate(${x}px, ${y}px)`;
});
