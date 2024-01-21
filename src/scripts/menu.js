document.getElementById('hamburger-icon').addEventListener('click', () => {
  console.log('clicked');
  document.getElementById('sidebar').classList.toggle('wide');
  document.getElementById('hamburger').classList.toggle('open');
});