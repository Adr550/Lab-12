

const lista = [{make:'item2',model:216,color:'Black'},
               {make:'Mi Max', model:2, color:'Gold'},
               {make:'Samsung',model:7,color:'Blue'}
            ];
const var1 = (lista) => {
    for (let i = 0; i < lista.length - 1; i++) {
    const actual = lista[i].model;
    const siguiente = lista[i + 1].model;
        while (actual > siguiente) {
        lista.splice(i+1,0,lista[i])
    }

}
   

    }
