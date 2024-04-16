document.addEventListener("DOMContentLoaded", function() {
    const abrirMenuBtn = document.getElementById('abrir');
    const cerrarMenuBtn = document.getElementById('cerrar');
    const nav = document.getElementById('nav');

    abrirMenuBtn.addEventListener('click', function() {
        nav.classList.add('activo');
        abrirMenuBtn.style.display = 'none';
        cerrarMenuBtn.style.display = 'block';
    });

    cerrarMenuBtn.addEventListener('click', function() {
        nav.classList.remove('activo');
        abrirMenuBtn.style.display = 'block';
        cerrarMenuBtn.style.display = 'none';
    });
});
