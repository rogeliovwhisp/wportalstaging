//Global Left Navigator full screen sidebar Collapsible function//
$(document).ready(function(){
    var boxWidth = $(".box").width();
    $(".slide-right").hide();

    $(".slide-left").click(function(){
        $(".box").animate({
            width: 60
        });
        $(".outlogin").animate({
            width: "30%"
        });
        $(".slide-left").hide();
        $(".sb_text").hide();
        $(".slide-right").show();
    });

    $(".slide-right").click(function(){
        $(".box").animate({
            width: "16.66666667%"
        });
        $(".outlogin").animate({
            width: "80%"
        });
        $(".slide-right").hide();
        $(".sb_text").fadeIn('slow').animate({opacity: 1.0});
        $(".slide-left").show();
    });

});
// End of Global Left Navigator full screen sidebar Collapsible function//

//Global  Select Element Search function//
$(function(){
    $("#clients").select2();
}); 
//End of Global Select Element Search function//