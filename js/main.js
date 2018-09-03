$(window).load(function(){
    var $themask = $("#themask");
    
    
    $(".clickme").on("click", function(){
        var id = $(this).data("id");
        $(".mask").removeClass("mask1").removeClass("mask2").addClass("mask" + id)
        if ($themask.hasClass("inmotion")){
            $themask.removeClass("inmotion");
        } else {
            $themask.addClass("inmotion");
        }
        
    });
    
    /*    
    var step = 960;
    
    setTimeout(function(){
        
    }, 400);
     */
});

 