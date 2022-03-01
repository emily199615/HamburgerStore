
function openApp(){    
	$("#Menu").slideDown();
    $(".app-block #open-app").hide();
    $(".app-block #close-app").show();
    $(".nav-icon").animate({
        opacity:1
    },200).css({"display":"flex"});

}

function closeApp(){   
	$("#Menu").slideUp();
    $(".app-block #open-app").show();
    $(".app-block #close-app").hide();
    $(".nav-icon").animate({
        opacity:0
    },200).css({"display":"none"});

}