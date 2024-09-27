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

    // Fecha todos os submenus quando clica fora deles
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dp-menu')) {
            closeAllSubmenus();
        }
    });

    // Fecha todos os submenus quando a tecla "Esc" é pressionada
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllSubmenus();
        }
    });

    function closeAllSubmenus() {
        var submenus = document.querySelectorAll('.dp-menu ul ul');
        submenus.forEach(function(submenu) {
            submenu.style.display = 'none';
        });
    }
});

