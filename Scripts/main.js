const ITEMS= 'items';

let getInicio = () => {
    $.get("data.json", function(respuesta, estado){
        if(estado === "success"){
            jsonReader(respuesta);
        }
    });
}

this.lista= [];
this.listaItems= [];

let jsonReader= () => {
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
}

let initLista= () => {
    tempLista= json.parse(localStorage.getItem(ITEMS));
    if(tempLista == null || tempLista == undefined){
        localStorage.setItem(ITEMS, JSON.stringify(lista));
    }else{
        lista= tempLista;
    }
    lista.map((item) => {
        i= product.id;
        //AGREGAR FUNCION PARA AGREGAR HTML
    })
}
