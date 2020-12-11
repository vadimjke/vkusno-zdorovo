$(document).ready(function() {

    $("#comment-div").hide();


    $('input[type="radio"]').click(function() {
        if ($(this).attr("value") == "other") {
            $("#comment-div").show('fast');
        } else {
            $("#comment-div").hide('fast');
        }
    });








    // Form submission event listener (event handler)
    $("#myForm").submit(function(e) {
        e.preventDefault();
        // Get the checked input element's value.
        var house = $(".radio:checked").val();
        // Construct the data to be sent as a payload to the AJAX call.
        var data = {
            "vote": house
        };

        $.post("/vote", data, function(res) {
            // Log the output in the console.
            if (res.success === true) {
                $('.vkusno-votes').hide();
                $('.after-vote').show();
            }
        });
    });



    $("#repeat").click(function(e) {
        e.preventDefault();
        location.reload();
    })





});