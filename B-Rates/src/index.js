// Toggle Animation by Class
import supabase from "../config/supabaseClient"


$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('animate');
  } else {
    $('nav').removeClass('animate');
  }
})