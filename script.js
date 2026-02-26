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



// titulo

let titulo = assunto;



// descrição inicial

let descricaoInicial = 

"A aula abordará o tema "+assunto+" na matéria "+materia+" do curso técnico em "+curso+", utilizando a metodologia de "+estilo+", com foco no desenvolvimento das competências técnicas aplicadas ao contexto profissional e industrial.";



// estrategia

let estrategia = 

"A aula será conduzida utilizando o formato de "+estilo+", permitindo que os técnicos acompanhem o desenvolvimento do conteúdo "+assunto+" de forma estruturada, com explicação detalhada e aplicação técnica conforme o contexto da matéria "+materia+".";



// recursos

let recursos = 

"Será utilizado ambiente adequado à execução da aula, com computadores, projetor multimídia, softwares necessários e recursos compatíveis com a metodologia "+estilo+", garantindo a correta apresentação do conteúdo "+assunto+".";



// atividade

let atividade = 

"Os técnicos irão participar da aula no formato "+estilo+", acompanhando a apresentação do conteúdo "+assunto+", observando a demonstração e executando atividades relacionadas à matéria "+materia+", compreendendo sua aplicação no contexto técnico.";



// avaliação fixa

let avaliacao = 

"Não será aplicada avaliação nesta aula.";



// resultado esperado

let resultado = 

"O técnico deverá ter compreendido o conteúdo "+assunto+" e sua aplicação no contexto da matéria "+materia+".\n"+
"O técnico deverá ser capaz de reconhecer e aplicar os conceitos apresentados no curso técnico em "+curso+".";



// texto final

let textoFinal =

"Titulo, inicial\n\n"+

titulo+

"\n\nDescricao, inicial\n\n"+

descricaoInicial+

"\n\nagora transforme isso pelo que está abaixo (tambem corrija erros de portugues)\n\n"+

"estrategia:\n\n"+

estrategia+

"\n\nrecursos e ambiente:\n\n"+

recursos+

"\n\natividade (descricao da aula):\n\n"+

atividade+

"\n\nAvaliação:\n\n"+

avaliacao+

"\n\nResultado Esperado:\n\n"+

resultado;



document.getElementById("resultado").innerText = textoFinal;

}
