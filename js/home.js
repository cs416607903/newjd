var server='http://musicapi.duapp.com/api.php'
function getPlaylist(limit,callback){
	if(isCache()){
		var list=JSON.parse(localStorage.list);
		//console.log(list)
		callback(list)
	}else{
		$.ajax({
		
		url:"http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
		async:true,
		success:function(data){
			console.log("请求网络")
			var   list= JSON.stringify(data.playlists);
			localStorage.time=new Date().getTime();
			localStorage.list=list;
			
			callback(data.playlists)
		}
	});
	}
	
	function isCache(){
		//缓存不存在
		if(!localStorage.list){
			return false
		};
		if(new Date().getTime()-localStorage.time>=30*1000){
			return false
		}
		return true
		
		
	}
}
getPlaylist(9,function(data){
	
	var $template=$('#template');
    var item=$template.html();
	for(var i=0;i<data.length;i++){
		$item=$(item);
		$item.find('a').attr('href','#detail?id='+data[i].id);
		$item.find('.item_num').html(Math.round((data[i].playCount/10000)*10)/10+'万');
		$item.find('img').attr('src',data[i].coverImgUrl);
		$item.find('p').html(data[i].name);
		$('.songlist').append($item);
	}
})
