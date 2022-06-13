let xhr = new XMLHttpRequest(); 
//variable xhr que es la instancia de la libreria XMLHttpRequest 
xhr.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        ///... Accion a realizar cuando esté completa la carga        
        listaHorario(this);
    } 
}; 

    //la accion a realizar sobre el elemento
    xhr.open("GET", "../data/consultahorario.xml", true); //true, la peticion es asincrona, false es sincrona
    xhr.send(); //dibujar la data en el index.HTML principal


    //definiendo la funcion ListarMovies
    function listaHorario(objXML){
        //leer la respuesta de la peticion
        let respXML = objXML.responseXML; 
        
       console.log(respXML);

        let lista = respXML.getElementsByTagName('horario');

        //referencia a la tabla
        let tabla = document.querySelector('table tbody');

        console.log(tabla);
        console.log(lista);

        /******************/
        //recorriendo la lista con el ciclo for
        for (let i=0; i<lista.length; i++){

            let schedule  = document.createElement('tr');    
            let dia   = document.createElement('td');
            let hora = document.createElement('td');      
       
            //console.log(lista[i].getElementsByTagName('dia')[0].textContent);
            
            dia.textContent = lista[i].getElementsByTagName('dia')[0].textContent; 

            hora.textContent = lista[i].getElementsByTagName('hora')[0].textContent; 

            schedule.appendChild(dia);
            schedule.appendChild(hora);
            tabla.appendChild(schedule);
            
           
        }  
}