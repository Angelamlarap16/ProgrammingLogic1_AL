// Solicitar los tres números al usuario
let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let numero3 = Number(prompt("Ingresa el tercer número:"));

// Encontrar el elemento en el DOM usando el ID
const resultado = document.getElementById("resultado");

// Verificar que los valores ingresados sean números
if (
    Number.isNaN(numero1) ||
    Number.isNaN(numero2) ||
    Number.isNaN(numero3)
) {
    console.log("Error: debes ingresar solamente números.");
    resultado.innerHTML = `
        <p>Error: debes ingresar solamente números.</p>
    `;
} else {
    // Crear un arreglo con los tres números
    const numeros = [numero1, numero2, numero3];
    
    // Ordenar de mayor a menor
    const mayorAMenor = [...numeros].sort((a, b) => b - a);
    
    // Ordenar de menor a mayor
    const menorAMayor = [...numeros].sort((a, b) => a - b);
    
    // Mostrar resultados en consola
    console.log("De mayor a menor:", mayorAMenor);
    console.log("De menor a mayor:", menorAMayor);
    
    // Verificar si los tres números son iguales
    let mensajeIguales = "";
    if (numero1 === numero2 && numero2 === numero3) {
        mensajeIguales = "Los tres números son iguales.";
        console.log(mensajeIguales);
    }
    
    // Cambiar el contenido del HTML inyectando los resultados con innerHTML
    resultado.innerHTML = `
        <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(", ")}</p>
        <p><strong>De menor a mayor:</strong> ${menorAMayor.join(", ")}</p>
        ${mensajeIguales ? `<p><strong>${mensajeIguales}</strong></p>` : ""}
    `;
}