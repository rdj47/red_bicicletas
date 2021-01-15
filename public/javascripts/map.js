var map = L.map('main_map').setView([7.886367527014263, -72.50437077622026], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>',
}).addTo(map);

//L.marker([-34.601902677953824, -58.410957381764355],).addTo(map);
//[-34.59576626007367, -58.39107068477774]

$.ajax({ 
    dataType: "json",
    url: "api/bikes",
    success: function (result) {
        console.log(result);
        result.bikes.forEach(function (bike) {
            L.marker(bike.location, {title: bike.id}).addTo(map);
        });
    }
})