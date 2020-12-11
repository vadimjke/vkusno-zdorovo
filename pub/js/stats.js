$(document).ready(function() {
    var requestURL =
        "https://vkusno-zdorovo.ru/vote/json";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function() {
        var myData = request.response;
        var saladsVotes = myData[0].votes;
        var otherVotes = myData[1].votes;
        var soupsVotes = myData[2].votes;
        var meatVotes = myData[3].votes;
        var sandwichVotes = myData[4].votes;
        var pechkaVotes = myData[5].votes;







        // Initialize Chart using jQuery selector.
        // Get the chart container element.
        var chartContainer = $("#chartContainer");
        // Check if the element exists in the DOM.
        if (chartContainer.length === 1) {
            // Construct the options for the chart.
            var options = {
                animationEnabled: true,
                theme: "light1",
                title: {
                    text: "ПГУ буфет",
                },
                data: [{
                    type: "column",
                    dataPoints: [
                        { label: "Супы", y: soupsVotes },
                        { label: "Салаты", y: saladsVotes },
                        { label: "Мясные блюда", y: meatVotes },
                        { label: "Сэндвичи", y: sandwichVotes },
                        { label: "Выпечка", y: pechkaVotes },
                        { label: "Свой вариант", y: otherVotes },
                    ],
                }, ],
            };
            // Initialize the chart.
            $("#chartContainer").CanvasJSChart(options);
        }















    }






});