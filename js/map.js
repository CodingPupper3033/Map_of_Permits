var chart;
var polygonSeries;

var chartPreview;
var polygonSeriesPreview;

function setupMap() {
     // Create map instance
    chart = am4core.create(document.getElementById("chartdiv"), am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_usaHigh;
    
    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();
    
    // Create map polygon series
    polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(9),
        max: chart.colors.getIndex(15)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;
}

function setupMapPreview() {
     // Create map instance
    chartPreview = am4core.create(document.getElementById("previewMap"), am4maps.MapChart);
    
    // Set map definition
    chartPreview.geodata = am4geodata_usaHigh;
    
    // Set projection
    chartPreview.projection = new am4maps.projections.AlbersUsa();
    
    // Create map polygon series
    polygonSeriesPreview = chartPreview.series.push(new am4maps.MapPolygonSeries());
    
    //Set min/max fill color for each area
    polygonSeriesPreview.heatRules.push({
        property: "fill",
        target: polygonSeriesPreview.mapPolygons.template,
        min: chartPreview.colors.getIndex(9),
        max: chartPreview.colors.getIndex(15)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeriesPreview.useGeodata = true;
    polygonSeriesPreview.data = USAData["IS"];
}


function setData() {
    polygonSeries.data = USAData[selectedState];
}

window.onloadend = new function() {
    setupMap();
    setupMapPreview();
    setData();
}