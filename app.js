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
            content: "<p>The Port of Long Beach (POLB) refers to itself as the 'The Green Port' as it strives to be a role model for green port operations. As one of the busiest port in both the United States and the world, the cargo it transports are a significant driver to national economy.</p>" +

"<p>The port is located adjacent to the Port of Los Angeles in the City of Long Beach at the southern end of Los Angeles County and part of the South Bay Basin. Its strategic location provides access to major highways, rail lines, and airports. This makes it a convenient and efficient port for shippers and receivers.</p>",
            location: Cesium.Cartesian3.fromDegrees(-115.2765, 31.7489, 2500)
        },
               {
            title: "Scene 2: The Port",
            content: "<p>The Port of Long Beach is the second largest port in the United States in terms of container volume. The Port generates over $36 billion in annual economic activity, handles over $200 billion in annual trade volume, and supports over 450,000 jobs in Southern California. As a major contributor to the local economy, its operations are essential to the region's continued prosperity.</p>" +

"<p>Each year the port handles over 9 million 20-foot container units (TEUs). This number has grown year over year. However, all of this benefit and growth this is not without a significant impact to the environment. The Port has put significant attention to balancing these activities with its environmental impact.</p>",
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
            content: "<p>The port's operations impact air quality, soil, groundwater, and the well-being of both its workforce and the local community. The surrounding ecosystems, including marine and wildlife habitats, are also affected by the port's activities.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 7500)
        },
             {
            title: "Scene 7:Clean Initiatives",
            content: "<p>The Port of Long Beach have been trailblazing in their efforts to use clean energy sources, reduce air pollution, and protect water quality, and restore natural habitats. They continue to work diligently in collaboration with governmental and local partners to be a model "green" port. Some of the specific actions and plans to reduce the environmental impact of the port include:</p>" + 


"<p>Using clean energy sources. The Port has invested in a number of renewable energy projects, including solar panels and wind turbines.</p>" +


"<p>Improving air quality. The Port has implemented a number of measures to reduce air pollution, including truck electrification, cleaner fuels, and a green fleet program.</p>" + 


"<p>Protecting water quality. The Port has a number of programs in place to protect water quality, including stormwater management, pollution prevention, and habitat restoration.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 8500)
        },
              {
            title: "Scene 8:Air Quality",
            content: "<p>The Clean Air Action Plan (CAAP) is a comprehensive plan to reduce air pollution in the South Coast Air Basin. The plan was developed by the South Coast Air Quality Management District (SCAQMD) in collaboration with local governments, businesses, and environmental groups. The CAAP is an important step in the Port of Long Beach's commitment to environmental stewardship. The CAAP is designed to monitor and improve air quality in the Port of Long Beach and the surrounding area, and help mitigate risks to public health.</p>" +

"<p>The overlay is a polygon of the County of Los Angeles. The majority of pollution that causes asthma and has an airborne cancer risk is actually much higher in the center of the city of Los Angeles, and much less so than near the ports. This is an improvement over past decades and years although there is still more to be done.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 9500)
        },
             {
            title: "Scene 9:Modernization",
            content: "<p>The Port of Long Beach is taking a number of steps to reduce emissions from its operations, including the modernization of the Vincent Thomas Bridge. Other initiatives include:</p>" + 


"<p>The Port is investing in low-sulfur marine fuel (LSMF) to reduce emissions from ships.</p>" + 


"<p>The Port is also investing in electric and green technologies, such as on-dock electric power and shore power, to reduce emissions from trucks and trains.</p>" + 


"<p>The Port offers incentive programs to vessels and trucks to help accelerate the adoption of cleaner fuel and green technologies.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 10500)
        },
             {
            title: "Scene 10:Future Planning",
            content: "<p>There are several objectives that the port is committed to meeting by 2030 and by 2050 to reduce contaminants and improve quality of life by improving the ports relationship to the environment.</p>" + 


"<p>The Climate Adaptation and Coastal Resiliency Plan (CRP), a strategic framework that identifies the risks posed by climate change and outlines comprehensive strategies to address these challenges.</p>" + 


"<p>They are working towards reducing greenhouse gas emissions by 50% by 2030 and 100% by 2050.</p>" + 


"<p>They continue to monitor and improve air quality by reducing emissions of air pollutants such as particulate matter and nitrogen oxides.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 11500)
        },
             {
            title: "Scene 11:Funding",
            content: "<p>Securing funding is a crucial component to achieving the port's sustainability goals. Among the government sources, notable contributors include the Maritime Administration (MARAD) under the U.S. Department of Transportation, the California Air Resources Board (CARB), and the South Coast Air Quality Management District (SCAQMD). These agencies have been instrumental in providing the financial backing needed for various environmental initiatives.</p>" + 

"<p>In addition to governmental support, the Port has successfully partnered with private companies, such as Toyota and Amazon, which have provided substantial private funding. This collaboration between public and private sectors is a key element in the port's funding strategy.</p>" + 

"<p>Looking forward, the Port is actively seeking additional funding opportunities. These include further support from federal sources and expanding its network of private company partnerships. The integration of government grants and incentive programs with private funding is pivotal for the port's ongoing and future environmental projects.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 12500)
        },
             {
            title: "Scene 12:Good Neighbors",
            content: "<p>The Port is committed to working with the local community to improve air quality and acknowledge the existing health risks to the region's residents.

"<p>Some of the specific measures the Ports are taking include:</p>" + 


"<p>Participating in the Clean Air Action Plan (CAAP), a regional initiative to reduce air pollution from ports and other sources.</p>" + 


"<p>Investing in clean technology, such as electric cargo handling equipment and zero-emissions ships.</p>" + 


"<p>Working with shippers and cargo owners to reduce the emissions of their ships and trucks.</p>" + 


"<p>Educating the public about air pollution and the Ports' efforts to reduce it.</p>",
            location: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 13500)
        },
            {
            title: "Scene 13:Solutions",
            content: "<p>The public can significantly contribute to the Port of Long Beach's environmental stewardship efforts by:</p>" +


"<p>Advocating for policies and funding that bolster environmental protection.</p>" +


"<p>Engaging in educational opportunities, such as port tours and environmental programs offered by the Port of Long Beach, allows community members to expand their knowledge and understanding of the port's environmental actions and challenges.</p>" +


"<p>Enhancing social awareness and advocacy is crucial, particularly in addressing issues of equity and environmental justice. It's important to recognize that health impacts often disproportionately affect vulnerable and underrepresented communities. Advocacy should focus on ensuring access to essential services such as insurance programs, health education, and quality healthcare, which are key to mitigating these disparities and promoting environmental justice.</p>",
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
