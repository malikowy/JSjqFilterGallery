$(document).ready(function(){
// 	w celu wyświetlenia elementów po załadowaniu strony
  $('.filter__items-item').addClass('highlight');
// 	w celu wyświetlenia elementów WSZYSTKICH
  $('.filter__buttons').on('click', '.filterNone', function() {
    $('.filter__items-item').addClass('highlight');
    console.log('showed all');
  });
  // 	w celu wyświetlenia elementów VISITED
  $('.filter__buttons').on('click', '.filter_1', function() {
    $('.highlight').removeClass('highlight');
    $('.filter__items-item').filter('.filter_1').addClass('highlight');
    console.log('Visited');
  });
  // 	w celu wyświetlenia elementów TO VISIT
  $('.filter__buttons').on('click', '.filter_2', function() {
    $('.highlight').removeClass('highlight');
    $('.filter__items-item').filter('.filter2').addClass('highlight');
    console.log('To visit');
  });
  // 	w celu wyświetlenia elementów NOT WORTH
  $('.filter__buttons').on('click', '.filter_3', function() {
    $('.highlight').removeClass('highlight');
    $('.filter__items-item').filter('.filter3').addClass('highlight');
    console.log('Not worth');
  });

// 	funkcja najezdzania na obrazek w celu wyswietlenia opisu
  $('.filter__items').find('figcaption').slideToggle();
  function showCaption() {
    $(this).find('figcaption').slideToggle();
  };
  $('.filter__items').on('mouseenter', 'figure', showCaption);
  $('.filter__items').on('mouseleave', 'figure', showCaption);
});
