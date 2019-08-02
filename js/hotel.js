'use strict'

window.addEventListener('load', () => {


    var nombre = document.querySelector('#nombre');
    var correo = document.querySelector('#correo');
    var celular = document.querySelector('#celular');
    var pais = document.querySelector('#pais');
    var ciudad = document.querySelector('#ciudad');
    var buton = document.querySelector('#boton');
    var div = document.querySelector('#container_dos');
    //Listener
    nombre.addEventListener('input', main, false);
    correo.addEventListener('input', main, false);
    celular.addEventListener('input', main, false);
    numero_personas.addEventListener('input', main, false);
    pais.addEventListener('input', main, false);
    ciudad.addEventListener('input', main, false);





    function main() {
        valNombre();
        valEmail();
        valCelphone();
        valPais();
        valCiudad();


    }

    var informacion = {
        nombre: nombre.value,
        correo: correo.value,
        celular: celular.value,
        pais: pais.value,
        numero_personas: numero_personas.value,
        ciudad: ciudad.value
    }

    var text = `
    <i class="material-icons">flight_takeoff</i>
    <h3>Tu nombre es: ${informacion.nombre}</h3>
    <h3>Tu Correo es: ${informacion.correo}</h3>
    <h3>Tu celular es: ${informacion.celular}</h3>
    <h3>El pais al que vas es: ${informacion.pais}</h3>
    <h3>El numero de personas que llevas es:${informacion.numero_personas}</h3>
    <h3>A la ciudad que vas es: ${informacion.ciudad}</h3>
    `

    buton.addEventListener('click', () => {


        div.innerHTML = text;

        sessionStorage.setItem(informacion.nombre, informacion.correo +
            " " + informacion.celular +
            " " + informacion.pais + " " + informacion.numero_personas +
            " " + informacion.ciudad
        )

    });


    function valNombre() {
        if (hasNumber(nombre.value) == true) {
            nombre.setCustomValidity('Ah ingresado un numero en la categoria nombre');
            nombre.style.backgroundColor = "red";
        } else if (hasNumber(nombre.value) == false) {
            nombre.setCustomValidity('');
            nombre.style.background = 'transparent';
        }
    }


    function valEmail() {
        if (!hasEmail(correo.value)) {
            correo.setCustomValidity('Ah ingresado un correo invalido');
            correo.style.backgroundColor = "red";
        } else {
            correo.setCustomValidity('');
            correo.style.background = 'transparent';
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

    function valPais() {
        if (hasNumber(pais.value) == true) {
            pais.setCustomValidity('Ah ingresado un nombre de pais invalido');
            pais.style.backgroundColor = "red";
        } else if (hasNumber(pais.value) == false) {
            pais.setCustomValidity('');
            pais.style.background = 'transparent';
        }
    }


    function valCiudad() {
        if (hasNumber(ciudad.value) == true) {
            ciudad.setCustomValidity('Ah ingresado un nombre de ciudad ');
            ciudad.style.backgroundColor = "red";
        } else if (hasNumber(ciudad.value) == false) {
            ciudad.setCustomValidity('');
            ciudad.style.background = 'transparent';
        }
    }




    function hasCel(texto) {
        if (texto.match(/[a-z-A-Z]/i)) {
            return true
        } else {
            return false
        }
    }


    function hasEmail(myParam) {
        if (!myParam.includes('.com') && !myParam.includes('@')) {
            return false
        } else {
            return true
        }
    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    }


    return main;
});