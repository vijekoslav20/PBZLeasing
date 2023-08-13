var zagreb = document.getElementById("sadrzajZagreb");
var split = document.getElementById("sadrzajSplit");
var rijeka = document.getElementById("sadrzajRijeka");
var osijek = document.getElementById("sadrzajOsijek");
var zadar = document.getElementById("sadrzajZadar");
var pula = document.getElementById("sadrzajPula");
var varazdin = document.getElementById("sadrzajVarazdin");

var zagrebBtn = document.getElementById("zagreb");
var splitBtn = document.getElementById("split");
var rijekaBtn = document.getElementById("rijeka");
var osijekBtn = document.getElementById("osijek");
var zadarBtn = document.getElementById("zadar");
var pulaBtn = document.getElementById("pula");
var varazdinBtn = document.getElementById("varazdin");

function funkcijaZagreb(){
	zagreb.style.display = "block";
	split.style.display = "none";
	rijeka.style.display = "none";
	osijek.style.display = "none";
	zadar.style.display = "none";
	pula.style.display = "none";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("button");
	zagrebBtn.classList.add("aktivan");
	zagrebBtn.classList.add("odabranoMobilnaBtn");
	
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.add("button");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "ZAGREB";
}

function funkcijaSplit(){
	zagreb.style.display = "none";
	split.style.display = "block";
	rijeka.style.display = "none";
	osijek.style.display = "none";
	zadar.style.display = "none";
	pula.style.display = "none";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.remove("button");
	splitBtn.classList.add("aktivan");
	splitBtn.classList.add("odabranoMobilnaBtn");
	
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "SPLIT";
}

function funkcijaRijeka(){
	zagreb.style.display = "none";
	split.style.display = "none";
	rijeka.style.display = "block";
	osijek.style.display = "none";
	zadar.style.display = "none";
	pula.style.display = "none";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.add("button");
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.remove("button");
	rijekaBtn.classList.add("aktivan");
	rijekaBtn.classList.add("odabranoMobilnaBtn");
	
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "RIJEKA";
}

function funkcijaOsijek(){
	zagreb.style.display = "none";
	split.style.display = "none";
	rijeka.style.display = "none";
	osijek.style.display = "block";
	zadar.style.display = "none";
	pula.style.display = "none";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.add("button");
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.remove("button");
	osijekBtn.classList.add("aktivan");
	osijekBtn.classList.add("odabranoMobilnaBtn");
	
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "OSIJEK";
}

function funkcijaZadar(){
	zagreb.style.display = "none";
	split.style.display = "none";
	rijeka.style.display = "none";
	osijek.style.display = "none";
	zadar.style.display = "block";
	pula.style.display = "none";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.add("button");
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.remove("button");
	zadarBtn.classList.add("aktivan");
	zadarBtn.classList.add("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "ZADAR";
}

function funkcijaPula(){
	zagreb.style.display = "none";
	split.style.display = "none";
	rijeka.style.display = "none";
	osijek.style.display = "none";
	zadar.style.display = "none";
	pula.style.display = "block";
	varazdin.style.display = "none";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.add("button");
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.remove("button");
	pulaBtn.classList.add("aktivan");
	pulaBtn.classList.add("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("aktivan");
	varazdinBtn.classList.add("button");
	varazdinBtn.classList.remove("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "PULA";
}

function funkcijaVarazdin(){
	zagreb.style.display = "none";
	split.style.display = "none";
	rijeka.style.display = "none";
	osijek.style.display = "none";
	zadar.style.display = "none";
	pula.style.display = "none";
	varazdin.style.display = "block";
	
	zagrebBtn.classList.remove("aktivan");
	zagrebBtn.classList.add("button");
	zagrebBtn.classList.remove("odabranoMobilnaBtn");
	
	splitBtn.classList.add("button");
	splitBtn.classList.remove("aktivan");
	splitBtn.classList.remove("odabranoMobilnaBtn");
	
	rijekaBtn.classList.add("button");
	rijekaBtn.classList.remove("aktivan");
	rijekaBtn.classList.remove("odabranoMobilnaBtn");
	
	osijekBtn.classList.add("button");
	osijekBtn.classList.remove("aktivan");
	osijekBtn.classList.remove("odabranoMobilnaBtn");
	
	zadarBtn.classList.add("button");
	zadarBtn.classList.remove("aktivan");
	zadarBtn.classList.remove("odabranoMobilnaBtn");
	
	pulaBtn.classList.add("button");
	pulaBtn.classList.remove("aktivan");
	pulaBtn.classList.remove("odabranoMobilnaBtn");
	
	varazdinBtn.classList.remove("button");
	varazdinBtn.classList.add("aktivan");
	varazdinBtn.classList.add("odabranoMobilnaBtn");
	
	document.getElementById("odabranaOpcijaMobilno").innerHTML = "VARAŽDIN";
}