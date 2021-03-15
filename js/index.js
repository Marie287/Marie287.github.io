$( document ).ready(function() {
  $('#m_wsc').load('./m.wsc.html');
  $('#m_ose').load('./m.ose.html');
  

  // Projets - size of cards
  if( $("#card_films").height() > $("#card_med").height()) $(".card-body").height($("#card_films > .card-body").height());
  else $(".card-body").height($("#card_med > .card-body").height());

  /*
  var myModalEl = document.getElementById('m_ose')
  myModalEl.addEventListener('show.bs.modal', function (event) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })*/
});



