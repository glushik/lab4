function showAnimation(){
    $(".hidden").removeClass("hidden");
    $("#sh").addClass("hidden");
    start();
    $("#oleg").addClass("hidden");
    vinnik();
}
 function vinnik(){
   
   setTimeout(function(){
    $(".hidden").removeClass("hidden");

    $("#oleg").animate({
      height: '100%',
      width: '100%'
    }, 3000);
   }, 17000);
   
 }

