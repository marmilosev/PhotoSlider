"use strict";$(document).ready(function(){let e=$("button");$(".arrowLeftBlue").on("click",function(){$(".row1 :first-child").remove().appendTo(".row1").addClass("flash"),$(".row2 :first-child").remove().appendTo(".row2").addClass("flash"),e.disabled=!0}),$(".arrowRightBlue").on("click",function(){$(".row1 :last-child").remove().prependTo(".row1").removeClass("flash"),$(".row2 :last-child").remove().prependTo(".row2").removeClass("flash"),e.disabled=!0})});