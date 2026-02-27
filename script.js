// =============================
// ATUALIZAR MATÉRIAS
// =============================

document.getElementById("curso").addEventListener("change", atualizarMaterias);

atualizarMaterias();


function atualizarMaterias()
{

let curso = document.getElementById("curso").value;

let selectMateria = document.getElementById("materia");

selectMateria.innerHTML = "";


if(curso == "Edificações")
{

let optionInicial = document.createElement("option");

optionInicial.value = "";

optionInicial.text = "Selecione a matéria";

selectMateria.appendChild(optionInicial);


for(let i = 0; i < materiasEdificacoes.length; i++)
{

let option = document.createElement("option");

option.value = materiasEdificacoes[i];

option.text = materiasEdificacoes[i];

selectMateria.appendChild(option);

}

}
else
{

let option = document.createElement("option");

option.value = "";

option.text = "Nenhuma matéria cadastrada";

selectMateria.appendChild(option);

}

}



// =============================
// GERAR PLANO
// =============================

function gerar()
{

let curso = document.getElementById("curso").value;

let materia = document.getElementById("materia").value;

let assunto = document.getElementById("assunto").value;

let estilo1 = document.getElementById("estilo1").value;

let estilo2 = document.getElementById("estilo2").value;

let estilo3 = document.getElementById("estilo3").value;



// validação

if(materia == "" || assunto == "" || estilo1 == "")
{

alert("Preencha matéria, assunto e pelo menos um estilo.");

return;

}



// montar estilos automaticamente

let estilos = [];

if(estilo1 != "") estilos.push(estilo1);

if(estilo2 != "") estilos.push(estilo2);

if(estilo3 != "") estilos.push(estilo3);


let estiloTexto = estilos.join(", ");



// conteúdo

let titulo = assunto;


let descricaoInicial =
"A aula abordará o tema " + assunto + " na matéria " + materia + " do curso técnico em " + curso + ", utilizando a metodologia de " + estiloTexto + ", com foco no desenvolvimento das competências técnicas aplicadas ao contexto profissional e industrial.";


let estrategia =
"A aula será conduzida utilizando os formatos de " + estiloTexto + ", permitindo que os técnicos acompanhem o desenvolvimento do conteúdo " + assunto + " de forma estruturada, com explicação detalhada e aplicação técnica conforme o contexto da matéria " + materia + ".";


let recursos =
"Será utilizado ambiente adequado à execução da aula, com computadores, projetor multimídia, softwares necessários e recursos compatíveis com as metodologias " + estiloTexto + ", garantindo a correta apresentação do conteúdo " + assunto + ".";


let atividade =
"Os técnicos participarão da aula utilizando os formatos de " + estiloTexto + ", acompanhando a apresentação do conteúdo " + assunto + " e executando atividades relacionadas à matéria " + materia + ".";


let avaliacao =
"Não será aplicada avaliação nesta aula.";


let resultado =
"O técnico deverá ter compreendido o conteúdo " + assunto + " e sua aplicação na matéria " + materia + ".\n" +
"O técnico deverá ser capaz de aplicar os conceitos apresentados no curso técnico em " + curso + ".";



let textoFinal =

"TÍTULO\n\n" +
titulo +

"\n\nDESCRIÇÃO INICIAL\n\n" +
descricaoInicial +

"\n\nESTRATÉGIA\n\n" +
estrategia +

"\n\nRECURSOS E AMBIENTE\n\n" +
recursos +

"\n\nATIVIDADE\n\n" +
atividade +

"\n\nAVALIAÇÃO\n\n" +
avaliacao +

"\n\nRESULTADO ESPERADO\n\n" +
resultado;



document.getElementById("resultado").innerText = textoFinal;

}
