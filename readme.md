# Datamap-Germany
This is a map file of Germany to go with d3.js and datamaps in the topojson format. The Data comes from http://www.naturalearthdata.com/
## Install via Bower
    bower install datamap-germany --save

## Run the demo
Get [local-web-server](https://www.npmjs.com/package/local-web-server) on NPM
* on Mac:

    `sudo npm install -g local-web-server`
* on Linux
    `npm install -g local-web-server`

Then run `ws` from the datamap-germany folder. And visit your site on [http://localhost:8000](http://localhost:8000)

### The demo features:
* mercator projection
* all of the Bundesländer tagged with their [fips codes](https://en.wikipedia.org/wiki/List_of_FIPS_region_codes_(G–I)#GM:_Germany)
* names of all of the Bundesländer shown on the map

## Reproducing the map in topojson
The map Data comes from [natural earth data’s admin 1 file](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_1_states_provinces.zip) and got converted into topojson using gdal’s ogr2ogr and topojson itself. Using the following commands:

    GeoJSON -where "ADM0_A3 IN ('DEU')" bund.json ne_10m_admin_1_states_provinces.shp


If you want to access the biggest cities as well, you will have to get the populated places file from natural earth data as well.

    ogr2ogr -f GeoJSON -where "ADM0_A3 = 'DEU' AND SCALERANK < 8" stadt.json ne_10m_populated_places.shp

    topojson -o germany.json --id-property fips --properties -- bund.json stadt.json  


Thank you to @mbostock for his [tutorial](https://bost.ocks.org/mike/map/) on creating this!