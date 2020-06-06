
 /*
 Theme: Amezia - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 Module/App: App Js
 */


// Set the date we're counting down to
var countDownDate = new Date("June 30, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " Days";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// window.onload = function () {

// var chart = new CanvasJS.Chart("chartContainer", {
// 	animationEnabled: true,
// 	theme: "light2", // "light1", "light2", "dark1", "dark2"
// 	title:{
// 		text: "Top Rated"
// 	},
// 	axisY: {
// 		title: "Points"
// 	},
// 	data: [{
// 		type: "column",
// 		showInLegend: true,
// 		legendMarkerColor: "grey",
// 		legendText: "Friends",
// 		dataPoints: [
// 			{ y: 420, label: "Nitai" },
// 			{ y: 389,  label: "Adi" },
// 			{ y: 302,  label: "Tom" },
// 			{ y: 279,  label: "Orel" },
// 			{ y: 248,  label: "Omer" },
// 			{ y: 231, label: "Maya" },
// 			{ y: 230,  label: "Aviv" },
// 			{ y: 226,  label: "Hadar" }
// 		]
// 	}]
// });
// chart.render();

// }

(function ($) {

    'use strict';

    function initSlimscroll() {
        $('.slimscroll,.left-sidenav-menu').slimscroll({
            height: 'auto',
            position: 'right',
            size: "7px",
            color: '#9ea5ab',
            wheelStep: 5,
            touchScrollStep: 50
        });
    }

    function initMetisMenu() {
        //metis menu
        $("#side-nav").metisMenu();
    }

    function initFullScreen() {
        $('#btn-fullscreen').on("click", function (e) {
            e.preventDefault();

            if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        });
    }

    function initLeftMenuCollapse() {
        // Left menu collapse
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarge-menu");
            initSlimscroll();
        });
    }

    function initEnlarge() {
        if ($(window).width() < 1025) {
            $('body').addClass('enlarge-menu');
        } else {
            if ($('body').data('keep-enlarged') != true)
                $('body').removeClass('enlarge-menu');
        }
    }

    function initActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $(".left-sidenav a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) { 
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().addClass("in");
                $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("active");
            }
        });
    }

    function initSerach() {
        $('.search-btn').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });
    }

    function initComponents() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    }

    function init() {
        initSlimscroll();
        initMetisMenu();
        initFullScreen();
        initLeftMenuCollapse();
        initEnlarge();
        initActiveMenu();
        initSerach();
        initComponents();
        Waves.init();
    }

    init();

})(jQuery)


