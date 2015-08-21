var data = new Date();
var pegaData = data.getDate();
var pegaDivHoje = document.getElementById("day");

pegaDivHoje.innerHTML = pegaData;


var month = new Array();
	month[0] = "Janeiro";
	month[1] = "Fevereiro";
	month[2] = "Março";
	month[3] = "Abril";
	month[4] = "Maio";
	month[5] = "Junho";
	month[6] = "Julho";
	month[7] = "Agosto";
	month[8] = "Setembro";
	month[9] = "Outubro";
	month[10] = "Novembro";
	month[11] = "Dezembro";
	var escreveMes = month[data.getMonth()];

document.getElementById("month").innerHTML = escreveMes;




//pega a tabela
var pegaTabela = document.getElementById("calendario");


// pegaTabela.addEventListener("click", alertaTabela, false); 

// function alertaTabela () {
// 	alert('ok-clique');
// }


//pega o tamanho da linha
var tamanhoDaLinha = pegaTabela.rows.length;

//loop pelas linhas
for (i = 1; i < tamanhoDaLinha; i++) {
	(function() {

		var essaLinha = pegaTabela.rows.item(i).cells;
		var quantasCelulas = essaLinha.length;

		for (var j = 0; j < quantasCelulas; j++) {
			//info da celula aqui
			var valorDaCelula = essaLinha.item(j).innerHTML;
			// console.log(valorDaCelula);

			essaLinha.item(j).addEventListener("click", logaDia, false);
			

			function logaDia() {
				// console.log(this.innerHTML);
				
				preencherDia.innerHTML=this.innerHTML;
					if (preencherDia.innerHTML == this.innerHTML) {
						// console.log('vai mudar');

						var newxhr = new XMLHttpRequest();
						newxhr.onreadystatechange = function() {
							if (newxhr.readyState === 4) {
							var atividades = JSON.parse(newxhr.responseText);
		
							for (var i=0; i<atividades.length; i += 1) {
								if (atividades[i].dia == preencherDia.innerHTML){
								// console.log("loop ok");
								hojeTitulo.innerHTML = preencherDia.innerHTML + " / " + escreveMes;
									
									preencherAtividade.innerHTML=atividades[i].atividade;
									preencherDescricao.innerHTML=atividades[i].descricao;
									preencherHorario.innerHTML=atividades[i].horario;
									preencherParticipam.innerHTML=atividades[i].participam;
									preencherLocal.innerHTML=atividades[i].local;
									

							} 

							
			

			

		};		
	};
};
			// this.setAttribute("id","selecionado"); TOGGLE NESSA FUNÇÃO?
			$(this).click(function(){
				$("#selecionado").toggle();
			});

			newxhr.open("GET", "agosto-2015.json");
			newxhr.send();
					}

			}

			if (valorDaCelula == pegaData) {
				var achei1 = essaLinha.item(j).setAttribute("class","today");
			};

			if (valorDaCelula < pegaData) {
				var achei2 = essaLinha.item(j).setAttribute("class", "passou");
			}
		}

	}())
}




	

		


var hojeTitulo = document.getElementById("hoje").getElementsByTagName("h3")[0];
var tabelaAtividades = document.getElementById("tabelaDeAtividades");
var preencherDia = document.getElementById("preencherDia");
var preencherAtividade = document.getElementById("preencherAtividade");
var preencherDescricao = document.getElementById("preencherDescricao");
var preencherHorario = document.getElementById("preencherHorario");
var preencherParticipam = document.getElementById("preencherParticipam");
var preencherLocal = document.getElementById("preencherLocal");





var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var atividades = JSON.parse(xhr.responseText);
		
		for (var i=0; i<atividades.length; i += 1) {
			if (atividades[i].dia == pegaData) {
				hojeTitulo.innerHTML = "Hoje";
				preencherDia.innerHTML=atividades[i].dia;
				preencherAtividade.innerHTML=atividades[i].atividade;
				preencherDescricao.innerHTML=atividades[i].descricao;
				preencherHorario.innerHTML=atividades[i].horario;
				preencherParticipam.innerHTML=atividades[i].participam;
				preencherLocal.innerHTML=atividades[i].local;

				// console.log("ok");

			} 

			if (atividades[i].dia == pegaData && atividades[i].atividade == "") {
				preencherDescricao.previousElementSibling.style.visibility="hidden";

				preencherHorario.previousElementSibling.style.visibility="hidden";

				preencherParticipam.previousElementSibling.style.visibility="hidden";

				preencherLocal.previousElementSibling.style.visibility="hidden";

				console.log("atividade é x")
			};

			if (atividades[i].atividade == "") {
				preencherAtividade.innerHTML="Não haverá atividade"
			};

			

		};		
	};
};


xhr.open("GET", "agosto-2015.json");
xhr.send();

document.getElementById("atualizadoem").innerHTML="<p>Última atualização em: 20/08/2015<br>Este site é uma iniciativa autônoma que visa apenas facilitar a divulgação da programação do bloco,<br> não possui ligação direta com a Brasil Soka Gakkai Internacional(BSGI)</p>";

