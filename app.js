//Global Left Navigator full screen sidebar Collapsible function//
 $(document).ready(function(){
          var boxWidth = $(".box").width();
          $(".slide-right").hide();
          $(".rightLogo .logoCollapse").hide();

          $(".slide-left").click(function(){
              $(".slide-left").hide();
              $(".rightLogo .logo").hide();
              $(".leftSideBar").animate({
                  width: "5%"
              });
              $(".outlogin").animate({
                  width: "30%"
              });
              $(".leftMainWrap").animate({
                  width: "95%"
              });
              
              $(".sb_text").hide();
              $(".leftSideBar .fixed-bottom").css("margin-left","-10px");
              $(".leftSideBar .outlogin").css("margin-left","-12px");
              $(".rightLogo .logoCollapse").show();
              $(".leftSideBar .leftNavigation li a").css("text-align","center");
              $(".leftSideBar .leftNavigation .icon_item").css("padding-left","0px");
              $(".slide-right").show();
          });

          $(".slide-right").click(function(){
              $(".rightLogo .logo").show();
              $(".leftMainWrap").animate({
                  width: "83%"
              });
              $(".leftSideBar").animate({
                  width: "17%"
              });
              $(".outlogin").animate({
                  width: "80%"
              });
              $(".slide-right").hide();
              $(".sb_text").fadeIn('slow').animate({opacity: 1.0});
              $(".slide-left").show();
              $(".leftSideBar .fixed-bottom").css("margin-left","0px");
              $(".leftSideBar .outlogin").css("margin-left","0px");
              $(".rightLogo .logoCollapse").hide();
              $(".leftSideBar .leftNavigation li a").css("text-align","left");
              $(".leftSideBar .leftNavigation .icon_item").css("padding-left","20px");
          });
      });
// End of Global Left Navigator full screen sidebar Collapsible function//

//Global  Select Element Search function//
$(function(){
    $("#clients").select2();
}); 
//End of Global Select Element Search function//