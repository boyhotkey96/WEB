var anhAr = [];
    var currentIndex = 0;
	var run;
    function loadAnh() {
        for (var i = 0; i < 4; i++) {
            anhAr[i] = new Image();
            anhAr[i].src = "images/s" + i + ".jpg";
        }
        play()
    }
   

    function auto() {
        currentindex = Math.round(Math.random() * 4);
        document.getElementById("anh").src = anhAr[currentindex].src;
    }
    function play() {
        run = setInterval("auto()", 1500);
    }
    function stop() {
        window.clearInterval(run);
    }
	
	
	function next() {
        if (currentIndex < 4) {
            document.getElementById("hinhPre").style.visibility = "";          // Mở hình Pre lên lại
            currentIndex++;
            document.getElementById("anh").src = anhAr[currentIndex].src;
            if (currentIndex == 3) {

                document.getElementById("hinhNext").style.visibility = "hidden";   // Làm ẩn hình ảnh
            }
        }      
    }
    function back() {
        if (currentIndex > 0) {
            document.getElementById("hinhNext").style.visibility = "";          // Mở hình Next lên lại
            
            currentIndex--;
            document.getElementById("anh").src = anhAr[currentIndex].src;
            if (currentIndex == 0) {

                document.getElementById("hinhPre").style.visibility = "hidden";   // Làm ẩn hình ảnh
            }
        }   
	  }
	  
	  $(function(){$(window).scroll(function(){if($(this).scrollTop()!=0){$('#bttop').fadeIn();}else{$('#bttop').fadeOut();}});$('#bttop').click(function(){$('body,html').animate({scrollTop:0},800);});});