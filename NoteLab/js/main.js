// Carousel

$('.main-content .owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    dots: false,
    nav: true,
    navText: [
        '<i class="fas fa-chevron-circle-left" aria-hidden="true"></i>',
        '<i class="fas fa-chevron-circle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

document.querySelector("html").classList.add('js');

var fileInput = document.querySelector(".input-file"),
    button = document.querySelector(".input-file-trigger"),
    the_return = document.querySelector(".file-return");

button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
    }
});
button.addEventListener("click", function (event) {
    fileInput.focus();
    return false;
});
fileInput.addEventListener("change", function (event) {
    the_return.innerHTML = this.value;
});

// PROFILE PIC CHANCE PREVIEW

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var id_profilepic_preview = document.getElementById('id_profilepic_preview');
      id_profilepic_preview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};


//LESSONS MENU BUTTON

$(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function(e) {
      if($(window).width()<=768){
        $("#wrapper").removeClass("toggled");
      }else{
        $("#wrapper").addClass("toggled");
      }
    });
});

// LESSON MENU LİST

function handleNot() {
    document.getElementById("not-icerigi-menu").style.display= "block"
    document.getElementById("not-icerigi").style.display= "none"
    document.getElementById("lesson-screen-width").style.width = "75%"
}


function handleClose(){
    document.getElementById("not-icerigi-menu").style.display= "none"
    document.getElementById("not-icerigi").style.display= "block"
    document.getElementById("lesson-screen-width").style.width = "100%"
}