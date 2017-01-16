// Demo of Cork web advertising possibilities. All content is the property
// of Vital38 Media


/* Handles flipping the specific element when manually
* clicked by the user.
* @param {object} card - jQuery object of the card to be flipped
*/
function corkFlip(card) {
    console.log(card);
    card.flip();
}

function corkFlipped(card) {
    console.log(card)
}

/* Triggered when Cork logo is clicked. At an interval of 3 seconds, a random
* element is flipped automatically. The same element cannot be flipped twice
* in a row.
*/
function autoRotate() {
    var numAds = 8;
    var previous = 0;
    setInterval(function(){
        var random = Math.floor((Math.random() * numAds) + 1);
        // Ensure that the element selected wasn't the element that was most
        // recently flipped.
        while (random === previous) {
            random = Math.floor((Math.random() * numAds) + 1);
        }
        previous = random;
        var element = "#card" + random;
        $(element).flip('toggle');
     }, 3000);
}

// Begin by flipping all elements to the front so 16 items don't show on-screen
// at once initially.
$(document).ready(function () {
    $('.grid-item').flip();
})

// Remove the loading indicator once all images have been loaded (there's a lot)
$(window).on("load", function(){
    $('#cover').fadeOut();
})
