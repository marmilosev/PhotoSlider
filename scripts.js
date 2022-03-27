$(document).ready(function() {

    // Change arrows styles
    $(".arrowLeft").mouseenter(function() {
        $(".arrowLeft").attr("src","Assets/arrow-blue-left.png")
    });
    $(".arrowLeft").mouseleave(function() {
        $(".arrowLeft").attr("src","Assets/arrow-gray-left.png")
    });

    $(".arrowRight").mouseenter(function() {
        $(".arrowRight").attr("src","Assets/arrow-blue-right.png")
    });
    $(".arrowRight").mouseleave(function() {
        $(".arrowRight").attr("src","Assets/arrow-gray-right.png")
    });

    
    // Slider
    $(".arrowRight").click(function(){
        $(".row1 :first-child").remove().appendTo(".row1");
        $(".row2 :first-child").remove().appendTo(".row2");
      });

    $(".arrowLeft").click(function(){
        $(".row1 :last-child").remove().prependTo(".row1");
        $(".row2 :last-child").remove().prependTo(".row2");
      }); 

 });