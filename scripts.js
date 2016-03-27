console.log("Inicio programa");
var numeroUsuario = prompt("Ingrese un numero del 1 al 5: ");
var numeroAdivinar = 3;
if (parseInt(numeroUsuario) === numeroAdivinar)
{
document.write("<p>Adivinaste. Good Job.!!!</p>");
}
else
{
document.write("<p>No adivinaste, intentalo de nuevo =(</p>");
}
console.log("Programa completo");