var width = 350,
    height = 450;

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("germany.json", function(error, ger) {
    if (error) return console.error(error);


    var subunits = topojson.feature(ger, ger.objects.bund);

    var projection = d3.geo.mercator()
        .center([10.4515, 55.4])
        .scale(2000)
        .translate([width / 2, -12]);

    var path = d3.geo.path()
        .projection(projection);

    svg.selectAll(".bund")
        .data(topojson.feature(ger, ger.objects.bund).features)
        .enter().append("path")
        .attr("class", function(d) {
            return "land " + d.id;
        })
        .attr("d", path)
        .attr("style", "fill:#E0E4CC")
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1");

    svg.selectAll(".bund-label")
        .data(topojson.feature(ger, ger.objects.bund).features)
        .enter().append("text")
        .attr("class", function(d) {
            return "land-label " + d.id;
        })
        .attr("transform", function(d) {
            return "translate(" + path.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.properties.name;
        });
});