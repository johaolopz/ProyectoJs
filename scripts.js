function numeroAlAzarHastaLimite(limite)
{
	var num=Math.floor(Math.random()*limite)+1;
	return num;
}


var numAzar = numeroAlAzarHastaLimite(100);
alert("El numero al azar es: "+numAzar);
