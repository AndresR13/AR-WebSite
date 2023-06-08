window.onload = function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

const nav = document.getElementById('menu');
const abrir = document.getElementById('open_bars');
const cerrar = document.getElementById('close_bars');
abrir.addEventListener('click', () => {
    nav.classList.add('visible');
    abrir.classList.add('ocultar');
    cerrar.classList.add('mostrar');
})
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
    abrir.classList.remove('ocultar');
    cerrar.classList.remove('mostrar');
})