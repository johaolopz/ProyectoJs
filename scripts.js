var num = prompt("Ingrese numero: ");
if (isNaN(num))
{
	throw Error("No es un numero valido");
}
else
{
	num=num*0.5;
}
alert("La mitad es: "+num);