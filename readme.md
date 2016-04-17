# Datamap-Germany
This is a map file of Germany in the topojson format to go with d3.js. The Data comes from http://www.naturalearthdata.com/
## Install via Bower
    bower install datamap-germany --save

## Run the demo
Get [local-web-server](https://www.npmjs.com/package/local-web-server) on NPM
* on Mac:
	`sudo npm install -g local-web-server`
* on Linux
    `npm install -g local-web-server`

Then run `ws` from the datamap-germany folder. And visit your site on [http://localhost:8000](http://localhost:8000)

The demo features:
* mercator projection
* adding the fips code as a class to each Bundesland
	* GM01: Baden-Württemberg State
	* GM02: Free State of Bavaria
	* GM03: Free Hanseatic City of Bremen
	* GM04: Free Hanseatic City of Hamburg
	* GM05: Hesse State
	* GM06: Lower Saxony State
	* GM07: North Rhine-Westphalia State
	* GM08: Rhineland-Palatinate State
	* GM09: Saarland State
	* GM10: Schleswig-Holstein State
	* GM11: Brandenburg State
	* GM12: Mecklenburg-Western Pomerania State
	* GM13: Free State of Saxony
	* GM14: Sachsen-Anhalt State
	* GM15: Free State of Thüringia
	* GM16: Berlin State
* basic styling through the d3 attr function and css for two samples



## Creation process for reference

I downloaded the [Admin 1 Pack](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/) and using gdal and topojson converted the map to the very lightweight topojson format. This could be done with any country.

    ogr2ogr -f GeoJSON -where "ADM0_A3 IN ('DEU')" bund.json ne_10m_admin_1_states_provinces.shp

    ogr2ogr -f GeoJSON -where "ISO_A2 = 'DEU' AND SCALERANK < 8" stadt.json ne_10m_populated_places.shp

    topojson -o germany.json --id-property fips --properties -- bund.json stadt.json