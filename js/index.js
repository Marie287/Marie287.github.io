$( document ).ready(function() {
  $('#m_wsc').load('./m.wsc.html');
  $('#m_ose').load('./m.ose.html');
  $('#m_bomb').load('./m.bomb.html');
  $('#m_ctq').load('./m.ctq.html');
  $('#m_mps').load('./m.mps.html');
  $('#m_pm').load('./m.pm.html');
  $('#m_fs').load('./m.fs.html');
  $('#m_sm').load('./m.sm.html');

  // Projets - size of cards
  if( $("#card_films").height() > $("#card_med").height()) $(".card-body").height($("#card_films > .card-body").height());
  else $(".card-body").height($("#card_med > .card-body").height());


  // Rotation flèche collapse (Détails dans parcours.html)
  $(".btn_parcours").on("click", function(){
    if($(this).find(".arrow").hasClass("down")){
      $(this).find(".arrow").removeClass("down");
      $(this).find(".arrow").addClass("up");
      $(this).parent().addClass("p_open");
      $(this).addClass("btn_parcours_open");
    }
    else{
      $(this).find(".arrow").removeClass("up");
      $(this).find(".arrow").addClass("down");
      $(this).parent().removeClass("p_open");
      $(this).removeClass("btn_parcours_open");
    }
  });


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