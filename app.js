(function() {
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

    const viewer = new Cesium.Viewer("cesiumContainer", {
        // ... other viewer settings
    });


var currentSlideIndex = 0;
var slides = document.querySelectorAll('.slide');

function nextSlide() {
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');

    // Move to the next slide
    currentSlideIndex += 1;

    // Check if it's the last slide
    if (currentSlideIndex >= slides.length) {
        closeInstructions(); // If it is the last slide, close the instruction box
    } else {
        // Show next slide
        slides[currentSlideIndex].classList.add('active');
    }
}

function closeInstructions() {
    // Close the instruction box
    document.getElementById('instruction-box').style.display = 'none';
    // Additional code to start any other processes if necessary
}

// Initialize the first slide to be active on window load
window.onload = function() {
    slides[0].classList.add('active');
};

    const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2065, 33.7464, 800), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.1893, 33.7528, 600), // Queen Mary
        Cesium.Cartesian3.fromDegrees(-118.1704, 33.7657, 800)  // Bluff Park (Residential Area)
    ];

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




