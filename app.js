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
            content: "<p></p>" + "<p>The Port of Long Beach (POLB), proudly known as The Green Port, is a leader in green port operations. It plays a vital role in the U.S. and global economy, with its strategic location in Long Beach, California. The Port of Long Beach remains dedicated to pioneering green initiatives, integrating economic activity with environmental stewardship and community well-being. Among its awards and recognitions for its sustainable practices are the Level 4 Green Marine Environmental Certification, 2020 California Governor's Environmental and Economic Leadership Award, and the 2019 AAPA Environmental Excellence Award.</p>" +  
"<p>It's sustainable practices and goals include:</p>" +
"<ul>" +
"<p><li>Clean Air Action Plan (CAAP): Targets 100% zero-emission trucks by 2035 and cargo equipment by 2030.</li><p>" +
"<p><li>Green Port Policy (2005): Addresses wildlife, air, water, soils, community engagement, and sustainability.</li></p>" +
"<p><li>Zero-Emissions Technologies: Focused on electric vehicles and infrastructure for a zero-emissions future.</li></p>" + 
"<p><li>Sustainable Terminal Design: Emphasizes energy-efficient, water-conserving, and waste-reducing practices.</li></p>" + 
"<p><li>Community Engagement: Prioritizes environmental justice and public health in local communities.</li></p>" + 
                "</ul>",  
        destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7470, 2500),
        orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
    }
},
               {
            title: "2: The Port",
            content: "<p></p>" + "<p>The Port of Long Beach is the second largest port in the United States in terms of container volume. The Port generates over $36 billion in annual economic activity, handles over $200 billion in annual trade volume, and supports over 450,000 jobs in Southern California. As a major contributor to the local economy, its operations are essential to the region's continued prosperity.</p>" +

"<p>Each year the port handles over 9 million 20-foot container units (TEUs). This number has grown year over year. However, all of this benefit and growth this is not without a significant impact to the environment. The Port has put significant attention to balancing these activities with its environmental impact. Through its various environmental initiatives and programs, the Port aims to minimize the environmental impact of its operations and contribute to a healthier and more sustainable future for the region.</p>",
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
            content: "<p></p>" + "<p>The Port of Long Beach has recognized its environmental impact and is actively pursuing improvements in water and air quality. Since the 1970s, the port has complied with stringent regulations to enhance water quality, and since 2005, it has implemented measures to significantly reduce air pollutants such as diesel particulate matter, sulfur oxides, and nitrogen oxides. These steps underscore the port's commitment to safeguarding the health of its workforce and the local community, as well as protecting local ecosystems.</p>" + 

"<p>Beneficiaries of these environmental efforts include:</p>" + 
"<ul>" + 
"<p><li>MMudflats: Vital aquatic habitats safeguarded under the Clean Water Act.</li></p>" + 
"<p><li>Essential Fish Habitats: Critical for the sustainability of coastal pelagic and groundfish populations.</li></p>" + 
"<p><li>Migratory Routes: Utilized by birds and marine mammals, including gray and blue whales.</li></p>" + 
"<p><li>Sea Turtle Habitats: Protected areas for various species of migratory sea turtles.</li></p>" + 
"</ul>",
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 7500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "7: Clean Initiatives",
            content: "<p></p>" + "<p>The Port of Long Beach has been a pioneer in adopting clean energy sources, reducing air pollution, and enhancing water quality, alongside restoring natural habitats. In collaboration with government and local partners, the Port is setting the standard for green port operations. These actions and strategies reflect the Port's dedication to minimizing environmental impact and leading the way towards a sustainable future.</p>" + 
             "<p>Key initiatives include:</p>" + 
"<ul>" +    
"<p><li>Renewable Energy Initiatives: While specific capacities of solar panels and wind turbines are not detailed, the Port is committed to diverse renewable energy projects.</p></li>" + 
"<p><li>Partnerships and Collaborations: Working closely with clean technology companies, research institutions, government agencies like CARB and EPA, and non-profit organizations, the Port fosters innovative solutions and aligns with regional and state environmental goals.</p></li>" + 
"<p><li>Challenges and Solutions: Addressing the complexities of renewable energy and zero-emission transitions, the Port is navigating challenges such as high initial investments, the intermittency of renewable sources, technical complexities, and stakeholder engagement.</p></li>" +   
"<p><li>The strategies encompass seeking grants and innovative financing mechanisms, exploring energy storage solutions for consistent electricity supply, partnering with technology experts for smooth integration of new systems, and engaging stakeholders to ensure a shared commitment to sustainable practices.</p></li>" +
"</ul>",            
 destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 8500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
              {
            title: "8: Air Quality",
            content: "<p></p>" + "<p>Historically, the Port of Long Beach faced significant challenges with air pollution, impacting public health and the environment. In response, the Clean Air Action Plan (CAAP) was introduced, focusing on comprehensive measures to improve air quality in the South Coast Air Basin. Developed collaboratively by the South Coast Air Quality Management District (SCAQMD), local governments, businesses, and environmental groups, CAAP has played a crucial role in mitigating health risks associated with air pollution.</p>" +
"<p>The Port has made substantial progress in reducing key pollutants and is preparing to meet new regulatory challenges. Engaging with the community is a central aspect of these efforts, ensuring that policies and projects are attuned to the needs of those most affected by port operations. This ongoing dialogue shapes the Port's environmental initiatives, enhancing their effectiveness and relevance. Community engagement remains a cornerstone of these endeavors, ensuring that the Port's strategies are closely aligned with the needs and concerns of those most impacted by its operations. This collaborative approach is key to continuously refining and enhancing the Port's air quality initiatives.</p>" +
"<p>Since  2005 the port has reduced:</p>" + 
"<ul>" + 
"<p><li>Diesel Particulate Matter (DPM) by 90%</p></li>" + 
"<p><li>Sulfur Oxides (SOx) by 97%</p></li>" +  
"<p><li>Nitrogen Oxides (NOx) by 62% </p></li>" + 
        "</ul>", 
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 9500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "9: Modernization",
            content: "<p></p>" + "<p>The recent reconstruction of the Vincent Thomas Bridge stands as a landmark achievement for the Port of Long Beach, significantly enhancing truck access and symbolizing the port's commitment to modernization. This project is part of a broader initiative that includes investing in low-sulfur marine fuel (LSMF) to reduce ship emissions. Additionally, the Port is embracing electric and green technologies, incorporating on-dock electric power and shore power systems to lower emissions from trucks and trains.</p>" + 
"<p>In its continued efforts to modernize, the Port has implemented shore power at several terminals, enabling ships to connect to the electrical grid while docked, thereby substantially reducing auxiliary engine use. Concurrently, the transition to zero-emissions cargo handling equipment is in progress, marked by the introduction of electric yard trucks and forklifts. Exploring hydrogen fuel cells as an alternative power source for cargo handling equipment and ships, and offering incentives for using clean energy and green technologies to vessels and trucking companies, are also a key part of the Port's forward-thinking strategy.</p>",  
          destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 10500),
          orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "10: Future Planning",
            content: "<p></p>" + <p>The Port of Long Beach has set forth clear environmental objectives, anchored by the Climate Adaptation and Coastal Resiliency Plan (CRP), which strategically tackles the challenges posed by climate change. The Port is on a determined path to significantly reduce greenhouse gas emissions, aiming for a 50% reduction by 2030 and reaching for complete elimination by 2050. Concurrently, there is a strong emphasis on enhancing air quality, specifically targeting the reduction of particulate matter and nitrogen oxides. The Port also fosters partnerships with universities and non-profits to advance climate resilience and emissions reduction through collaborative research and educational programs.</p>" + 
"<p>Strategies for Achieving Emission Reduction Goals:</p>" + 
"<ul>" + 
"<p><li>Ensuring the full implementation of the 2017 Clean Air Action Plan (CAAP) Update.</p></li>" + 
"<p><li>Transitioning to zero-emissions for cargo handling equipment and trucks.</p></li>" + 
"<p><li>Utilizing grant programs to support environmental mitigation efforts.</p></li>" + 
"<p><li>Strengthening collaborations with academic and non-profit organizations focused on climate resilience.</p></li>" + 
"<p><li>Developing policies that are in line with CAAP goals, integrating climate change considerations into all Port planning and development activities.</p></li>" + 
"<p><li>Incorporating sea-level rise analysis in the Port's Harbor Development Permit process for future-proof infrastructure planning.</p></li>" + 
"<p><li>Factoring zero-emissions infrastructure plans into lease negotiations and development projects, reinforcing the commitment to sustainable operations.</p></li>" + 
"</ul>". 
            destination: Cesium.Cartesian3.fromDegrees(-118.2765, 33.7489, 11500),
                           orientation: {
          heading : Cesium.Math.toRadians(90.0), // East, in radians
          pitch : Cesium.Math.toRadians(-45.0), // Looking down, in radians
          roll : 0.0 // No roll
          }
        },
             {
            title: "11: Funding",
            content: "<p></p>" + <p>Securing adequate funding is essential for the Port of Long Beach to achieve its sustainability goals. Government agencies like the Maritime Administration (MARAD), the California Air Resources Board (CARB), and the South Coast Air Quality Management District (SCAQMD) have been key in providing financial support for various environmental initiatives. Private partnerships also play a crucial role. The Port continues to seek funding opportunities, leveraging both government grants and private investments to support its ongoing and future environmental projects. This integrated approach to funding is pivotal in maintaining the momentum of the Port's extensive sustainability endeavors.</p>" + 
"<p>In recent developments, in March 2017, the Port was allocated $46.4 million by the BHC for its Community Grants Program, to be expended over 12 to 15 years. This program has already directed $31.1 million towards diverse projects, including public parks, water quality improvements, and healthcare programs, demonstrating a significant economic impact through job creation, enhanced quality of life, and increased economic activity. Companies like Toyota and Amazon have provided substantial funding, exemplifying successful public-private collaboration. Additionally, the Port’s community sponsorships have bolstered its engagement and visibility locally.</p>" + 

"<p>Looking to the future, the Port is expanding its funding horizons. A notable achievement in 2023 was securing $283 million in federal funding through the U.S. Department of Transportation's Mega Grant Program. This grant will facilitate the construction of "America's Green Gateway," a significant rail project at the Port. Expected to drastically improve cargo efficiency, reduce congestion, and lower environmental impacts, this project will transform the Pier B rail yard and significantly increase the Port’s on-dock rail capacity. It’s a part of a broader $1.567 billion project aimed at enhancing on-dock rail infrastructure.</p>", 
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
