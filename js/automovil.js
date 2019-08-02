'use strict'


window.addEventListener('load', () => {


    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var email = document.querySelector('#email');
    var celular = document.querySelector('#celular');
    var codigo = document.querySelector('#codigo');

    //Listener
    nombre.addEventListener('input', main, false);
    apellido.addEventListener('input', main, false);
    email.addEventListener('input', main, false);
    celular.addEventListener('input', main, false);
    codigo.addEventListener('input', main, false);





    function main() {
        valNombre()
        valApellido()
        valcorreo()
        valCelphone()
    }




    function valNombre() {

        if (hasNumber(nombre.value) == true) {
            nombre.setCustomValidity('Necesita ingresar su nombre si que contenga numeros');
            nombre.style.backgroundColor = "red";
        } else if (hasNumber(nombre.value) == false) {
            nombre.setCustomValidity('');
            nombre.style.background = 'transparent';
        }
    }

    function valCelphone() {
        if (hasCel(celular.value)) {
            celular.setCustomValidity('Ah ingresado un numero invalido');
            celular.style.backgroundColor = "red";
        } else {
            celular.setCustomValidity('');
            celular.style.background = 'transparent';
        }
    }


    function hasCel(texto) {
        if (texto.match(/[a-z-A-Z]/i)) {
            return true
        } else {
            return false
        }
    }


    function valApellido() {

        if (hasNumber(apellido.value) == true) {
            apellido.setCustomValidity('Necesita ingresar su nombre si que contenga numeros');
            apellido.style.backgroundColor = "red";
        } else if (hasNumber(apellido.value) == false) {
            apellido.setCustomValidity('');
            apellido.style.background = 'transparent';
        }
    }

    function valcorreo() {

        if (hasEmail(email.value)) {
            email.setCustomValidity('');
            email.style.background = 'transparent';

        } else {

            email.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
            email.style.backgroundColor = "red";
        }

    }

    function hasEmail(myString) {

        if (myString.includes('.com') && myString.includes('@')) {
            return true;
        } else {
            return false;
        }

    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    }





    return main()


});