/**
 * Main applicaiton logic for Twin Cities OSM editor.
 */
var idGlobal;

(function() {
  
  var idContainer = document.getElementById("iD");
  
  // Check browser Support
  if (!iD.detect().support) {
    iD.unsupported(idContainer);
  }
  else {
    var id = idGlobal = iD();
    
    // Start UI
    d3.select(idContainer).call(id.ui());
    
    // Center map on Twin Cities
    id.map().centerZoom([-93.1525, 44.9471], 19);
    
    //console.log(iD);
    
    // export a flattened version of the current graph for use in the walkthrough
    // JSON.stringify(_.extend(idGlobal.history().graph().base().entities, idGlobal.history().graph().entities))
  }
})();