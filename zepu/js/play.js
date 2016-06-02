window.onload=function(){
	function controlMusic(){
		var control=document.getElementById("auido");
		var audiotap=document.getElementById('music-audio');
		var play=true;
		
		
		control.onclick=function(){
			if(play){
			    audiotap.pause();
			    control.className="stop";
			    play=false;
			}
		   else{
		   	   audiotap.play();
		   	   control.className="show";
		   	   play=true;
		   }
		}
		
	}
	controlMusic();
}
