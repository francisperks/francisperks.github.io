    var figure = $(".item").hover( hoverVideo, hideVideo );
    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }
    
    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      } 