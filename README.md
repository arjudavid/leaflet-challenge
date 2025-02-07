# leaflet-challenge

Instructions
The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization
Part 2: Gather and Plot More Data (Optional)

Part 1: Create the Earthquake Visualization

![image](https://github.com/user-attachments/assets/b5f00203-2b11-40af-a5dd-121f61ac9ed2)

The first task is to visualize an earthquake dataset.

The dataset is being provided by edX LLC from the following page:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

![image](https://github.com/user-attachments/assets/24e4cdea-ba06-44a7-9a8b-4be0ed509e56)

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

![image](https://github.com/user-attachments/assets/d2b32b60-9699-4937-b4ae-d88a3d3be681)

2.- Importing and visualizing the data:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

The data markers are reflected by magnitude of the earthquake and their size and the depth by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

The popups provide additional information about the earthquake like the magnitude, depth, and location.

The visualization should look something like the preceding map.

Part 2: Gather and Plot More Data (Optional)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

This part was completely optional; and it was a nice challenge to complete by learning more about Java, HTML's, and the use of CSS's on them.

The following image is an example screenshot of what you should produce:

![image](https://github.com/user-attachments/assets/19333231-850e-4fa6-9972-99f0371e416d)

Performed the following tasks:

Plot the tectonic plates dataset on the map in addition to the earthquakes.

Add other base maps to choose from.

Put each dataset into separate overlays that can be turned on and off independently.

Add layer controls to your map.

The initial code was provided by edX Boot Camps LLC and the code was written by David Ruvalcaba with assistance of Xpert Learning.
