'use strict'

window.addEventListener('load', () => {


    var click_uno = document.querySelector('#click_uno');
    var click_dos = document.querySelector('#click_dos');
    var click_tres = document.querySelector('#click_tres');
    var click_cuatro = document.querySelector('#click_cuatro');
    var click_cinco = document.querySelector('#click_cinco');

    click_uno.addEventListener('click', () => {

        window.location = "../index.html"
    })

    click_dos.addEventListener('click', () => {
        window.location = "../solicitud_empledo.html"

    })

    click_tres.addEventListener('click', () => {
        window.location = "../reservacion_hotel.html"

    })

    click_cuatro.addEventListener('click', () => {
        window.location = "../metodo_de_pago.html"
    })


    click_cinco.addEventListener('click', () => {
        window.location = "../cotizacion_vechiculo.html"
    })












});