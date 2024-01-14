(function() {
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

    // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
        // ... other viewer settings
    });

    // Locations array
    const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2065, 33.7464, 800), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.1893, 33.7528, 600), // Queen Mary
        Cesium.Cartesian3.fromDegrees(-118.1704, 33.7657, 800)  // Bluff Park (Residential Area)
    ];

        var scenes = [
        // Scene 1
        function() {
            viewer.camera.flyTo({
                destination: locations[0],
                duration: 3
            });
        },
        // Scene 2
        function() {
            viewer.camera.flyTo({
                destination: locations[1],
                duration: 3
            });
        },
        // ... Additional scenes
    ];

    var currentSceneIndex = 0;

    window.nextScene = function() {
        if (currentSceneIndex < scenes.length - 1) {
            currentSceneIndex++;
            scenes[currentSceneIndex]();
        }
    };

    window.previousScene = function() {
        if (currentSceneIndex > 0) {
            currentSceneIndex--;
            scenes[currentSceneIndex]();
        }
    };

    window.startStory = function() {
        document.getElementById('instruction-box').style.display = 'none';
        scenes[currentSceneIndex]();
    };
})();

window.onload = function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlideIndex = 0;

    window.nextSlide = function() {
        if (currentSlideIndex < slides.length - 1) {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex++;
            slides[currentSlideIndex].classList.add('active');
        }
    };

    window.closeInstructions = function() {
        document.getElementById('instruction-box').style.display = 'none';
        scenes[currentSceneIndex]();
    };

    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
};








