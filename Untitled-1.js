// Text Writer Effect
const textWriter = document.getElementById("text-writer");
const phrases = ["I'm a caregiver"];
let currentPhrase = 0;
let currentChar = 0;

function typeWriter() {
    if (currentChar < phrases[currentPhrase].length) {
        textWriter.textContent += phrases[currentPhrase][currentChar];
        currentChar++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

