/// <reference types="../@types/jquery" />
var width=$("nav").innerWidth()
$(".close").on("click",function(){
    $("nav").animate({left:-width},1000);
    $(".openNav").animate({left:0},1000);
});
$(".openNav").on("click",function(){
    $("nav").animate({left:0},1000);
    $(".openNav").animate({left:width},1000);
});
$(".openNav").css("left",0);
$("nav").css("left",-width);

$('#sliderDown .toggle').on("click",function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
var maxLength = 100;
$('textarea').on( "keyup",function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});
