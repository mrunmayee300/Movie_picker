// Set default degree (360*5)
var degree = 1800;
// Number of clicks = 0
var clicks = 0;

$(document).ready(function(){
    $('#spin').click(function(){
        // Increment the number of clicks
        clicks++;

        // Calculate new degree by multiplying the degree by number of clicks
        // Generate a random number between 1 - 360, then add to the new degree
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * 360) + 1;
        var totalDegree = newDegree + extraDegree;

        // Apply the CSS transform to rotate the wheel
        $('#inner-wheel').css({
            'transform' : 'rotate(' + totalDegree + 'deg)',
            'transition': 'transform 6s cubic-bezier(0,.99,.44,.99)'
        });
    });
});
