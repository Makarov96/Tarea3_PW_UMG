'use strict'

window.addEventListener('load', () => {


    //declaraciones
    var nombre = document.querySelector('#nombre');
    var apellidos = document.querySelector('#apellido');
    var tipo_identificaion = document.querySelector('#select');
    var password = document.querySelector('#password');
    var email = document.querySelector('#email');
    var submit = document.querySelector('#submit');
    var id_user = document.querySelector('#id_user');
    //escucha
    nombre.addEventListener('input', validar, false);
    email.addEventListener('input', validar, false);
    apellidos.addEventListener('input', validar, false);
    tipo_identificaion.addEventListener('input', validar, false);
    id_user.addEventListener('input', validar, false);
    password.addEventListener('input', validar, false);




    function validar() {
        valNombre();
        valApellido();
        valWorker();
    }




    //Validamos el nombre
    function valNombre() {
        if (hasNumber(nombre.value) == true) {
            nombre.setCustomValidity('Ah ingresado un numero en la categoria nombre');
            nombre.style.backgroundColor = "red";
        } else if (hasNumber(nombre.value) == false) {
            nombre.setCustomValidity('');
            nombre.style.background = 'transparent';
        }
    }

    //Validamos el apellido
    function valApellido() {
        if (hasNumber(apellidos.value) == true) {
            apellidos.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
            apellidos.style.backgroundColor = "red";
        } else if (hasNumber(apellidos.value) == false) {
            apellidos.setCustomValidity('');
            apellidos.style.background = 'transparent';
        }
    }

    //Determina si la cadena tiene numeros
    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    //Funcion validar si es medico

    function valWorker() {

        if (tipo_identificaion.value == "Medico") {
            if (id_user.value == "MD-123") {
                id_user.setCustomValidity('');
                id_user.style.background = 'transparent';
            } else {
                id_user.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
                id_user.style.backgroundColor = "red";
            }
        } else if (tipo_identificaion.value == "Cirujano") {
            if (id_user.value == "CJ-123") {
                id_user.setCustomValidity('');
                id_user.style.background = 'transparent';
            } else {
                id_user.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
                id_user.style.backgroundColor = "red";
            }
        } else if (tipo_identificaion.value == "Medico-Cirujano") {
            if (id_user.value == "MCJ-123") {
                id_user.setCustomValidity('');
                id_user.style.background = 'transparent';
            } else {
                id_user.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
                id_user.style.backgroundColor = "red";
            }

        } else if (tipo_identificaion.value == "Enfermero") {
            if (id_user.value == "EN-123") {
                id_user.setCustomValidity('');
                id_user.style.background = 'transparent';
            } else {
                id_user.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
                id_user.style.backgroundColor = "red";
            }

        }

    }



    return validar


});