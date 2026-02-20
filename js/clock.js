/* ============================================
   clock.js — Live klok in de statusbalk
   ============================================ */

function updateClock() {
    const el = document.getElementById('clock');
    if (!el) return;

    const now  = new Date();
    const time = now.toTimeString().slice(0, 8); // HH:MM:SS
    el.textContent = time + ' UTC+1';
}

setInterval(updateClock, 1000);
updateClock();