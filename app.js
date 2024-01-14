(function() {
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

     // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
        // Set the home button to a static view over Long Beach
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
    });

    viewer.scene.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-118.220071, 33.766145, 10000.0),
    });

    // Slides for the instruction overlay
    var slides = document.querySelectorAll('.slide');
    var currentSlideIndex = 0; // Start at the first slide

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
        // If you have additional logic to start the story, you can call it here
        // For now, this does nothing but close the instructions
    };

    // The window.onload function is set to prepare the slides without advancing any scenes or showing additional content
    window.onload = function() {
        // Set the first slide to active when the page loads
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    };
})();










