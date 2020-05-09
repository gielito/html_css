L.custom = {
  init: function(obj, params) {

    obj.style.minHeight = "400px";

    var map = L.map(obj, {
      "center": [48, 9],
      "zoom": 5
    });

    var tileLayer = L.wt.tileLayer().addTo(map);

    var nuts_options = {// custom options to defined style and events

      style: function(feature) { // custom style each nuts

        var id = (feature.properties.NUTS_ID || feature.properties.CNTR_ID);
        var color = "#f93";

        if (id === "FR") {
          color = "#a00";
        } else if (id === "BE") {
          color = "#0a0";
        } else if (id === "IT") {
          color = "#369";
        } else if (id === "ES") {
          color = "#00a";
        }

        return {
          fillColor: color,
          weight: 2,
          opacity: 1,
          color: "#000",
          dashArray: '3',
          fillOpacity: 0.7
        };

      },
      onEachFeature: function(feature, layer) { // bind events here

        var customEvents = {
          mouseover: function(e) {

            layer.setStyle({
              dashArray: 0,
              fillOpacity: 1
            });

          },
          mouseout: function(e) {
            nuts.resetStyle(e.target);
          }

        };

        layer.on({
          mouseover: customEvents.mouseover,
          mouseout: customEvents.mouseout
        });
      }

    };

    var nuts = L.wt.countries([{"level": 0, "countries": ["FR", "ES", "BE", "PT", "IT"]}], nuts_options).addTo(map);

    // -------------------------------------------------------------
    // IMPORTANT !!!!
    // -------------------------------------------------------------

    $wt._queue("next"); // process next components

  }
};
