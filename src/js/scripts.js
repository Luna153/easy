//@prepros-prepend scrollAnim.js
//@prepros-prepend gsapAnim.js


(function () {
  
  $.fn.MainDataInIt = function () {
    $("body").css("visibility", "visible");
    $(".loader").delay(500).fadeOut("slow");
    $("#overlayer")
    .delay(500)
    .fadeOut("slow", function () {
      Cursor();
      ClickEvent();
      // HoverEvent();
    });
    
    Init();
  };
    
  $('.owl-carousel').owlCarousel({
    margin: 10,
    center: true,
    items: 1,
    dots: true,
    nav: true,
    navText: ["<img src='images/svg/nav.svg'>",
      "<img src='images/svg/nav.svg'>"
    ],
    animateIn: "zoomIn",
    animateOut: 'zoomOut'
  });

  // 讀取瀏覽器語言
  document.addEventListener('DOMContentLoaded', function() {
    var userLang = navigator.language || navigator.userLanguage;    
    let _origin = window.location.origin;
    let _pathname = window.location.pathname;
  
    // 檢查是否在主入口頁面
    if (_pathname === '/' || _pathname === '/index.html') {
      let newUrl = '';

      switch (userLang) {
        case 'vi':
          newUrl = `${_origin}/index_VI_VN.html`;
          break;
        case 'en-US':
        case 'en':
          newUrl = `${_origin}/index_EN_VN.html`;
          break;
        case 'zh-TW':
        case 'zh':
          newUrl = `${_origin}/index_TW_HK.html`;
          break;
        case 'zh-CN':
        case 'zh-HK':
          newUrl = `${_origin}/index_CN_HK.html`;
          break;
        default:
          // 越南區 + 中文
          newUrl = `${_origin}/index_TW_VN.html`;
          break;
      }

      if (newUrl && newUrl !== window.location.href) {
        window.location.href = newUrl;
      }
        
  //     if (newUrl) {
  //       // 設置標記以防止重定向循環
  //       sessionStorage.setItem('redirected', 'true');
  //       window.location.href = newUrl;
  //     }
    }
  });


  // Scroll 到區塊時 Navbar選單加上active
  // ------------------------
  $(window).on('scroll touchmove', function () {
    var scrollPos = $(this).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(this).height();
    var connectionHeight = $('#section-connection').height();

    $('section').each(function () {
      var sectionTop = $(this).offset().top - 100;
      var sectionBottom = sectionTop + $(this).height();
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        var sectionId = $(this).attr('id');
        $('.nav__link').removeClass('active');
        $('.nav__link[href="#' + sectionId + '"]').addClass('active');
      }
    });

    // Check if at the bottom of the page（解決section-connection高度不足問題）
    if (scrollPos + windowHeight + connectionHeight + (window.innerWidth <= 768 ? 300 : 0) >= documentHeight) {
      $('.nav__link').removeClass('active');
      $('.nav__link[href="#section-connection"]').addClass('active');
    }
  });


  // 語系
  document.querySelector('.select__trigger').addEventListener('click', function () {
    console.log(this)
    $(this).closest('.select').toggleClass("open");
  })

  let option = document.querySelectorAll(".custom-option");
  [].forEach.call(option, el => {
    el.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        console.log(this)
        $(this).closest('.custom-option.selected').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('.select__trigger span').textContent = this.textContent;
        // 跳轉
        let _origin = window.location.origin;
        window.location = _origin + $(this).data('href')
        console.log(_origin + $(this).data('href'))
      }
    })
  })

  // 地區
  document.querySelector('.select-area__trigger').addEventListener('click', function () {
    console.log(this)
    $(this).closest('.select-area').toggleClass("open");
  })

  let area = document.querySelectorAll(".custom-option-area");
  [].forEach.call(area, el => {
    el.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        console.log(this)
        $(this).closest('.custom-option-area.selected').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('.select-area__trigger span').textContent = this.textContent;
        // 跳轉
        let _origin = window.location.origin;
        window.location = _origin + $(this).data('href')
        console.log(_origin + $(this).data('href'))
      }
    })
  })

  // 空白處關閉drop down
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.select')
    const selectArea = document.querySelector('.select-area')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
    if (!selectArea.contains(e.target)) {
      selectArea.classList.remove('open');
    }
  });

  var controls = document.querySelectorAll('.nav__menu .dropdown');

  // you can use forEach here too
  [].forEach.call(controls, el => {
    el.addEventListener('click', btnClick, false)
  })

  function btnClick() {
    // use Array function for lexical this
    [].forEach.call(controls, el => {
      // except for the element clicked, remove active class
      if (el !== this) el.classList.remove('is-active');
    });

    // toggle active on the clicked button
    this.classList.toggle('is-active');
  }


  var ClickEvent = function (e) {
    $.Body.on(
      "click",
      ".openlb ,.lightbox__btn-close ,.nav__trigger",
      function (e) {
        var _click = $(this);
        switch (true) {
          case _click.hasClass("openlb"):
            e.preventDefault();
            $(".nav__trigger").find("span").removeClass("is--active");
            $(".nav__menu").removeClass("is--active");
            $(".lightbox").addClass('lightbox--active');
            $(".lightbox__content").addClass('lightbox__content--active')
            break;
          case _click.hasClass("close"):
            e.preventDefault();
            $(".lightbox").removeClass('lightbox--active');
            $(".lightbox__content").removeClass('lightbox__content--active')
            $(".nav__row").removeClass('is--active')
            break;
          case _click.hasClass("download"):
            e.preventDefault();
            $(".nav__trigger").find("span").removeClass("is--active");
            $(".nav__menu").removeClass("is--active");
            $("html, body").animate({
              scrollTop: $("#section-footer").offset().top
            },
            500
          );
          break;
            case _click.hasClass("nav__trigger"):
              e.preventDefault();
              $(".nav__trigger").find("span").toggleClass("is--active");
              $(".nav__menu").toggleClass("is--active");
              var allActive = $(".nav__trigger").find("span").length === $(".nav__trigger").find("span.is--active").length;
              if (allActive) {
                _click.closest('.nav__row').addClass('is--active');
              } else {
                _click.closest('.nav__row').removeClass('is--active');
              }
              break;

        }
      }
    );
  };

  var Cursor = function (e) {
    var cur = $('.cursor');
    var follow = $('.cursor__inner')
    var cur_vn = $('.cursor_vn');
    var follow_vn = $('.cursor_vn__inner')
    gsap.set(cur, { xPercent: -50, yPercent: -50 });
    gsap.set(follow, { xPercent: -50, yPercent: -50 });
    gsap.set(cur_vn, { xPercent: -50, yPercent: -50 });
    gsap.set(follow_vn, { xPercent: -50, yPercent: -50 });

    $(window).mousemove(function (e) {
      gsap.to(cur, 0.2, {
        x: e.clientX,
        y: e.clientY
      });

      gsap.to(follow, 0.9, {
        x: e.clientX,
        y: e.clientY
      });
      gsap.to(cur_vn, 0.2, {
        x: e.clientX,
        y: e.clientY
      });

      gsap.to(follow_vn, 0.9, {
        x: e.clientX,
        y: e.clientY
      });
    })
  };

  function Init(e) {
    $.Body.addClass("ani_start");
    var tlKv = gsap.timeline({
      // delay: 0.2,
      // repeat: -1,
      // repeatDelay: 0.8,
      onComplete: function () {
        AOS.init({
          once: true,
        });
      },
    });
    tlKv
      .addLabel('Start')
      .from('.section-kv__decobox-banner--bg', {
        transformOrigin: 'center',
        opacity: 1,
        scale: 1.2,
        duration: 2.5,
        clearProps: 'scale'
      }, 'kvStart')
      .from('.section-kv__h1', {
        scale: 0,
        ease: "elastic.out(1, 0.45)",
        duration: 1,
        clearProps: 'scale'
      }, 'kvStart+=1')
      .from('.section-kv__h2', {
        scale: 0,
        ease: "elastic.out(1, 0.45)",
        duration: 1,
        clearProps: 'scale'
      }, '<0.2')
      .from('.section-kv__h3', {
        scale: 0,
        ease: "elastic.out(1, 0.35)",
        duration: 1,
        clearProps: 'scale'
      }, '<0.2')
      .from('.section-kv__p', {
        scale: 0,
        ease: "elastic.out(1, 0.35)",
        duration: 1,
        clearProps: 'scale'
      }, '<0.2')
      .from('header', {
        y: '-100%',
        duration: 1,
        opacity: 0,
        clearProps: 'scale'
      }, '<')
  };


  // copyright console
  // 取得瀏覽器完整的版本資訊.轉成小寫.判斷字串() > -1(找不到)
  if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    var a = ["\n\n %c Developed by Bank SinoPac. -> https://bank.sinopac.com/ \n\n", "background: #254a91; padding:5px 0;color: #ffffff;"];
    console.log.apply(console, a)
  } else {
    console.log("Developed by Bank SinoPac. -> https://bank.sinopac.com/");
  }
  

})();

$(document).ready(function () {
  $.Window = $(window);
  $.Body = $("body");
  $.Body.MainDataInIt();
});

// 越南版輪播加動畫
$(document).ready(function () {
  // 初始化輪播
  var elms = document.getElementsByClassName('splide');
  var sliders = [];

  for (var i = 0, len = elms.length; i < len; i++) {
    var options = {
      perPage: 1,
      arrows: false,
      pagination: true,
      gap: "0",
      autoplay: true,         // 自動播放
      interval: 3000,         // 間隔時間
      type: 'loop',           // 循環
    };
    sliders[i] = new Splide(elms[i], options).mount();
  }

  // 執行動畫
  gsap.from('.activate-steps--screenshot1', {
    transformOrigin: 'center',
    opacity: 1,
    scale: 1.2,
    duration: 2.5,
    clearProps: 'scale', // 僅清除scale屬性
  });
});




  // GSAP
  gsapAni();
  gsap.registerPlugin(ScrollTrigger);


// 輪播