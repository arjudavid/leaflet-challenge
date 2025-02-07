 // Part 1: Step 1: Create the 'basemap' tile layer
 let basemap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
});

// OPTIONAL: Step 2 - Create a 'street' tile layer
let streetMap = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors, Humanitarian OpenStreetMap Team"
});

// OPTIONAL: Step 3 - Create a 'satelite' title layer
let satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: 'Tiles © Esri'
});

// Creates a map object with center and zoom options
let map = L.map("map", {
  center: [20, -30], 
  zoom: 3,
  layers: [basemap] 
});

// Layer groups for earthquakes and tectonic plates
let earthquakes = L.layerGroup();
let tectonicPlates = L.layerGroup();

// Creates the baseMaps and overlayMaps objects
let baseMaps = {
  "Basic Map": basemap,
  "Street Map": streetMap,
  "Satellite View": satelliteMap
};

let overlayMaps = {
  "Earthquakes": earthquakes,
  "Tectonic Plates": tectonicPlates
};

// Adds a layer control to the map
L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

// Fetch Earthquake GeoJSON Data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

  // Function to determine color based on depth
  function getColor(depth) {
      return depth > 90 ? "#ff0000" :
             depth > 70 ? "#ff6600" :
             depth > 50 ? "#ffcc00" :
             depth > 30 ? "#ccff33" :
             depth > 10 ? "#66ff66" :
                          "#00ff00";
  }

  // Function to determine marker radius based on magnitude
  function getRadius(magnitude) {
      return magnitude * 4;
  }

  // Function to style the earthquake markers
  function styleInfo(feature) {
      return {
          radius: getRadius(feature.properties.mag),
          fillColor: getColor(feature.geometry.coordinates[2]),
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
      };
  }

  // Adds the GeoJSON layer to the map
  L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng);
      },
      style: styleInfo,
      onEachFeature: function (feature, layer) {
          layer.bindPopup(`
              <strong>Location:</strong> ${feature.properties.place}<br>
              <strong>Magnitude:</strong> ${feature.properties.mag}<br>
              <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km<br>
          `);
      }
  }).addTo(earthquakes);

  earthquakes.addTo(map);

  // Create legend control
  let legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend"),
          depths = [-10, 10, 30, 50, 70, 90],
          colors = ["#00ff00", "#66ff66", "#ccff33", "#ffcc00", "#ff6600", "#ff0000"];

      div.innerHTML = "<strong>Depth (km)</strong><br>";

      for (let i = 0; i < depths.length; i++) {
          div.innerHTML +=
              `<i style="background:${colors[i]}; width:10px; height:10px; display:inline-block;"></i> 
              ${depths[i]}${depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+'}`;
      }
      return div;
  };

  legend.addTo(map);
});

// OPTIONAL: Part 2 - Fetch Tectonic Plates GeoJSON Data
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plate_data) {
  L.geoJson(plate_data, {
      color: "orange",
      weight: 2
  }).addTo(tectonicPlates);

  tectonicPlates.addTo(map);
});