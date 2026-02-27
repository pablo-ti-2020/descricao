// =============================
// CONTROLE DAS MATÉRIAS
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
// LIMITE DE 2 CHECKBOXES
// =============================

let checkboxes = document.querySelectorAll("#estilos input");

checkboxes.forEach(function(box)
{

box.addEventListener("change", function()
{

let marcados = document.querySelectorAll("#estilos input:checked");

if(marcados.length > 2)
{

this.checked = false;

alert("Você pode selecionar no máximo 2 estilos.");

}

});

});



// =============================
// GERAR PLANO
// =============================

function gerar()
{

let curso = document.getElementById("curso").value;

let materia = document.getElementById("materia").value;

let assunto = document.getElementById("assunto").value;

let marcados = document.querySelectorAll("#estilos input:checked");



if(materia == "" || assunto == "" || marcados.length != 2)
{

alert("Preencha tudo e selecione exatamente 2 estilos.");

return;

}



let estilo = marcados[0].value + " e " + marcados[1].value;



let titulo = assunto;



let descricaoInicial = 
"A aula abordará o tema " + assunto + " na matéria " + materia + " do curso técnico em " + curso + ", utilizando a metodologia de " + estilo + ", com foco no desenvolvimento das competências técnicas aplicadas ao contexto profissional e industrial.";



let estrategia =
"A aula será conduzida utilizando os formatos de " + estilo + ", permitindo que os técnicos acompanhem o desenvolvimento do conteúdo " + assunto + " de forma estruturada, com explicação detalhada e aplicação técnica conforme o contexto da matéria " + materia + ".";



let recursos =
"Será utilizado ambiente adequado à execução da aula, com computadores, projetor multimídia, softwares necessários e recursos compatíveis com as metodologias " + estilo + ", garantindo a correta apresentação do conteúdo " + assunto + ".";



let atividade =
"Os técnicos participarão da aula nos formatos de " + estilo + ", acompanhando a apresentação do conteúdo " + assunto + ", observando a demonstração e executando atividades relacionadas à matéria " + materia + ", compreendendo sua aplicação no contexto técnico.";



let avaliacao =
"Não será aplicada avaliação nesta aula.";



let resultado =
"O técnico deverá ter compreendido o conteúdo " + assunto + " e sua aplicação no contexto da matéria " + materia + ".\n" +
"O técnico deverá ser capaz de reconhecer e aplicar os conceitos apresentados no curso técnico em " + curso + ".";



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
