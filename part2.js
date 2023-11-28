$('#submit-button').on('click', function(e){
    e.preventDefault();
    let $title = $('#title');
    let $rating = $('#rating');
    let $newLi = $('<li>');
    $newLi.append($title.val() + ': ' + $rating.val()).append('<button id="remove-button">Remove</button>')
    $('#rating-list').append($newLi)

    $title.val('');
    $rating.val('');
})

$('#rating-container').on('click','#remove-button', function(e){
    $(e.target).parent().remove()
})
