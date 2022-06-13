

window.addEventListener('scroll', () => {

    let altoventana = window.innerHeight;

    //console.log('alto de la ventana' + altoventana);

    //scrolltop es lo que he bajado desde el inicio de la pagina
    let cantidadScroll = document.documentElement.scrollTop;

    //console.log('cantidad de scrolls' + cantidadScroll);

    let entrada = document.querySelector(".animaintro");
    // a que altura se dibuja, tomar las dimensiones de la img, en este caso necesitamos las dimensiones de la zona superior

    
    let esqnSup = entrada.getBoundingClientRect().top;

    //console.log('parte superior' + esqnSup);

    /*
    alto de la ventana625
    cantidad de scrolls1
    parte superior98.140625*/

    
    if (cantidadScroll < altoventana){
        document.querySelector('.animaintro').style.animation = 'aparece 1500ms ease-in-out 250ms';
    }


} );

