const lista = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const elementosABorrar = ['amarillo', 'cafe', 'blanco'];

// Conserva los elementos que no aparecen en la lista de elementos a borrar.
const eliminarElementos = (lista, elementosABorrar) => {
    return lista.filter(elemento => !elementosABorrar.includes(elemento));
};

const restantes = eliminarElementos(lista, elementosABorrar);
console.log(restantes);
