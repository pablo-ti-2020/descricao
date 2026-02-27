// executa quando mudar o curso
document.getElementById("curso").addEventListener("change", atualizarMaterias);

// executa ao abrir a página
atualizarMaterias();


// função que preenche matérias
function atualizarMaterias()
{

let curso = document.getElementById("curso").value;

let selectMateria = document.getElementById("materia");


// limpa tudo
selectMateria.innerHTML = "";


// se for edificações
if(curso == "Edificações")
{

let optionInicial = document.createElement("option");

optionInicial.value = "";

optionInicial.text = "Selecione a matéria";

selectMateria.appendChild(optionInicial);


// percorre lista
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




function gerar()
{

let curso = document.getElementById("curso").value;

let materia = document.getElementById("materia").value;

let estilo = document.getElementById("estilo").value;

let assunto = document.getElementById("assunto").value;



if(materia == "" || assunto == "")
{

alert("Preencha todos os campos.");

return;

}



// título

let titulo = assunto;



// descrição inicial

let descricaoInicial = 

"A aula abordará o tema " + assunto + " na matéria " + materia + " do curso técnico em " + curso + ", utilizando a metodologia de " + estilo + ", com foco no desenvolvimento das competências técnicas aplicadas ao contexto profissional e industrial.";



// estratégia

let estrategia = 

"A aula será conduzida utilizando o formato de " + estilo + ", permitindo que os técnicos acompanhem o desenvolvimento do conteúdo " + assunto + " de forma estruturada, com explicação detalhada e aplicação técnica conforme o contexto da matéria " + materia + ".";



// recursos

let recursos = 

"Será utilizado ambiente adequado à execução da aula, com computadores, projetor multimídia, softwares necessários e recursos compatíveis com a metodologia " + estilo + ", garantindo a correta apresentação do conteúdo " + assunto + ".";



// atividade

let atividade = 

"Os técnicos participarão da aula no formato " + estilo + ", acompanhando a apresentação do conteúdo " + assunto + ", observando a demonstração e executando atividades relacionadas à matéria " + materia + ", compreendendo sua aplicação no contexto técnico.";



// avaliação

let avaliacao = 

"Não será aplicada avaliação nesta aula.";



// resultado esperado

let resultado = 

"O técnico deverá ter compreendido o conteúdo " + assunto + " e sua aplicação no contexto da matéria " + materia + ".\n" +

"O técnico deverá ser capaz de reconhecer e aplicar os conceitos apresentados no curso técnico em " + curso + ".";



// texto final

let textoFinal =

"Título\n\n" +

titulo +

"\n\nDescrição Inicial\n\n" +

descricaoInicial +

"\n\nEstratégia\n\n" +

estrategia +

"\n\nRecursos e Ambiente\n\n" +

recursos +

"\n\nAtividade (Descrição da Aula)\n\n" +

atividade +

"\n\nAvaliação\n\n" +

avaliacao +

"\n\nResultado Esperado\n\n" +

resultado;



document.getElementById("resultado").innerText = textoFinal;

}
