//Global Left Navigator full screen sidebar Collapsible function//
 $(document).ready(function(){
          var boxWidth = $(".box").width();
          $(".slide-right").hide();
          $(".rightLogo .logoCollapse").hide();
          let personName = sessionStorage.getItem("collapseresult");
    
          if (personName == "collapseleft") {
            $(".leftSideBar").addClass("db_left");
            $(".leftMainWrap").addClass("db_right");
            $(".leftSideBar").removeClass("col-sm-2");
            $(".leftMainWrap").removeClass("col-sm-10");
            $(".slide-left").hide();
            $(".rightLogo .logo").hide();
            $(".outlogin").animate({
                width: "30%"
            });
            $(".sb_text").hide();
            $(".leftSideBar .fixed-bottom").css("margin-left","-10px");
            $(".leftSideBar .outlogin").css("margin-left","-12px");
            $(".rightLogo .logoCollapse").show();
            $(".leftSideBar .leftNavigation li a").css("text-align","center");
            $(".leftSideBar .leftNavigation .icon_item").css("padding-left","0px");
            $(".slide-right").show();
            sessionStorage.setItem("collapseresult", "collapseleft");
          } else {
            $(".leftSideBar").removeClass("db_left");
            $(".leftMainWrap").removeClass("db_right");
            $(".leftSideBar").addClass("col-sm-2");
            $(".leftMainWrap").addClass("col-sm-10");
          }

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
            sessionStorage.setItem("collapseresult", "collapseleft");
            $(".leftSideBar").removeClass("col-sm-2");
            $(".leftMainWrap").removeClass("col-sm-10");
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
            sessionStorage.setItem("collapseresult", "collapseright");
          });
      });
// End of Global Left Navigator full screen sidebar Collapsible function//

