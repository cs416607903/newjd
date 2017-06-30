function getUrlParms(){
	var url=(window.location.href).split("?");
		
		if(url.length==1){
			return ;
		}
		
 		var arr=url[1].split("&");
		var parr={};
	for(var i=0;i<arr.length;i++){
		var k=arr[i].split("=");
		parr[k[0]]=k[1];
	}
	return parr
}



	function getM(){
		var url=window.location.href;
		var n=url.split("#");
		if(n.length!=2){
			return false;
		}

		var p=n[1];
		p=p.split("?");

		
		return p[0];
	}
	
getM()
function router(m,container){
	container=container || $('#share');
	$.ajax({
		url:"view/"+m+".html",
		success:function(data){
			container.html(data);
		}
	})
	loadJs(m);
}
function loadJs(m){
	$.ajax({
		url:"js/"+m+".js"
	})
}
$(function(){
//	var m=getM();
//	router("tab");
	//
	if(!localStorage.count){
		localStorage.count=0;
	};
	localStorage.count++;
	if(localStorage.count==1){
		router('hello');
	}else{
		router('tab')
	}
	router('audio',$('#global'))
})




