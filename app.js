(function() {
    var currentSceneIndex = 0;
    var currentSlideIndex = 0;
    var slides;


        // Section 1: API Keys and Viewer Initialization
    
    const apiKey = "AAPK0dc01961f9f84d51999214b2d7ca7ff6x6uGDqE0RJUvSzovTBuHrsjDNrutFT4xmERUGjjwJyxRD20vlXQvtIEPtAzSAOb7";
    Cesium.ArcGisMapService.defaultAccessToken = apiKey;

    const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWJlYzdlYi03OWE2LTQ4NDktYjU1MS0wMjg4MWIzMDI0YmEiLCJpZCI6MTczNDE4LCJpYXQiOjE3MDE2MjM1OTZ9.UMTbFZ4HZz2IJbfsVFFsob7GgDE1haShx5DWUdhrkr4";
    Cesium.Ion.defaultAccessToken = cesiumAccessToken;

   // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, // Don't show the animation widget
    baseLayerPicker: false, // Don't show the base layer picker
    fullscreenButton: false, // Don't show the fullscreen button
    vrButton: false, // Don't show the VR button
    geocoder: false, // Don't show the geocoder widget
    homeButton: false, // Don't show the home button
    infoBox: false, // Don't show the info box
    sceneModePicker: false, // Don't show the scene mode picker
    selectionIndicator: false, // Don't show the selection indicator
    timeline: false, // Don't show the timeline
    navigationHelpButton: false, // Don't show the navigation help button
});

    // Section 2: Scene and Location Setup
    // Define your locations array here as before

 const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 2500), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2065, 33.7464, 800), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.1893, 33.7528, 600), // Queen Mary
        Cesium.Cartesian3.fromDegrees(-118.1704, 33.7657, 800)  // Bluff Park (Residential Area)
        // Add more locations as needed
    ];

    const scenes = [
        {
            title: "Scene 1: The Green Port",
            content: "The Port of Long Beach (POLB) refers to itself as the 'The Green Port' as it strives to be a role model for green port operations. As one of the busiest port in both the United States and the world, the cargo it transports are a significant driver to national economy.

The port is located adjacent to the Port of Los Angeles in the City of Long Beach at the southern end of Los Angeles County and part of the South Bay Basin. Its strategic location provides access to major highways, rail lines, and airports. This makes it a convenient and efficient port for shippers and receivers.",
            location: Cesium.Cartesian3.fromDegrees(-115.2765, 31.7489, 2500)
        },
               {
            title: "Scene 2: The Port",
            content: "Description of The Port...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 3500)
        },
               {
            title: "Scene 3: The Port of Long Beach Terminals",
            content: "Description Port Terminals...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 4500)
        },
              {
            title: "Scene 4:TEUs",
            content: "Description TEUs...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 5500)
        },
              {
            title: "Scene 5:Economic Impact",
            content: "Description Economic Impact..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 6500)
        },
              {
            title: "Scene 6:Environment",
            content: "Description Environment..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 7500)
        },
             {
            title: "Scene 7:Clean Initiatives",
            content: "Description Clean Initiatives..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 8500)
        },
              {
            title: "Scene 8:Air Quality",
            content: "Description Air Quality..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 9500)
        },
             {
            title: "Scene 9:Modernization",
            content: "Description Modernization..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 10500)
        },
             {
            title: "Scene 10:Future Planning",
            content: "Description Future Planning...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 11500)
        },
             {
            title: "Scene 11:Funding",
            content: "Description Funding...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 12500)
        },
             {
            title: "Scene 12:Good Neighbors",
            content: "Description Good Neighbors...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 13500)
        },
            {
            title: "Scene 13:Solutions",
            content: "Description Solutions...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 14500)
        },
             {
            title: "Scene 14: References",
            content: "Description References...",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 15500)
        },
             {
            title: "Scene 15: Thank You",
            content: "Description Thank You ..",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 16500)
        },
            
    ];

function updateScene() {
    var scene = scenes[currentSceneIndex];

    var titleElement = document.getElementById('scene-title');
    var contentElement = document.getElementById('scene-description');

    if(titleElement && contentElement) {
        titleElement.textContent = scene.title;
        contentElement.textContent = scene.content;

        viewer.camera.flyTo({
            destination: scene.location,
            duration: 2  // Duration of the camera flight in seconds
        });
    } else {
        console.error("Scene title or content element not found!");  // Error log if elements are not found
    }
}  // This is where the function should end with a closing brace

// Section 3: Scene Navigation Functions

window.nextScene = function() {
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updateScene();
        document.getElementById('slide-forward').style.display = 'block';
        document.getElementById('slide-back').style.display = 'block';

        if (currentSceneIndex === scenes.length - 1) {
            document.getElementById('slide-forward').style.display = 'none';
        }
    } else {
        // Optional: Handle the last scene case, such as hiding the 'Next' button or looping to the first scene
    }
}; // This closing bracket ends the window.nextScene function

window.previousScene = function() {
    if (currentSceneIndex > 0) {
        currentSceneIndex--;
        updateScene();
        document.getElementById('slide-forward').style.display = 'block';

        if (currentSceneIndex === 0) {
            document.getElementById('slide-back').style.display = 'none';
        }
    } else {
        // Optional: Handle the first scene case, such as hiding the 'Previous' button or looping to the last scene
    }
}; // This closing bracket ends the window.previousScene function

// Function to show the scene container
function showSceneContainer() {
    var sceneContainer = document.getElementById('scene-container');
    if (sceneContainer) {
        sceneContainer.style.display = 'block';
    }
}

// Section 4: Initial Flyover

function onFlyoverComplete() {
    document.getElementById('navigation-buttons').style.visibility = 'visible';
    showSceneContainer();
    document.getElementById('slide-forward').style.display = 'block';
    document.getElementById('slide-back').style.display = 'none'; // Hide the "Previous" button on the first scene
    updateScene(); // This will load the first scene
}

window.flyToLocationAndHold = function(index) {
    if (index >= locations.length) {
        onFlyoverComplete();
    } else {
        viewer.camera.flyTo({
            destination: locations[index],
            complete: function() {
                setTimeout(function() {
                    flyToLocationAndHold(index + 1);
                }, 1500); // Time to hold on each location
            }
        });
    }
};

window.closeScene = function() {
    var sceneContainer = document.getElementById('scene-container');
    if (sceneContainer) {
        sceneContainer.style.display = 'none'; // Hide the scene container
    }
    // Optional: Add logic to navigate back to the main view or do nothing
};

// Section 5: Page Load Setup

window.onload = function() {
   slides = document.querySelectorAll('.slide');
    
    // Hide the navigation buttons initially
    document.getElementById('navigation-buttons').style.visibility = 'hidden';
    document.getElementById('slide-forward').style.display = 'none'; // Hide the "Next" button
    document.getElementById('slide-back').style.display = 'none'; // Hide the "Previous" button

// Activate the first slide if any are present
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    };
// Define next slide function
window.nextSlide = function() {
        if (currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex++;
        slides[currentSlideIndex].classList.add('active');
    }
};
    // Define the function to move to the next slide

 // Define the function to close the instructions and start the flyover
window.closeInstructions = function() {
    // Hide the instruction box
    document.getElementById('instruction-box').style.display = 'none';
    // Start the flyover sequence
    flyToLocationAndHold(0); // Ensure this function is defined elsewhere
      };
})();
