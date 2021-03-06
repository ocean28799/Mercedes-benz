var btnShowMore = document.getElementById("btnShowMore");
var btnShowMore2 = document.getElementById("btnShowMore2");
var btnShowMore3 = document.getElementById("btnShowMore3");
var moreContent = document.getElementsByClassName("moreContent");
var showMoreGallery = document.getElementById("showMoreGallery");
var showMoreGallery2 = document.getElementById("showMoreGallery2");
var showMoreGallery3 = document.getElementById("showMoreGallery3");

$(document).ready(function () {
  $("#btnShowMore").click(function () {
    $(".moreContent").slideDown(1000, "linear");
    btnShowMore.style.display = "none";
    showMoreGallery.style.margin = "0";
  });
  $("#btnShowMore2").click(function () {
    $(".moreContent").slideDown(1000, "linear");
    btnShowMore2.style.display = "none";
    showMoreGallery2.style.margin = "0";
  });
  $("#btnShowMore3").click(function () {
    $(".moreContent").slideDown(1000, "linear");
    btnShowMore3.style.display = "none";
    showMoreGallery3.style.margin = "0";
  });
});

// var btnToTop = document.getElementById("btnGoToTop");
// btnToTop.onclick = function () {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };

var btnToTop = $("#btnGoToTop");

btnToTop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "700");
});

var btnSearch = $("#btnSearchHeader");

btnSearch.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 700 }, "700");
});

var btnVehicle = $("#btnVehicle");
var btnClose = $("#slickBtnClose");
var btnClose2 = $("#slickBtnClose2");
var btnClose3 = $("#slickBtnClose3");
btnClose.on("click", function () {
  vehicleSection.removeClass("show");
  document.body.style.position = 'relative';
  flag = false;
});
btnClose2.on("click", function () {
  vehicleSection.removeClass("show");
  document.body.style.position = 'relative';
  flag = false;
});
btnClose3.on("click", function () {
  vehicleSection.removeClass("show");
  document.body.style.position = 'relative';
  flag = false;
});
var vehicleSection = $("#vehicle_section");
var flag = false;
btnVehicle.on("click", function () {
  flag = !flag;
  if (flag) {
    vehicleSection.addClass("show");
    document.body.style.position = 'fixed';
  } else {
    vehicleSection.removeClass("show");
    document.body.style.position = 'relative';
  }
});

var headerNavbar = $("#headerNavbar");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    headerNavbar.addClass("hide");
  } else {
    headerNavbar.removeClass("hide");
  }
});

var slickPrev = document.getElementsByClassName("slick-prev");
console.log(slickPrev);
