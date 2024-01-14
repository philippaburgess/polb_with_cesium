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

    // Function to fly to the given location
    window.flyToLocationAndHold = function(index) {
        if (index >= locations.length) {
            return; // Stop if all locations have been visited
        }
        viewer.camera.flyTo({
            destination: locations[index],
            complete: function() {
                setTimeout(function() {
                    window.flyToLocationAndHold(index + 1);
                }, 12000); // 12 seconds
            }
        });
    };
})();

// Window onload event
window.onload = function() {
    // Access the slides and set the current slide index
    var slides = document.querySelectorAll('.slide');
    var currentSlideIndex = 0;

    // Function to move to the next slide
    window.nextSlide = function() {
        if (currentSlideIndex < slides.length - 1) {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex++;
            slides[currentSlideIndex].classList.add('active');
        }
    };

    // Function to close the instruction box and start the flyover
    window.closeInstructions = function() {
        document.getElementById('instruction-box').style.display = 'none';
        window.flyToLocationAndHold(0);
    };

    // Make the first slide active if slides are available
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
};
    
