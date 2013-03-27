/**
 * Main applicaiton logic for Twin Cities OSM editor.
 */
(function() {
  
  var idContainer = document.getElementById("iD");
  
  // Check browser Support
  if (!iD.detect().support) {
    iD.unsupported(idContainer);
  }
  else {
    var id = iD();
    
    // Start UI
    d3.select(idContainer).call(id.ui());
    
    // Center map on Twin Cities
    id.map().centerZoom([-93.1525, 44.9471], 12.23);
  }
})();