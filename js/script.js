$(document).ready(function() {
      
    let button = document.querySelectorAll("button");

    $(".arrowLeft").on("click", () =>{
        $(".row1 :first-child").remove().appendTo(".row1");
        $(".row2 :first-child").remove().appendTo(".row2");
        button.disabled = true;
      });
    $(".arrowRight").on("click", () =>{
        $(".row1 :last-child").remove().prependTo(".row1");
        $(".row2 :last-child").remove().prependTo(".row2");
        button.disabled = true;
      }); 

 });