
$(function() {
  $(".my-rating").starRating({
    totalStars: 5,
    emptyColor: 'lightgray',
    hoverColor: 'salmon',
    activeColor: 'crimson',
    disableAfterRate: false,
    strokeWidth: 0,
    useGradient: false,
    callback: function(currentRating, $el){
      alert('rated ' +  currentRating);
      console.log('DOM Element ', $el);
    }
  });
});