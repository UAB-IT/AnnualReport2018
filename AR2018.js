document.body.className += ' javascript';
jQuery(document).ready(function() {
// Check if element is scrolled into view
function isScrolledIntoView(elem) {
  var docViewTop = jQuery(window).scrollTop();
  var docViewBottom = docViewTop + jQuery(window).height();

  var elemTop = jQuery(elem).offset().top;
  var elemBottom = elemTop + jQuery(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// If element is scrolled into view, fade it in
jQuery('.parallax').scroll(function() {
  jQuery('.animated').each(function() {
    if (isScrolledIntoView(this) === true) {
      jQuery(this).addClass('fadein');
    }
  });
});
});
