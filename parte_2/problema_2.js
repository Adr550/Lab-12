const lista = [
    {make: 'item2', model: 216, color: 'Black'},
    {make: 'Mi Max', model: 2, color: 'Gold'},
    {make: 'Samsung', model: 7, color: 'Blue'}
];

// Ordena la lista de menor a mayor según la clave indicada.
const var1 = (lista, key) => {
    return lista.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
};

const key = 'model'; // También puedes usar 'make' o 'color'.
console.log(var1(lista, key));
