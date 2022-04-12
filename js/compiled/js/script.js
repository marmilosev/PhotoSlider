"use strict";$(document).ready(function(){
    var o=document.querySelectorAll("button");
    $(".arrowLeftBlue").on("click",function(){
        $(".row1 :first-child").remove().appendTo(".row1").addClass("flash"),
        $(".row2 :first-child").remove().appendTo(".row2").addClass("flash"),
        o.disabled=!0}),
        $(".arrowRightBlue").on("click",function(){
            $(".row1 :last-child").remove().prependTo(".row1").addClass("slide"),
            $(".row2 :last-child").remove().prependTo(".row2"),
            o.disabled=!0})});

