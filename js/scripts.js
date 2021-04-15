$("#reserveBtn").click(function () {
    $('#reservationModal').modal('toggle')
});
$("#loginBtn").click(function () {
    $('#loginModal').modal('toggle')
});
$(document).ready(function() {
    $("#mycarousel").carousel({interval:2000});
    $('#carouselButton').click(function() {
       
        if (('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if (('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
       
    });
   
})
$('#reserveBtn').click(function(){
    $('#reservationModal').modal('toggle')
});
$('#loginBtn').click(function() {
    $('#loginModal').modal('toggle')
});


   // "start": "npm run watch:all",
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "lite": "lite-server",
    // "scss": "node-sass --watch scss -o css",
    // "watch:scss":"onchange \"css/*.scss\" -- npm run scss",
    // "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\" ",
    // "clean":"rimraf dist"