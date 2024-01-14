(function() {
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

   // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
        // ... other viewer settings
    });

 const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2065, 33.7464, 800), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.1893, 33.7528, 600), // Queen Mary
        Cesium.Cartesian3.fromDegrees(-118.1704, 33.7657, 800)  // Bluff Park (Residential Area)
        // Add more locations as needed
    ];

   var scenes = [
        {
            title: "Title for Scene 1",
            content: "Content for Scene 1...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500)
        },
        {
            title: "Title for Scene 2",
            content: "Content for Scene 2...",
            location: Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800)
        },
        // Add more scenes as needed
    ];

    // Current scene index
    var currentSceneIndex = 0;

    // Function to update the current scene
    function updateScene() {
        var scene = scenes[currentSceneIndex];
        document.getElementById('scene-title').textContent = scene.title;
        document.getElementById('scene-content').textContent = scene.content;
        viewer.camera.flyTo({
            destination: scene.location,
            duration: 2 // Adjust as needed
        });
    }

    // Functions to navigate between scenes
    window.nextScene = function() {
        if (currentSceneIndex < scenes.length - 1) {
            currentSceneIndex++;
            updateScene();
        }
    };

    window.previousScene = function() {
        if (currentSceneIndex > 0) {
            currentSceneIndex--;
            updateScene();
        }
    };

    // Function to execute when initial flyover is complete
    function onFlyoverComplete() {
        document.getElementById('slide-forward').style.visibility = 'visible';
        updateScene(); // Start the storytelling part
    }

    // Function to fly to each location and hold
    window.flyToLocationAndHold = function(index) {
        if (index >= locations.length) {
            onFlyoverComplete(); // When flyover is complete, call this function
            return;
        }
        viewer.camera.flyTo({
            destination: locations[index],
            complete: function() {
                setTimeout(function() {
                    window.flyToLocationAndHold(index + 1);
                }, 3000); // Wait time before flying to the next location
            }
        });
    };

    // Set up the initial state when the page loads
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
            window.flyToLocationAndHold(0);
        };

        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    };
})();
















