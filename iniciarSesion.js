
const iniciarSesion = document.getElementById('iniciarSesion');
const ventanaIniciarSesion = document.getElementById('ventanaIniciarSesion');

iniciarSesion.addEventListener('click', function () {
   if (ventanaIniciarSesion.style.display === 'none') {
        ventanaIniciarSesion.style.display = 'block';} 

    else {ventanaIniciarSesion.style.display = 'none';}});
