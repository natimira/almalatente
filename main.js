// MENU HAMBURGUESA
    //Se obtienen los elementos del DOM con las clases .burger y .nav-links mediante el método querySelector
    const hamburguesa = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    //Se añade un evento click al elemento hamburguesa, que al hacer click, añade o remueve la clase active a los elementos hamburguesa y navLinks
    hamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburguesa.classList.toggle('active');
    });