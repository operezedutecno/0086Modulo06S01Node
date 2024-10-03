console.log("Primer programa con nodejs");

// console.log("Secuencia de números");
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

const peticion1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Respuesta de primera petición")
        }, 8_000);
    })
}

const peticion2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Respuesta de segunda petición")
        }, 3_000);
    })
}

// Ejemplo proceso asíncrono
// peticion1().then((response) => {
//     console.log(response);
// })

// peticion2().then((response) => {
//     console.log(response);
// })
// Fin ejemplo proceso asíncrono


// Ejemplo de función autoejecutable, con proceso síncrono.
// (async () => {
//     const resp1 = await peticion1()
//     console.log(resp1);
//     const resp2 = await peticion2()
//     console.log(resp2);
// })()


// Ejemplo de Promise.all
const resp1 = peticion1();
const resp2 = peticion2();

Promise.all([resp1, resp2]).then((response) => {
    console.log(response);
})


