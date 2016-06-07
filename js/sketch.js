var default_len = 16;
var current_len = 16;

$(document).ready(function() {

    // Create 16x16 grid of divs
    for (var i = 0; i < default_len; i++) {
        for (var j = 0; j < default_len; j++) {
            $("<div>").addClass("pixel").appendTo("#container");
        }
    }

    // Set up color change effect
    $(".pixel").mouseenter(function() {
        $(this).addClass("dark_pixel");
    });

});

function resetGrid() {
    var len = prompt("length?");
    if (len < 1) {
        len = default_len;
    }
    $("#container").empty();

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            $("<div>").addClass("pixel").appendTo("#container");
        }
    }

    var pixels_per_unit = calculatePixels(len);
    $(".pixel").css({"height": pixels_per_unit, "width": pixels_per_unit});

    $(".pixel").mouseenter(function() {
        $(this).addClass("dark_pixel");
    });
}

function calculatePixels(len) {
    container_size = 864;
    margin_pixels = len * 2 + 2;
    container_size -= margin_pixels;
    pixels_per_unit = Math.floor(container_size / len) - 2;
    console.log(pixels_per_unit);
    current_len = len;
    return pixels_per_unit + "px";
}