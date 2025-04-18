document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('Active');
  });
});