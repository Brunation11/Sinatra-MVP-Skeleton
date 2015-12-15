$(document).ready(function() {

  $('   ').on('submit', '   ', function(event) {
    event.preventDefault();
    $.ajax({
      url: event.target.action,
      method: 'post',
      data: $(event.target).serialize()
    }).done(function(result) {
      $('   ').html(result);
    }).fail(function(error) {
      console.log("Error: " + error);
    })
  });

});
