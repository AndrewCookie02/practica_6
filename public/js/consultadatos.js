let BtnMuseo = document.getElementById('BtnVer');

BtnMuseo.onclick=()=>{
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


            contenido = contenido + "<div class='card' style='width: 18rem;'" +
                                    "<h2 class='card-title'>" + lista[i].getElementsByTagName('nombre')[0].textContent + "</h2>" +
                                    "<img class='card-img-top' src='../public/img/" + lista[i].getElementsByTagName('foto')[0].textContent + "' alt=''>" +
                                " <div class='card-body'>" +
                                "<p>" + lista[i].getElementsByTagName('lugar')[0].getAttribute('ciudad') + lista[i].getElementsByTagName('lugar')[0].getAttribute('pais') + "</p>" +
                                "<p>"+ lista[i].getElementsByTagName('fundacion')[0].textContent + "</p>" +
                                "<p>"+lista[i].getElementsByTagName('descripcion')[0].textContent+"</p>" +
                                "<p>" + 
                                //categorias.textContent
                                "</p>" +
                                "<a href=" + lista[i].getElementsByTagName('link')[0].textContent + " 'class='btn btn-primary'>Visita el sitio</a>" +
                                "</div>" +
                                "</div>"
        //console.log(contenido);
        card.innerHTML = contenido;

        //coleccion.appendChild(categorias);
        //card.appendChild(coleccion);
        }

}

