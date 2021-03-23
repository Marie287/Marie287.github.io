$(document).ready(function() {
  // Map OpenLayers
  var features = [];
  var point = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([3.15, 50.7167]))
  });
  point.setStyle(
    new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1.0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: '../images/point.svg'
      })
    })
  );
  features.push(point);

  var vectorSource = new ol.source.Vector({ features: features });
  var vectorLayer = new ol.layer.Vector({ source: vectorSource });

  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    target: 'map',
    view: new ol.View({
      center: ol.proj.fromLonLat([3.15, 50.7167]),
      zoom: 7
    }),
  });


});