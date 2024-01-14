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
        {
            title: "Vincent Thomas Bridge",
            content: "Here's some information about the Vincent Thomas Bridge...",
            cameraView: function() {
                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500),
                    duration: 3
                });
            }
        },
        // Scene 2
        {
            title: "Middle Harbor",
            content: "Middle Harbor is known for...",
            cameraView: function() {
                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800),
                    duration: 3
                });
            }
        },
        // ... Additional scenes
    ];

    var currentSceneIndex = 0;

    function updateScene() {
        var scene = scenes[currentSceneIndex];
        document.getElementById('scene-title').textContent = scene.title;
        document.getElementById('scene-content').textContent = scene.content;
        scene.cameraView();
    }

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

    window.startStory = function() {
        document.getElementById('instruction-box').style.display = 'none';
        document.getElementById('story-navigation').style.display = 'block';
        updateScene();
    };

    window.onload = function() {
        // Your existing functions for managing the instruction overlay...
        
        // Initialize the story to the first scene
        if (scenes.length > 0) {
            updateScene();
        }
    };
})();








