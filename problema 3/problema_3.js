const X = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Convierte las columnas en filas usando funciones flecha (lambda).
const transponer = (matriz) => {
    if (matriz.length === 0) return [];

    return matriz[0].map((_, columna) => matriz.map(fila => fila[columna]));
};

const transpuesta = transponer(X);
console.log(transpuesta);
