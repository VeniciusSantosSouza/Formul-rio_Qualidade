document.querySelectorAll('.toggle-submenu').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const submenu = link.nextElementSibling;
        if(submenu.style.display === 'block'){
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});
