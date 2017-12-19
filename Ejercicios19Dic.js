function comprobar(){
	var ini =document.getElementById("inicio");
	var fin=document.getElementById("fin");
	var i= parseInt(ini.value);
	var f= parseInt(fin.value);
	if (i>f){
		 window.alert("Debe introducir el número menor en la capsula de texto superior.")
	}else{
	for (i; i<=f;i++){
		window.alert(i);
		}
	}
}
function calcular(){
	var uni=document.getElementById("unidades");
	var pre=document.getElementById("precio");
	
	var resultado= uni.value*pre.value;
	window.alert(resultado);
}

function numsecret(){
	var nums =document.getElementById("num");
	
if (nums.value!=17){
	window.alert("Pruebe de nuevo")
	
}else if (nums.value==17){
		window.alert("Objetivo conseguido")

}
}