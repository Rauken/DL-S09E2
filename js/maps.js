var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
var key = '2c2205d18d6af2bf765f377c9fa41d0c/';
var mymap = null;
var coords = {
    parcela: '-32.722666, -71.220868',
};
$(document).ready(function() {
    generarMapa();
    //Genera el primer mapa
    function generarMapa() {
        mymap = L.map('mapid').setView([-32.722666, -71.220868], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZXVycXVldGEiLCJhIjoiY2pveWs1YTh2Mms0bzNrcGl1OWdremtpdiJ9.fxU81NktFjsaHLFxgN5WHA'
        }).addTo(mymap);
        var marker = L.marker([-32.722666, -71.220868]).addTo(mymap);
    }

});