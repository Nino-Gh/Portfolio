// Handle page load animation and theme persistence
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeIcons(true);
  } else {
    updateThemeIcons(false);
  }
});

// Slide in animation on full page load
window.addEventListener('load', () => {
  const animatedEls = document.querySelectorAll('.animate-slide');
  animatedEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 100);
  });
});

// Project view buttons that leads to the linked projects
document.querySelector('.advice-btn').addEventListener('click', () => {
  window.open('https://github.com/Nino-Gh/Random-Advice.git', '_blank');
});

document.querySelector('.rating-btn').addEventListener('click', () => {
  window.open('https://github.com/Nino-Gh/Interactive-Rating.git', '_blank');
});

document.querySelector('.food-timer-btn').addEventListener('click', () => {
  window.open('https://www.figma.com/design/FfJSVs8nPu2afY4DxXzFSe/Food-Timer?node-id=0-1&p=f&t=yD6kaHlLlLE4NuIg-0', '_blank');
});

// Social icons leading to the given links
document.querySelector('.socials-logo img[alt="github logo"]').addEventListener('click', () => {
  window.open('https://github.com/Nino-Gh', '_blank');
});

document.querySelector('.instagram-logo').addEventListener('click', () => {
  window.open('https://www.instagram.com/_nini.gh_/', '_blank');
});

// Theme toggle functionality
const sunIcons = document.querySelectorAll('.sun-icon');

sunIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  });
});

function updateThemeIcons(isDark) {
  sunIcons.forEach(icon => {
    icon.src = isDark ? 'images/moon.svg' : 'images/sun.svg';
    icon.alt = isDark ? 'moon icon' : 'sun icon';
  });
}
