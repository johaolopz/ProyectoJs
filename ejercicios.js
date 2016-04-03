var persona =
{
	nombre:"Johao",
	pais: "Ecuador",
	edad:30,
	laborando:true,
	habilidades:["php","js","html"]
};

function printHTML (mensaje)
{
var outputDiv = document.getElementById("output");
outputDiv.innerHTML=mensaje;
}

var saludo = "<p>Hola "+persona.nombre +" bienvenido</p>";
saludo += "<p>Como estan las cosas en "+persona.pais+"?</p>";
persona.nombre="ProgramadorVagabundo";
saludo += "<p>Tu nombre de usuario es: "+persona.nombre+"</p>";
saludo += "<p>Tu edad pronto será: "+(persona.edad+1)+"</p>";
saludo += "<p>Tienes al momento "+persona.habilidades.length+" habilidades</p>";
saludo += "<p>Tus habilidades son: "+persona.habilidades.join(", ")+"</p>";
printHTML(saludo);