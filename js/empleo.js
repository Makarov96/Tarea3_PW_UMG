'use strict'
window.addEventListener('load', () => {

    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var correo = document.querySelector('#correo');
    var puesto_aplicacion = document.querySelector('#puesto');
    var situacion = document.querySelector('#situacion');
    var url = document.querySelector('#url');
    var button = document.querySelector('#submit');
    //Eventos de escucha
    nombre.addEventListener('input', fnVerificar, false);
    apellido.addEventListener('input', fnVerificar, false);
    correo.addEventListener('input', fnVerificar, false);
    url.addEventListener('input', fnVerificar, false);








    function fnVerificar() {
        valNombre();
        valApellido();
        valcorreo();
        valUrl();

    }


    button.addEventListener('click', () => {
        var persona = {
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value,
            url: url.value
        }


        var texto = `
        <h1>Tu nombre: ${persona.nombre}</h1>
        <h1>Tu apellido: ${persona.apellido}</h1>
        <h1>Tu correo: ${persona.correo}</h1>
        <h1>Tu URL del CV: ${persona.url}</h1>
        `

        localStorage.setItem(
            persona.nombre,
            persona.apellido + " " + persona.correo + " " + persona.url

        );

        document.write(texto);


    })


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


    function valApellido() {
        if (hasNumber(apellido.value) == true) {
            apellido.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
            apellido.style.backgroundColor = "red";
        } else if (hasNumber(apellido.value) == false) {
            apellido.setCustomValidity('');
            apellido.style.background = 'transparent';
        }
    }



    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    //verificar correo

    function valcorreo() {

        let valor = correo.value;
        if (!valor.includes('.com') && !valor.includes('@')) {

            correo.setCustomValidity('Necesita ingresar su apellido si que contenga numeros');
            correo.style.backgroundColor = "red";
        } else {
            correo.setCustomValidity('');
            correo.style.background = 'transparent';
        }

    }


    function valUrl() {
        let valor = url.value;
        if (valor.includes('https')) {
            url.setCustomValidity('');
            url.style.background = 'transparent';

        } else {
            url.setCustomValidity('Necesita ingresar una url valida');
            url.style.backgroundColor = "red";
        }

    }





    return fnVerificar()



});