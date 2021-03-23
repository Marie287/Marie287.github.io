$(document).ready(function() { 
 // Rotation flèche collapse (Détails dans parcours.html)
  $(".btn_parcours").on("click", function(){
    if($(this).find(".arrow").hasClass("down")){
      $(this).find(".arrow").removeClass("down");
      $(this).find(".arrow").addClass("up");
      $(this).parent().addClass("p_open");
      $(this).addClass("btn_parcours_open");
    }
    else{
      $(this).find(".arrow").removeClass("up");
      $(this).find(".arrow").addClass("down");
      $(this).parent().removeClass("p_open");
      $(this).removeClass("btn_parcours_open");
    }
  });
});