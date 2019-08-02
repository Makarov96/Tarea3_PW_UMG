'use strict'

window.addEventListener('load', () => {

    var nombre_uno = document.querySelector('#nombre_uno');
    var nombre_dos = document.querySelector('#nombre_dos');
    var direccion = document.querySelector('#direccion');
    var apt = document.querySelector('#apartamento');
    var pais = document.querySelector('#pais');
    var tarjeta = document.querySelector('#tarjeta');
    var numero = document.querySelector('#numero');
    var cvc = document.querySelector('#cvc');
    var mes = document.querySelector('#mes');
    var year = document.querySelector('#year');
    //Listener
    nombre_uno.addEventListener('input', main, false);
    nombre_dos.addEventListener('input', main, false);
    direccion.addEventListener('input', main, false);
    apt.addEventListener('input', main, false);
    pais.addEventListener('input', main, false);
    tarjeta.addEventListener('input', main, false);
    numero.addEventListener('input', main, false);
    cvc.addEventListener('input', main, false);
    mes.addEventListener('input', main, false);
    year.addEventListener('input', main, false);



    function main() {
        valNombre()
        valNombre_dos()
        valCvc()
    }



    function valNombre() {

        if (hasNumber(nombre_uno.value) == true) {
            nombre_uno.setCustomValidity('Necesita ingresar su nombre si que contenga numeros');
            nombre_uno.style.backgroundColor = "red";
        } else if (hasNumber(nombre_uno.value) == false) {
            nombre_uno.setCustomValidity('');
            nombre_uno.style.background = 'transparent';
        }
    }

    function valNombre_dos() {

        if (hasNumber(nombre_dos.value) == true) {
            nombre_dos.setCustomValidity('Necesita ingresar su nombre si que contenga numeros');
            nombre_dos.style.backgroundColor = "red";
        } else if (hasNumber(nombre_dos.value) == false) {
            nombre_dos.setCustomValidity('');
            nombre_dos.style.background = 'transparent';
        }
    }


    function valNombre_dos() {

        if (Validate(direccion)) {
            direccion.setCustomValidity('Necesita ingresar su nombre si que contenga numeros');
            direccion.style.backgroundColor = "red";
        } else {
            direccion.setCustomValidity('');
            direccion.style.background = 'transparent';
        }
    }

    function valCvc() {

        console.log(cvc.value)
        if (hasLetter(cvc.value)) {
            cvc.setCustomValidity('Necesita ingresar su cvc sin que contenga letras');
            cvc.style.backgroundColor = "red";
        } else {
            cvc.setCustomValidity('');
            cvc.style.background = 'transparent';
        }

    }

    function hasLetter(texto) {
        if (texto.match(/[a-z-A-Z]/i)) {
            return true
        } else {
            return false
        }
    }



    function Validate(myText) {
        //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
        var regex = /^[A-Za-z0-9 ]+$/

        //Validate TextBox value against the Regex.
        var isValid = regex.test(myText.value);
        if (!isValid) {
            return true;
        } else {
            return false;
        }


    }

    return main;

});