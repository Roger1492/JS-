let mapStandar = document.getElementById("standar-map");
let map3D = document.getElementById("3d-map");
let mapIndoor = document.getElementById("indoor-map");

mapStandar.addEventListener("click", function () {
    if (!map) {
        var map = new AMap.Map("container", {
            resizeEnable: true,
            zoom: 17,
            center: [116.333926, 39.997245]
        })
    }
}, false)

map3D.addEventListener("click", function () {
    map = null;
    if (!map) {
        var map = new AMap.Map('container', {
            pitch: 75,
            viewMode: '3D',
            zoom: 17,
            expandZoomRange: true,
            zooms: [3, 20],
            center: [116.333926, 39.997245]
        });
    }

}, false);

mapIndoor.addEventListener("click", function () {
    map = null;
    if (!map) {
        var map = new AMap.Map('container', {
            resizeEnable: true,
            center: [116.518542, 39.924677],
            zoom: 18,
            pitch: 50,
            viewMode: '3D'
        });
        map.on('indoor_create', function () {
            map.indoorMap.showIndoorMap('B000A856LJ', 5);
        })
    }
}, false);