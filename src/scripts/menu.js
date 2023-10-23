document.addEventListener('astro:page-laod', () => { //make mobile menu interactive after navigating to a new page
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
})