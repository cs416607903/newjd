function load(m){
	m=m||'home'
	router(m,$(".container"));
}

load()


$('#m1').click(function(){
	load('home')
});
$('#m2').click(function(){
	load('songlist')
});
$('#m3').click(function(){
	load('ranklist')
});
$('#m4').click(function(){
	load('singer')
});