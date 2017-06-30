var arr= getUrlParms()
console.log('这个ID='+arr.id)

function palyList(id,callback){
	$.ajax({
		url:'http://api.imjad.cn/cloudmusic/?type=playlist&id='+id,
		success:function(data){
			//console.log(data.playlist.tracks[0].ar[0].name);
			callback(data.playlist)
		}
	})
}

palyList(arr.id,function(data){
	console.log(data.tracks[0].ar[0].name)
	var $musiclist=$("#musiclist");
	var li=$("#musictemp").html();
	for(var i=0;i<data.tracks.length;i++){
	
	var $li=$(li);
		$li.find('.music').html(data.tracks[i].name);
		$li.find('.artist').html(data.tracks[i].ar[0].name);
		$li.appendTo($musiclist);
		$li.data("music",data.tracks[i]).click(function(){
			console.log($(this).data('music'))
			musicContraller.play($(this).data('music'))
			$('#btn').removeClass('pause')
		})				
}
})

