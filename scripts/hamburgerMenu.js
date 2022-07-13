$(document).ready(function(){
    
    $('.hamburger').click(function(){
      $(this).toggleClass("is-active");
    });

    $(".nav-button").click(function(){
        $('.hamburger').toggleClass("is-active");
      });

    $('.hamburger').on('click', () => {
        $('.smartphone-menu-wrapper').slideToggle();
    });

    $('.nav-button').on('click', () => {
        $('.smartphone-menu-wrapper').slideUp();
    })
  });