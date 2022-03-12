// Start burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__list');
let expandBtn = document.querySelectorAll('.expand-btn');
menuBtn.onclick = () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
};
expandBtn.forEach((btn) => {
  btn.addEventListener('click', () => { 
    btn.classList.toggle('active');
  });
});

// Accordion queshions
const accordion = document.getElementsByClassName('questions__box');
for (i = 0; i<accordion.length; i++ ){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}
// end Accordion queshions

// Добавление фона фиксированной шапки сайта прри скроле.
$(window).scroll(function () {
  let topHeader = $(".navigation").offset().top;
  if (topHeader > 0) {
    $(".navigation").addClass("active");
  } else {
    $(".navigation").removeClass("active");
  }
});

$(function () {
  // Top slider
  $(".top-slider").slick({
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Services slider
  $('.services__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrow" src="images/icons/services-arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="slick-arrow" src="images/icons/services-arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  });
  



  // Плавный скролл
  $(".menu__list a, .go-top").on("click", function (event) {
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});
