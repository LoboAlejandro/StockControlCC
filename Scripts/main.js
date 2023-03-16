const ITEMS= 'items';

function getInicio() {
    $.get("Scripts/data.json", function(respuesta, estado){
        if(estado === "success"){
            jsonReader(respuesta);
        }
    });
}
getInicio();

this.lista= [];
this.listaItems= [];

function jsonReader(respuesta){
    i=0;
    for(const dato of respuesta){
        i++;
        const item = {
            "id": `${i}`,
            "mayus": `${dato.mayus}`,
            "nombre": `${dato.nombre}`,
            "precio": `${dato.precio}`,
            "stock": `${dato.stock}`,
            "imagen": `${dato.imagen}`,
            "oferta": `${dato.oferta}`
        };
        lista.push(item);
    }
    initLista();
}

function initLista() {
    tempLista= JSON.parse(localStorage.getItem(ITEMS));
    if(tempLista == null || tempLista == undefined){
        localStorage.setItem(ITEMS, JSON.stringify(lista));
    }else{
        lista= tempLista;
    }
    lista.map((item) => {
        i= item.id;
        //AGREGAR FUNCION PARA AGREGAR HTML
        console.log(item)
    })
}
