// Start burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu-items');
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
menu.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
};

// Меню бургер
  // $('.menu-btn').click(function(){
  //   $('.menu-items').toggleClass('active'); 
  //   $('.menu-btn').toggleClass('active'); 
  //  });
  
  // $('.menu').click(function(){
  //   $('.menu-items').remove('active'); 
  //   $('.menu-btn').remove('active'); 
  //  });

  // $('.expand-btn').click(function(){
  //   $('.expand-btn').toggleClass('active'); 
  //  });
  
  // $('ul li a').click(function() {
  //   if ( $('.menu-items').hasClass('active')) {
  //    $('.menu-items').removeClass('active');
  //    $('.menu-btn').removeClass('active'); 
  //   }
  // });




// End burger menu


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
// Меню бургер
  // $('.menu-btn').click(function(){
  //   $('.menu-items').toggleClass('active'); 
  //   $('.menu-btn').toggleClass('active'); 
  //  });
  
  // $('.menu').click(function(){
  //   $('.menu-items').remove('active'); 
  //   $('.menu-btn').remove('active'); 
  //  });
  
  // $('ul li a').click(function() {
  //   if ( $('.menu-items').hasClass('active')) {
  //    $('.menu-items').removeClass('active');
  //    $('.menu-btn').removeClass('active'); 
  //   }
  // }) 

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

  // Плавный скролл
  $(".menu__list a, .go-top").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});



// При скроле меню закрывается
// window.onscroll = () => {
//   menu.classList.remove("active");
//   menuBtn.classList.remove("fa-times");
// };