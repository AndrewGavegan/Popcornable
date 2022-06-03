
$(function() {
  $(".my-rating").starRating({
    totalStars: 5,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'crimson',
    disableAfterRate: false,
    strokeWidth: 0,
    useGradient: false,
    readOnly: true
  });

  $(".my-rating-edit").starRating({
    totalStars: 5,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'crimson',
    disableAfterRate: false,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
      // console.log($el[0]);
      // console.log($el[0].getAttribute("data-rating"));
      $el[0].setAttribute('data-rating', currentRating);
      console.log(`changed rating to ${currentRating}!`);
    }
  });
});