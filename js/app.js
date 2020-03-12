 //loader

 $(window).on('load', function(){
     $(".loader").fadeOut();
 });
 
 
 //Navbar functions
    //Navabar responsive functions
    $("#menu").on("click", function(){
        console.log("hi");
        $(".nav-items").toggleClass("slide");
        $(".black-overlay").show();
    });
    $(".black-overlay, #close").on("click", function(){
        $(".nav-items").toggleClass("slide");
        $(".black-overlay").hide();
    });

    //--------Navabar responsive functions end

   
function navdocking(){
    if ($(window).scrollTop()<=0) {
        $("nav").addClass("nav-docked");
    } else {
        $("nav").removeClass("nav-docked");
    }
}
navdocking();
$(window).scroll(function(){
    var Wscroll = $(window).scrollTop();
    if (Wscroll>0) {
        $("nav").removeClass("nav-docked");
    } else {
        $("nav").addClass("nav-docked");
    }
    
});

//----navabar function end

//slideshow

    $("#carousel").owlCarousel({
    loop:true,
    items:1,
    autoWidth: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });
