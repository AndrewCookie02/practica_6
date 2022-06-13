let animacard = document.getElementById('lista');

let BtnMuseo = document.getElementById('BtnVer');

BtnMuseo.onclick=()=>{
    animacard.style.animation = 'aparece 1500ms ease-in-out 250ms';
    let xhr = new XMLHttpRequest(); 
    //variable xhr que es la instancia de la libreria XMLHttpRequest 
    xhr.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            ///... Accion a realizar cuando esté completa la carga        
            Vermuseos(this);
        } 
    }; 

    //la accion a realizar sobre el elemento
    xhr.open("GET", "../data/museos.xml", true); //la peticion es asincrona
    xhr.send();
}

    //definiendo la funcion ListarMovies
    function Vermuseos(objXML){
        //leer la respuesta de la peticion
        let respXML = objXML.responseXML; 


        let lista = respXML.getElementsByTagName('museo');

        

        //referencia a la tabla
        let card = document.querySelector('#lista');

        let contenido = "";
        //console.log(card);
        //console.log(lista);


        /******************/
        //recorriendo la lista

        for (let i=0; i<lista.length; i++){
       /*let coleccion = document.createElement ('ul') ;
        let categorias = document.createElement('li');  

        let listacoleccion = lista[i].getElementsByTagName('coleccion')[0].children;
            console.log(listacoleccion);
            categorias.textContent = '';

            for (let j=0; j<listacoleccion.length; j++){          
                console.log(listacoleccion[j].textContent);
                categorias.textContent = categorias.textContent + ' ' + listacoleccion[j];
           }*/


            contenido = contenido + "<div class='card'" +
                                    "<h4 class='card-title '> </h4>" +
                                    "<h4 class='card-title texto-txt1'>" + lista[i].getElementsByTagName('nombre')[0].textContent +"</h4>" +
                                    "<img class='card-img-top' src='../public/img/" + lista[i].getElementsByTagName('foto')[0].textContent + "' alt=''>" +
                                " <div class='card-body'>" +
                                "<p class='texto-txt2'>" + lista[i].getElementsByTagName('lugar')[0].getAttribute('ciudad') + lista[i].getElementsByTagName('lugar')[0].getAttribute('pais') + "</p>" +
                                "<p class='texto-txtp'>"+ lista[i].getElementsByTagName('fundacion')[0].textContent + "</p>" +
                                "<p class='texto-txtp'>"+lista[i].getElementsByTagName('descripcion')[0].textContent+"</p>" +
                                "<p class='texto-txtp'>" + 
                                //categorias.textContent
                                "</p>" +
                                "<a href='"+ lista[i].getElementsByTagName('link')[0].textContent +"'>Visita el sitio</a>"+
                                "</div>" +
                                "</div>"

                                
        //console.log(contenido);
        card.innerHTML = contenido;

        //coleccion.appendChild(categorias);
        //card.appendChild(coleccion);
        }

}


