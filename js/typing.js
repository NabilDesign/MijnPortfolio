/* ============================================
   typing.js — Typing animatie in de hero
   ============================================ */

// ✏️ Pas deze woorden aan naar jouw specialisaties
const words = [
    'SOC Analysis',
    'Threat Detection',
    'Log Monitoring',
    'Blue Team Ops',
    'Incident Response',
];

let wordIndex  = 0;
let charIndex  = 0;
let isDeleting = false;

const typedEl = document.getElementById('typed-text');

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // Voeg een letter toe
        typedEl.textContent = currentWord.slice(0, ++charIndex);

        if (charIndex === currentWord.length) {
            // Woord volledig → pauzeer, dan verwijder
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        // Verwijder een letter
        typedEl.textContent = currentWord.slice(0, --charIndex);

        if (charIndex === 0) {
            // Leeg → volgend woord
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    // Verwijderen is iets sneller dan typen
    const speed = isDeleting ? 60 : 90;
    setTimeout(type, speed);
}

type();