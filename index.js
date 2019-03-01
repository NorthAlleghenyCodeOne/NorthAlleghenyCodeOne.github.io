$(document).ready(function(){
    initCountdown();
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(".headimg",3,{opacity:1,y:0,delay:.75,ease:Power2.easeOut});
    var ourScene = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween)
    
    .addTo(controller);
    var tween2 = TweenMax.to(".countdown-width",3,{opacity:1,y:-35,delay:1.75,ease:Power2.easeOut});
    var ourScene2 = new ScrollMagic.Scene({
        triggerElement:".headimg",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween2)
    .addTo(controller);
     var tween3 = TweenMax.to(".clocktext",3,{opacity:1,y:-15,delay:2.75,ease:Power2.easeOut});
    var ourScene3 = new ScrollMagic.Scene({
        triggerElement:".headimg",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween3)
    .addTo(controller);
    
     $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "" && !this.hash.includes("day")) {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1300, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
   
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

 function initCountdown(){
        var deadline = "2019-04-26T03:14:15.927-05:00" //April 16, 2019 at 3:14:15.927 am est

        //update clock every second
        setInterval(function(){
            var millis = Date.parse(deadline) - Date.now();
            var seconds = Math.floor((millis / 1000) % 60);
            var min = Math.floor((millis / 1000 / 60)% 60);
            var hours = Math.floor((millis / 1000 / 60 / 60) % 24);
            var days = Math.floor((millis / 1000 / 60 / 60 / 24));

            document.getElementById("countdown-days").innerHTML = (days < 10 ? "0" + days : days);
            document.getElementById("countdown-hours").innerHTML = (hours < 10 ? "0" + hours : hours);
            document.getElementById("countdown-minutes").innerHTML = (min < 10 ? "0" + min : min);
            document.getElementById("countdown-seconds").innerHTML = (seconds < 10 ? "0" + seconds : seconds);
        }, 500);

    }


});
