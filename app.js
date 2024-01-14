(function() {
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

  // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        }),
        baseLayerPicker: false,
        geocoder: false,
        sceneModePicker: false
    });

        const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500), // Vincent Thomas Bridge
        // ... other locations
    ];

   viewer.scene.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-118.220071, 33.766145, 10000.0),
    });

    // Slides for the instruction overlay
    var slides = document.querySelectorAll('.slide');
    var currentSlideIndex = 0;

    // Function to move to the next slide in the instruction overlay
    window.nextSlide = function() {
        if (currentSlideIndex < slides.length - 1) {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex++;
            slides[currentSlideIndex].classList.add('active');
        }
    };

    // Function to close the instruction overlay
    window.closeInstructions = function() {
        document.getElementById('instruction-box').style.display = 'none';
    };

    // Set the first slide to active when the page loads
    window.onload = function() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    };



    function flyToLocationAndHold(index) {
        if (index >= locations.length) {
            return; // Stop if we've visited all locations
        }

        viewer.camera.flyTo({
            destination: locations[index],
            complete: function() {
                // Add data layers or other actions here
                setTimeout(function() {
                    flyToLocationAndHold(index + 1);
                }, 12000); // 12 seconds
            }
        });
    }

    flyToLocationAndHold(0);
})();
    
})();




