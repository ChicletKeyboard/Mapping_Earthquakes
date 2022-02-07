# Mapping_Earthquakes

The goal of this analysis is to build an interactive webpage to display earthquake data from the United States Geological Survey. 

This project was created using Mapbox to have three layers:
  1) A map of the tectonic plates on earth
  2) Indications of earthquakes with a magnitude greater than 4.5
  3) A dark-layered map to make viewing data easier.

This was done by first creating the tile layers for the background of the map, and then adding those tile layers to a base layer to hold all three maps. A function was created to filter the magnitude of the earthquake by a certain color (5 being red, and lighter colors being below magnitude 2). Another function was added to determine the radius of the visible earthquake marker based on its magnitude, with more serious earthquakes have larger markers. Finally, a legend at the bottom of the HTML webpage was added to display the magnitude of the displayed earthquakes.

![Earthquake Map](https://github.com/ChicletKeyboard/Mapping_Earthquakes/blob/8fafcf4c7abe878135c02417af4ff715fe1c6c4b/Earthquake_Challenge/Earthquake_Map.jpg)

