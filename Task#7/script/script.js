const links = document.querySelectorAll('a');
const httpsLinks = Array.from(links).filter((link) => link.href.includes('https'));

httpsLinks.forEach((link) => link.classList.add('color-red'));