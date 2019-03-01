//changes navbar color when document is not at the very top
$(document).ready(function(){
    var menuClicked = false;
    checkPosition(menuClicked); //check page position on init

    //change navbar look when page is not at top
    $(document).scroll(function(){
        checkPosition(menuClicked);
    });

    document.getElementById("navbarCollapseButton").addEventListener("click", function(){
        menuClicked = !menuClicked;
        checkPosition(menuClicked);
    });

    //function to handle page position and navbar transitions
    function checkPosition(menuStatus){
        var position = $(this).scrollTop(); //get page position
        if(position == 0){
            if(menuStatus)
                $(".navbar").addClass("navbarStateScrolled");
            else
                $(".navbar").removeClass("navbarStateScrolled");
        }
        else{
            $(".navbar").addClass("navbarStateScrolled");
        }
    }
    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});