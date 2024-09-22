const sm_navbar = document.getElementById('sm-navbar');
const menu_icon = document.getElementById('menu-icon');

menu_icon.addEventListener('click', () => {
    // Bascule la visibilité du menu
    sm_navbar.classList.toggle('sm:hidden');
    
    // Alterne entre l'icône du menu et celle de fermeture
    if (sm_navbar.classList.contains('sm:hidden')) {
        menu_icon.classList.add('ri-menu-fold-line');
        menu_icon.classList.remove('ri-close-line');
    } else {
        menu_icon.classList.add('ri-close-line');
        menu_icon.classList.remove('ri-menu-fold-line');
    }
});

let modes = document.querySelectorAll('#light-mode');
modes.forEach((mode) => {
    mode.addEventListener('click', () => {
        mode.classList.toggle('ri-moon-fill');
        // mode.classList.toggle('ri-sun-fill');
        if(mode.classList.contains('ri-sun-fill')){
            mode.classList.remove('ri-sun-fill');
            mode.classList.add('ri-moon-fill');
        }else{
            mode.classList.add('ri-sun-fill');
            mode.classList.remove('ri-moon-fill');
        }
    });
  });