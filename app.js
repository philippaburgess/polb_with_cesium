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
    infoBox: true, // Don't show the info box
    sceneModePicker: false, // Don't show the scene mode picker
    selectionIndicator: false, // Don't show the selection indicator
    timeline: false, // Don't show the timeline
    navigationHelpButton: false, // Don't show the navigation help button
});

    // Section 2: Scene and Location Setup
    // Define your locations array here as before

 const locations = [
        Cesium.Cartesian3.fromDegrees(-118.2700, 33.7489, 5500), // Vincent Thomas Bridge
        Cesium.Cartesian3.fromDegrees(-118.2165, 33.7548, 800), // Middle Harbor
        Cesium.Cartesian3.fromDegrees(-118.2065, 33.7464, 4000), // Long Beach Container Terminal
        Cesium.Cartesian3.fromDegrees(-118.1893, 33.7528, 6000), // Queen Mary
        Cesium.Cartesian3.fromDegrees(-118.1704, 33.7657, 800)  // Bluff Park (Residential Area)
        // Add more locations as needed
    ];

    const scenes = [
        {
            title: "1: The Green Port",
            content: "<p></p><p>The Port of Long Beach (POLB), proudly known as 'The Green Port,' is a leader in green port operations. It plays a vital role in the U.S. and global economy, with its strategic location in Long Beach, California. The Port of Long Beach remains dedicated to pioneering green initiatives, integrating economic activity with environmental stewardship and community well-being. Among its awards and recognitions for its sustainable practices are the Level 4 Green Marine Environmental Certification, 2020 California Governor's Environmental and Economic Leadership Award, and the 2019 AAPA Environmental Excellence Award.</p> +  

<p>It's sustainable practices and goals include:</p> +

<p><li>Clean Air Action Plan (CAAP): Targets 100% zero-emission trucks by 2035 and cargo equipment by 2030.</li><p> +
<p><li>Green Port Policy (2005): Addresses wildlife, air, water, soils, community engagement, and sustainability.</li></p> +
<p><li>Zero-Emissions Technologies: Focused on electric vehicles and infrastructure for a zero-emissions future.</li></p> + 
<p><li>Sustainable Terminal Design: Emphasizes energy-efficient, water-conserving, and waste-reducing practices.</li></p> + 
<p><li>Community Engagement: Prioritizes environmental justice and public health in local communities.</li></p>" 

        destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7470, 2500),
        orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
    }
},
               {
            title: "2: The Port",
            content: "<p></p><p>The Port of Long Beach is the second largest port in the United States in terms of container volume. The Port generates over $36 billion in annual economic activity, handles over $200 billion in annual trade volume, and supports over 450,000 jobs in Southern California. As a major contributor to the local economy, its operations are essential to the region's continued prosperity.</p>" +

"<p>Each year the port handles over 9 million 20-foot container units (TEUs). This number has grown year over year. However, all of this benefit and growth this is not without a significant impact to the environment. The Port has put significant attention to balancing these activities with its environmental impact.</p>",
          destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 3500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
               {
            title: "3: The Port of Long Beach Terminals",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Terminals.jpg' alt='Terminals' style='width:100%;max-width:900px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 4500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
              {
            title: "4: TEUs",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/TEU.jpg' alt='TEU' style='width:100%;max-width:900px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 5500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },

              {
            title: "5: Economic Impact",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Map.jpg' alt='Map' style='width:100%;max-width:900px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 6500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
              {
            title: "6: Environment",
            content: "<p></p><p>The Port of Long Beach has recognized its environmental impact and is actively pursuing improvements in water and air quality. Since the 1970s, the port has complied with stringent regulations to enhance water quality, and since 2005, it has implemented measures to significantly reduce air pollutants such as diesel particulate matter, sulfur oxides, and nitrogen oxides. These steps underscore the port's commitment to safeguarding the health of its workforce and the local community, as well as protecting local ecosystems.</p> + 

<p>Beneficiaries of these environmental efforts include:</p> + 

<p><li>Mudflats, vital aquatic habitats safeguarded under the Clean Water Act.</li></p> + 
<p><li>Essential Fish Habitats critical for the sustainability of coastal pelagic and groundfish populations.</li></p> + 
<p><li>Migratory routes utilized by birds and marine mammals, including gray and blue whales.</li></p> + 
<p><li>Protected areas for various species of migratory sea turtles.</li></p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 7500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "7: Clean Initiatives",
            content: "<p></p><p>The Port of Long Beach have been trailblazing in their efforts to use clean energy sources, reduce air pollution, and protect water quality, and restore natural habitats. They continue to work diligently in collaboration with governmental and local partners to be a model green port. Some of the specific actions and plans to reduce the environmental impact of the port include:</p>" + 


"<p><li>Using clean energy sources. The Port has invested in a number of renewable energy projects, including solar panels and wind turbines.</li></p>" +


"<p><li>Improving air quality. The Port has implemented a number of measures to reduce air pollution, including truck electrification, cleaner fuels, and a green fleet program.</li></p>" + 


"<p><li>Protecting water quality. The Port has a number of programs in place to protect water quality, including stormwater management, pollution prevention, and habitat restoration.</li></p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 8500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
              {
            title: "8: Air Quality",
            content: "<p></p><p>The Clean Air Action Plan (CAAP) is a comprehensive plan to reduce air pollution in the South Coast Air Basin. The plan was developed by the South Coast Air Quality Management District (SCAQMD) in collaboration with local governments, businesses, and environmental groups. The CAAP is an important step in the Port of Long Beach's commitment to environmental stewardship. The CAAP is designed to monitor and improve air quality in the Port of Long Beach and the surrounding area, and help mitigate risks to public health.</p>" +

"<p>The overlay is a polygon of the County of Los Angeles. The majority of pollution that causes asthma and has an airborne cancer risk is actually much higher in the center of the city of Los Angeles, and much less so than near the ports. This is an improvement over past decades and years although there is still more to be done.</p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 9500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "9: Modernization",
            content: "<p></p><p>The Port of Long Beach is taking a number of steps to reduce emissions from its operations, including the modernization of the Vincent Thomas Bridge. Other initiatives include:</p>" + 


"<p><li>The Port is investing in low-sulfur marine fuel (LSMF) to reduce emissions from ships.</li></p>" + 


"<p><li>The Port is also investing in electric and green technologies, such as on-dock electric power and shore power, to reduce emissions from trucks and trains.</li></p>" + 


"<p><li>The Port offers incentive programs to vessels and trucks to help accelerate the adoption of cleaner fuel and green technologies.</li></p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 10500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "10: Future Planning",
            content: "<p></p><p>There are several objectives that the port is committed to meeting by 2030 and by 2050 to reduce contaminants and improve quality of life by improving the ports relationship to the environment.</p>" + 


"<p>The Climate Adaptation and Coastal Resiliency Plan (CRP), a strategic framework that identifies the risks posed by climate change and outlines comprehensive strategies to address these challenges.</p>" + 


"<p>They are working towards reducing greenhouse gas emissions by 50% by 2030 and 100% by 2050.</p>" + 


"<p>They continue to monitor and improve air quality by reducing emissions of air pollutants such as particulate matter and nitrogen oxides.</p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 11500),
                           orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "11: Funding",
            content: "<p></p><p>Securing funding is a crucial component to achieving the port's sustainability goals. Among the government sources, notable contributors include the Maritime Administration (MARAD) under the U.S. Department of Transportation, the California Air Resources Board (CARB), and the South Coast Air Quality Management District (SCAQMD). These agencies have been instrumental in providing the financial backing needed for various environmental initiatives.</p>" + 

"<p>In addition to governmental support, the Port has successfully partnered with private companies, such as Toyota and Amazon, which have provided substantial private funding. This collaboration between public and private sectors is a key element in the port's funding strategy.</p>" + 

"<p>Looking forward, the Port is actively seeking additional funding opportunities. These include further support from federal sources and expanding its network of private company partnerships. The integration of government grants and incentive programs with private funding is pivotal for the port's ongoing and future environmental projects.</p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 12500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "12: Good Neighbors",
            content: "<p></p><p>The Port is committed to working with the local community to improve air quality and acknowledge the existing health risks to the region's residents.</p>" + 

"<p>Some of the specific measures the Ports are taking include:</p>" + 


"<p><li>Participating in the Clean Air Action Plan (CAAP), a regional initiative to reduce air pollution from ports and other sources.</li></p>" + 


"<p><li>Investing in clean technology, such as electric cargo handling equipment and zero-emissions ships.</li></p>" + 


"<p><li>Working with shippers and cargo owners to reduce the emissions of their ships and trucks.</li></p>" + 


"<p><li>Educating the public about air pollution and the Ports' efforts to reduce it.</li></p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 13500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
            {
            title: "13: Solutions",
            content: "<p></p><p>The public can significantly contribute to the Port of Long Beach's environmental stewardship efforts by:</p>" +


"<p><li>Advocating for policies and funding that bolster environmental protection.</li></p>" +


"<p><li>Engaging in educational opportunities, such as port tours and environmental programs offered by the Port of Long Beach, allows community members to expand their knowledge and understanding of the port's environmental actions and challenges.</li></p>" +


"<p><li>Enhancing social awareness and advocacy is crucial, particularly in addressing issues of equity and environmental justice. It's important to recognize that health impacts often disproportionately affect vulnerable and underrepresented communities. Advocacy should focus on ensuring access to essential services such as insurance programs, health education, and quality healthcare, which are key to mitigating these disparities and promoting environmental justice.</li></p>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 14500),
        orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "14: References",
            content:"<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/References.jpg' alt='References' style='width:100%;max-width:900px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 15500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "15: Thank You",
            content: "<img src='https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Thanks.jpg' alt='Thank You' style='width:100%;max-width:900px;'>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 16500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
            
];

var longBeachDataLayer;
    
function updateScene() {
    var scene = scenes[currentSceneIndex];
    var titleElement = document.getElementById('scene-title');
    var contentElement = document.getElementById('scene-description');
    var sceneContainer = document.getElementById('scene-container');

   if(titleElement && contentElement && sceneContainer) {
        titleElement.textContent = scene.title;
        contentElement.innerHTML = scene.content;
        sceneContainer.style.display = 'block'; // Make sure the container is visible

if (currentSceneIndex === 11) { // Scene index starts at 0, so index 11 is Scene 12
        if (!longBeachDataLayer) {
           Cesium.GeoJsonDataSource.load('https://raw.githubusercontent.com/philippaburgess/polb_with_cesium/main/Long_Beach_Com_JSON_NEWEST.geojson')
            .then(function(dataSource) {
                    viewer.dataSources.add(dataSource);
                    longBeachDataLayer = dataSource;
                    var entities = dataSource.entities.values;

    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (entity.properties) {
            // Create a description from the properties
            var description = '<table class="cesium-infoBox-defaultTable"><tbody>';
            entity.properties.propertyNames.forEach(function(propertyName) {
                var value = entity.properties[propertyName];
                description += '<tr><th>' + propertyName + '</th><td>' + value + '</td></tr>';
             });
               description += '</tbody></table>';
                entity.description = description; // InfoBox will use this
             }
        }
      }).catch(function(error) {
        console.error(error);
                });
            }     
        } else {
            if (longBeachDataLayer) {
                viewer.dataSources.remove(longBeachDataLayer);
                longBeachDataLayer = null;
            }
        }

        viewer.camera.flyTo({
            destination: scene.destination,
            orientation: scene.orientation,
            duration: 2  // Duration of the camera flight in seconds
        });
   } else {
        console.error("Scene title or content element not found!");  // Error log if elements are not found
    }
}  // This is where the function should end with a closing brace

// Section 3: Scene Navigation Functions

// viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
   // var pickedObject = viewer.scene.pick(movement.position);
    // if (Cesium.defined(pickedObject) && pickedObject.id && pickedObject.id._dataSource === longBeachDataLayer) {
    // displayInfoBox(pickedObject.id);
    // }
// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function displayInfoBox(pickedFeature) {        
    var infoBox = document.getElementById('infoBox');
    if (pickedFeature && pickedFeature.properties) {
    var properties = pickedFeature.properties.getValue(Cesium.JulianDate.now());
        var content = '<h4>Feature Information</h4>';
        
for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                content += '<strong>' + key + '</strong>: ' + properties[key] + '<br>';
            }
        }   
        infoBox.innerHTML = content; 
        infoBox.style.display = 'block'; 
    } else {
        infoBox.innerHTML = "<p>No data available.</p>";
        infoBox.style.display = 'block'; 
    }
}

window.nextScene = function() {
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updateScene();
        document.getElementById('scene-container').style.display = 'block';
        document.getElementById('slide-back').style.display = 'block'; // Show 'Previous' button
    } 
    if (currentSceneIndex === scenes.length - 1) {
        document.getElementById('slide-forward').style.display = 'none'; // Hide 'Next' button in the last scene
    }
};

window.previousScene = function() {
    if (currentSceneIndex > 0) {
        currentSceneIndex--;
        updateScene();
        document.getElementById('scene-container').style.display = 'block';
        document.getElementById('slide-forward').style.display = 'block'; // Show 'Next' button
}
if (currentSceneIndex === 0) {
document.getElementById('slide-back').style.display = 'none'; // Hide 'Previous' button in the first scene
}
};

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
