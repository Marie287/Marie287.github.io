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

});



