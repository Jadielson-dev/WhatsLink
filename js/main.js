var mensagens = document.getElementById("mensagens");
var numero = document.getElementById("numero");
function gera() {
	var url = document.getElementById("url");
	var pronto = mensagens.value;
	var api =  `https://api.whatsapp.com/send?phone=55${numero.value}&text=${pronto.replace(' ', '%20')}`;
	url.innerHTML = api;
}