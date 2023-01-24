var stickyOffset = $('#topnav').offset().top -1;



$(window).scroll(function(){
  var sticky = $('#topnav'),
      scroll = $(window).scrollTop(),
      pages = $('.pages'),
      button = $('.menu-button');
      
  if (scroll >= stickyOffset)
  sticky.addClass('fixed');
  else 
  sticky.removeClass('fixed');

  if ((scroll-500) >= stickyOffset)
  pages.addClass('hidden');
  else
  pages.removeClass('hidden');
});