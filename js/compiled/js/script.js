"use strict";

$(document).ready(function () {

    var button = document.querySelectorAll("button");

    $(".arrowLeft").on("click", function () {
        $(".row1 :first-child").remove().appendTo(".row1");
        $(".row2 :first-child").remove().appendTo(".row2");
        button.disabled = true;
    });
    $(".arrowRight").on("click", function () {
        $(".row1 :last-child").remove().prependTo(".row1");
        $(".row2 :last-child").remove().prependTo(".row2");
        button.disabled = true;
    });
});