$(document).ready(function () {
var list = document.querySelector(".header__list"),
    element = document.querySelectorAll(".header__list li"),
    hamburger = document.querySelector(".hamburger"),
    html = document.querySelector("html")

    var windowWidth = $('body').innerWidth();
    // if(windowWidth > 576) {
    //     $('.subheader').slick({
    //         dots: false,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 2000,
    //         pauseOnHover: false,
    //         pauseOnFocus: false,
    //         pauseOnDotsHover: false,
    //         nextArrow: '<div>Next ></div>',
    //         prevArrow: '<div>< Previous</div>',
    //     });
    // }
    // gsap.registerPlugin(ScrollTrigger);
    //
    // let sections = gsap.utils.toArray(".card");
    //
    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".scroll",
    //         pin: true,
    //         scrub: 1,
    //         snap: 1 / (sections.length - 1),
    //         // base vertical scrolling on how wide the container is so it feels more natural.
    //         end: () => "+=" + document.querySelector(".scroll").offsetWidth
    //     }
    // });

    // $('.header__slider').slick({
    //     dots: false,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     pauseOnDotsHover: false,
    //     nextArrow: '<img src="../images/icons/arrow_right.png" width="29px" alt="">',
    //     prevArrow: '<img src="../images/icons/arrow_right_copy.png" width="29px" alt="">',
    // });
    if(windowWidth > 750) {
        $('.header__slider').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            nextArrow: '<img src="../images/icons/arrow_right.png" width="29px" alt="">',
            prevArrow: '<img src="../images/icons/arrow_right_copy.png" width="29px" alt="">',
        });
    }
    if(windowWidth < 750) {
        $('.last__directors').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            nextArrow: '<img src="../images/icons/arrow_right.png" width="29px" alt="">',
            prevArrow: '<img src="../images/icons/arrow_right_copy.png" width="29px" alt="">',
        });
    }
    if(windowWidth < 750) {
        $('.third__cards').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            nextArrow: '<img src="../images/icons/arrow_right.png" width="29px" alt="">',
            prevArrow: '<img src="../images/icons/arrow_right_copy.png" width="29px" alt="">',
        });
    }
      var  email = document.querySelectorAll(".last__email"),
          dropdown = document.querySelectorAll(".dropdown-content");

    email.forEach((function (email) {
        email.addEventListener("mouseenter", (function () {
            var listt = this.getAttribute('data-atr');
            dropdown.forEach((function (dropdown) {

                if (listt === dropdown.getAttribute('data-atr')) {
                    dropdown.classList.toggle("dropdown-content_active")
                }
            }));
        }));

        // email.addEventListener("mouseleave", (function () {
        //
        //     var listt = this.getAttribute('data-atr');
        //     dropdown.forEach((function (dropdown) {
        //
        //         if (listt === dropdown.getAttribute('data-atr')) {
        //                 dropdown.classList.remove("dropdown-content_active")
        //
        //
        //         }
        //     }));
        // }));
    }));
    // $(".last__email").mouseenter(function () {
    //     $(".dropdown-content").toggle("dropdown-content_active");
    // });


    var  link = document.querySelectorAll(".subheader__link"),
        dropdown2 = document.querySelectorAll(".dropdown-link-content"),
        exit = document.querySelectorAll(".dropdown__exit");

    link.forEach((function (link) {
        link.addEventListener("click", (function () {
            var listt = this.getAttribute('data-atr');
            dropdown2.forEach((function (dropdown2) {

                if (listt === dropdown2.getAttribute('data-atr')) {
                    dropdown2.classList.toggle("dropdown-link-content_active")
                    exit.forEach((function (exit) {
                        exit.addEventListener("click", (function () {
                            dropdown2.classList.remove("dropdown-link-content_active")
                        }));
                    }));
                }

            }));

        }));

        // email.addEventListener("mouseleave", (function () {
        //
        //     var listt = this.getAttribute('data-atr');
        //     dropdown.forEach((function (dropdown) {
        //
        //         if (listt === dropdown.getAttribute('data-atr')) {
        //                 dropdown.classList.remove("dropdown-content_active")
        //
        //
        //         }
        //     }));
        // }));
    }));
});