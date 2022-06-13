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

        let lista = respXML.getElementsByTagName('schedule');

        //referencia a la tabla
        let tabla = document.querySelector('#Horario tbody');

        console.log(tabla);
        console.log(lista);

        /******************/
        //recorriendo la lista con el ciclo for
        for (let i=0; i<lista.length; i++){

            let schedule  = document.createElement('tr');    
            let dia   = document.createElement('td');
            let hora = document.createElement('td');      
       
            let listaDias = lista[i].getElementsByTagName('week')[0].children;
            console.log(listaDias.length);

            dia.textContent = '';

            for (let j=0; j<listaDias; j++){
                console.log('lista' + listaDias[j].textContent);
                dia.textContent = dia.textContent +''+ listaDias[j].textContent;
            }
            console.log('lista' + dia.textContent);
    
            schedule.appendChild(dia);
            schedule.appendChild(hora);
    
            tabla.appendChild(schedule);
           
        }  
}