var vozilaTekst = document.getElementById("tekst-vozila");
var opremaTekst = document.getElementById("tekst-oprema");
var plovilaTekst = document.getElementById("tekst-plovila");

var vozilaBtn = document.getElementById("btn-vozila");
var opremaBtn = document.getElementById("btn-oprema");
var plovilaBtn = document.getElementById("btn-plovila");

function funkcijaVozila(){
	vozilaTekst.style.display = "block";
	opremaTekst.style.display = "none";
	plovilaTekst.style.display = "none";
	
	vozilaBtn.classList.remove("ponuda-opcije-btn");
	vozilaBtn.classList.add("odabranaOpcijaPonuda");
	
	opremaBtn.classList.remove("odabranaOpcijaPonuda");
	opremaBtn.classList.add("ponuda-opcije-btn");
	
	plovilaBtn.classList.remove("odabranaOpcijaPonuda");
	plovilaBtn.classList.add("ponuda-opcije-btn");
}

function funkcijaOprema(){
	vozilaTekst.style.display = "none";
	opremaTekst.style.display = "block";
	plovilaTekst.style.display = "none";
	
	vozilaBtn.classList.remove("odabranaOpcijaPonuda");
	vozilaBtn.classList.add("ponuda-opcije-btn");
	
	opremaBtn.classList.remove("ponuda-opcije-btn");
	opremaBtn.classList.add("odabranaOpcijaPonuda");
	
	plovilaBtn.classList.remove("odabranaOpcijaPonuda");
	plovilaBtn.classList.add("ponuda-opcije-btn");
}

function funkcijaPlovila(){
	vozilaTekst.style.display = "none";
	opremaTekst.style.display = "none";
	plovilaTekst.style.display = "block";
	
	vozilaBtn.classList.remove("odabranaOpcijaPonuda");
	vozilaBtn.classList.add("ponuda-opcije-btn");
	
	opremaBtn.classList.remove("odabranaOpcijaPonuda");
	opremaBtn.classList.add("ponuda-opcije-btn");
	
	plovilaBtn.classList.remove("ponuda-opcije-btn");
	plovilaBtn.classList.add("odabranaOpcijaPonuda");
}