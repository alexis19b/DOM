import hamburguerMenu from "./dom/menu-hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import {moveBall, shortcuts} from "./dom/teclado.js";
import countdown from "./dom/cuenta-regresiva.js";
import scrollTopButton from "./dom/botton-scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion-dispositivos.js";
import networkStatus from "./dom/deteccion-red.js";
import webCam from "./dom/deteccion-webcam.js";
import getGeolation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro-busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll-espia.js";



    const d = document;
    
    d.addEventListener("DOMContentLoaded", (e) => {
        
        hamburguerMenu(".panel-btn", ".panel", ".menu a");
        digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj" );
        alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
        countdown("countdown", "Sep 10, 2021 08:00:00", "Graduacion de Henry como Desarrollador FullStack");
        scrollTopButton(".scroll-top-btn");
        responsiveMedia(
            "youtube", 
            "(min-width: 1024px)", 
            `<a href = "https://www.youtube.com/embed/Nrp3c6kNyAw" target= "_blank" rel = "noopener">Ver Video</a>`, 
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/Nrp3c6kNyAw" 
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe`);
        responsiveMedia(
            "gmaps", 
            "(min-width: 1024px)", 
            `<a href = "https://goo.gl/maps/d8SmBH2chhgSyLWz9" target= "_blank" rel = "noopener">Ver Mapa</a>`,
            `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126231.26933314886!2d-70.30558918685031!3d8.622170582475945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b583bb9f6f665%3A0x6b4ce066ae95450c!2sBarinas%205201%2C%20Barinas!5e0!3m2!1ses!2sve!4v1619811962773!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
            responsiveTester("responsive-tester");
            userDeviceInfo("user-device");
            webCam("webcam");
            getGeolation("geolocation");
            searchFilters(".card-filter",".card");
            draw("#winner-btn",".player");
            slider();
            scrollSpy();
    });

    d.addEventListener("keydown", (e) => {
        shortcuts(e);
        moveBall(e, ".ball", ".stage");
    })

    darkTheme(".dark-theme-btn", "dark-mode");
    networkStatus();