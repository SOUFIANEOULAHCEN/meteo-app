// const navbar = document.getElementById('navbar');
// const close_menu = document.getElementById('close-menu');

// close_menu.addEventListener('click', () => {
//     // Bascule la visibilité du menu
//     navbar.classList.toggle('hidden');
    
//     // Alterne entre l'icône du menu et celle de fermeture
//     if (navbar.classList.contains('sm:hidden')) {
//         close_menu.classList.add('ri-menu-fold-line');
//         close_menu.classList.remove('ri-close-line');
//     } else {
//         close_menu.classList.add('ri-close-line');
//         close_menu.classList.remove('ri-menu-fold-line');
//     }
// });


// const navbar = document.getElementById('navbar');
// const close_menu = document.getElementById('close-menu');

// close_menu.addEventListener('click', () => {
//     // Bascule la visibilité du menu
//     navbar.classList.toggle('hidden flex');
    
//     // Alterne entre l'icône du menu et celle de fermeture
//     if (navbar.classList.contains('hidden')) {
//         close_menu.classList.add('ri-menu-fold-line');
//         close_menu.classList.remove('ri-close-line');
//     } else {
//         close_menu.classList.add('ri-close-line');
//         close_menu.classList.remove('ri-menu-fold-line');
//     }
// });


// let modes = document.querySelectorAll('#light-mode');
// modes.forEach((mode) => {
//     mode.addEventListener('click', () => {
//         mode.classList.toggle('ri-moon-fill');
//         // mode.classList.toggle('ri-sun-fill');
//         if(mode.classList.contains('ri-sun-fill')){
//             mode.classList.remove('ri-sun-fill');
//             mode.classList.add('ri-moon-fill');
//         }else{
//             mode.classList.add('ri-sun-fill');
//             mode.classList.remove('ri-moon-fill');
//         }
//     });
//   });
// ri-menu-line
// ri-close-line
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

menu.addEventListener('click' , ()=>{
    if(menu.classList.contains('ri-menu-line')){
        menu.classList.remove('ri-menu-line');
        menu.classList.add('ri-close-line');
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('block');

    }else{
        menu.classList.remove('ri-close-line');
        menu.classList.add('ri-menu-line');
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('block');

    }
});