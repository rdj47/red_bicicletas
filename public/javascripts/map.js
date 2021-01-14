var map = L.map('main_map').setView([-34.594337925117706, -58.39425799924528], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</a>',
}).addTo(map);

L.marker([-34.601902677953824, -58.410957381764355],).addTo(map);