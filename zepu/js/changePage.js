$(function(){
	var index=1;
    var totalpage,nextpage;
    var zIndex=100;
	$(document).swipeUp(function(){
		totalpage=$(".page").length;
		if(index==totalpage){
			zIndex=zIndex+1;
			$(".page").removeClass("pageOut");
			$(".page"+index).removeClass("pageIn");
			$(".page1").addClass("pageIn");
			$(".page1").css({'z-index':zIndex});
			$("#number").text("1");
            //进度条
			$("#current-progress").removeClass();
			$("#current-progress").addClass("width1");
			$(".page1 .animate").addClass("active");
			$(".page"+index+" .animate").removeClass("active");
			
			index=1;
		}else{
			nextpage=index+1;
			zIndex=zIndex+1;
			$(".page").removeClass("pageOut");

			$(".page"+index).removeClass("pageIn");
			$(".page"+nextpage).addClass("pageIn");
			$(".page"+nextpage).css({'z-index':zIndex});
			$("#number").text(nextpage);
			//进度条
			$("#current-progress").removeClass();
			$("#current-progress").addClass("width"+nextpage);                                                                                                                               
			$(".page"+index+" .animate").removeClass("active");
			$(".page"+nextpage+" .animate").addClass("active");
			index=nextpage;
		    }
	});
	$(document).swipeDown(function(){
		totalpage=$(".page").length;
		if(index==1){
			zIndex=zIndex+1;
			$(".page").removeClass("pageIn");
			$(".page"+index).removeClass("pageOut");
			$(".page"+totalpage).addClass("pageOut");
			$(".page"+totalpage).css({'z-index':zIndex});
			$("#number").text(totalpage);
			//进度条
			$("#current-progress").removeClass();
			$("#current-progress").addClass("width"+totalpage); 
			$(".page1 .animate").removeClass("active");
			$(".page"+totalpage+" .animate").addClass("active");
			index=totalpage;
		}else{
			nextpage=index-1;
			zIndex=zIndex+1;
			$(".page").removeClass("pageIn");
			$(".page"+index).removeClass("pageOut");
			$(".page"+nextpage).addClass("pageOut");
			$(".page"+nextpage).css({'z-index':zIndex});
			$("#number").text(nextpage); 
			//进度条
			$("#current-progress").removeClass();
			$("#current-progress").addClass("width"+nextpage); 
			$(".page"+index+" .animate").removeClass("active");
			$(".page"+nextpage+" .animate").addClass("active");
			index=nextpage;
			}
	});
		
			    		
})
