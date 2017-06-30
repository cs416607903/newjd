var musicContraller={
	server:'http://musicapi.duapp.com/api.php?type=url&id=',
	play:function(music){
		$.ajax({		
			url:this.server+music.id,
			success:function(data){
				console.log(data.data[0].url)
				var audio=$('#audio').get(0);
				audio.src=data.data[0].url;
				audio.play();
				$('#btn').addClass('play');
				$('#btn').click(function(){
					if($('#btn').hasClass('play')){
						$('#btn').removeClass('play').addClass('pause')
						audio.pause()
					}
					else{
						$('#btn').removeClass('pause').addClass('play')
						audio.play()
					}
					
						
//						$(this).removeClass('play').addClass('pause')
					
			
				})
			}
		})
	}
	
}
	