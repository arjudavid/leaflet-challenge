# leaflet-challenge

Instructions
The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization

Part 2: Gather and Plot More Data (Optional with no extra points earning)

Part 1: Create the Earthquake Visualization

![image](https://github.com/user-attachments/assets/b5f00203-2b11-40af-a5dd-121f61ac9ed2)

Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

![image](https://github.com/user-attachments/assets/24e4cdea-ba06-44a7-9a8b-4be0ed509e56)

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

![image](https://github.com/user-attachments/assets/d2b32b60-9699-4937-b4ae-d88a3d3be681)

2.- Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.

Part 2: Gather and Plot More Data (Optional with no extra points earning)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site..

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:

![image](https://github.com/user-attachments/assets/19333231-850e-4fa6-9972-99f0371e416d)

Perform the following tasks:

Plot the tectonic plates dataset on the map in addition to the earthquakes.

Add other base maps to choose from.

Put each dataset into separate overlays that can be turned on and off independently.

Add layer controls to your map.

