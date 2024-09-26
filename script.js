// script.js
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.dp-menu > ul > li > a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', toggleSubmenu);
        item.addEventListener('touchstart', toggleSubmenu);
    });

    function toggleSubmenu(event) {
        var submenu = this.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') {
            event.preventDefault(); // Impede o comportamento padrão do link apenas se houver um submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    }

    // Adiciona um evento de clique aos links do submenu para garantir que eles funcionem
    var submenuLinks = document.querySelectorAll('.dp-menu ul ul li a');
    submenuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique no link feche o submenu
        });
        link.addEventListener('touchstart', function(event) {
            event.stopPropagation(); // Impede que o toque no link feche o submenu
        });
    });
});
