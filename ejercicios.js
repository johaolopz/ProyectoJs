 console.log("Inicio del programa");

 alert("Bienvenido al cuestionario Pregunta Preguntón.!!!");
 var preguntas =[];
 preguntas.push(["¿Cómo le dicen a Jose Echeverría?","coyote"]);
 preguntas.push(["A richard Crespin les gusta las:","viudas"]);
 preguntas.push(["¿A quién dejó botado John Alvarado?","richard"]);
 preguntas.push(["¿Que apellido es el presidente de uruguay?","vazquez"]);
 preguntas.push(["¿Cuantos años tiene la china?","15"]);


function ImprimirRespuestas(tipoRespuestas)
{
	var arregloRespuestas=[];
	var stringRespuestas='';
	if (tipoRespuestas.toLowerCase() == "correctas" || tipoRespuestas.toLowerCase() == "incorrectas")
	{
		if (tipoRespuestas == "correctas")
		{
			arregloRespuestas=correctas;
		}
		else
		{
			arregloRespuestas=incorrectas;
		}

		if (arregloRespuestas.length<1)
		{
			stringRespuestas= "No hubo respuestas "+tipoRespuestas;
		}

		for(var i=0; i<arregloRespuestas.length; i++)
		{
			stringRespuestas += "<p><b>"+arregloRespuestas[i][0]+"</b><br>"+arregloRespuestas[i][1]+"</p>";

			if(tipoRespuestas=="incorrectas")
			{
				stringRespuestas+= "<i>la respuesta era: "+arregloRespuestas[i][2]+"</i>";
			}
		}
	}
	else
	{
		alert("Error, vea la consola!");
		throw new Error("tipo de respuestas noaceptado");
	}
	return stringRespuestas;
}


function imprimirCuestionario()
{
	html += "<h3>Respuestas correctas</h3>";
	html += ImprimirRespuestas("correctas");
	html += '<h3 style="color:red;">Respuestas Incorrectas</h3>';
	html += ImprimirRespuestas("incorrectas");
	return html;
}

function printHTML(mensaje)
{
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}


 var respuestas = [];
 var correctas = [];
 var incorrectas = [];

 //Preguntamnos y procesamos respuestas
 for (var i=0; i<preguntas.length; i++)
 {
 	var respuestaSimple;
 	do
 	{
 		respuestaSimple = prompt("Responda: "+ preguntas[i][0]);
 	} while(respuestaSimple=='')

 	if(isNaN(respuestaSimple))
 	{
 		respuestas.push(respuestaSimple.toLowerCase());
 	}
 	else
 	{
 		respuestas.push(parseInt(respuestaSimple));
 	}

 	if(respuestas[i]==preguntas[i][1]) 
 	{
 		correctas.push(preguntas[i]);
 	}
 	else
 	{
 		incorrectas.push([preguntas[i][0],respuestas[i],preguntas[i][1]]);
 	}
 }

var html ="<h1>Estimado usuario éste ha sido su cuestionario</h1>";
html += "<h2>A continuación sus respuestas</h2>";
html += imprimirCuestionario();
printHTML(html);
  console.log("Programa completado");