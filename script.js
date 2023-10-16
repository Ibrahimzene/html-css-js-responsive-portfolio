function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } 
  
/* function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    if (menuLinks.classList.contains('open')) {
      menuLinks.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    } else {
      menuLinks.classList.add('open');
      hamburgerIcon.classList.add('open');
    }
  }  */
  