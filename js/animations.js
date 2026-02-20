/* ============================================
   animations.js — Scroll reveal + skill bars
   ============================================ */

// --- Scroll reveal voor .reveal elementen ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});


// --- Skill progress bars animeren bij scrollen ---
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                // data-w="60" → width: 60%
                bar.style.width = bar.dataset.w + '%';
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-cols').forEach(el => {
    barObserver.observe(el);
});