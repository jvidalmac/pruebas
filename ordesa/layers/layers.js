var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_OrtofotoPNOA_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto PNOA",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoPNOA_1, 0]);
var format_MapaForestal_2 = new ol.format.GeoJSON();
var features_MapaForestal_2 = format_MapaForestal_2.readFeatures(json_MapaForestal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaForestal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaForestal_2.addFeatures(features_MapaForestal_2);
var lyr_MapaForestal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MapaForestal_2, 
                style: style_MapaForestal_2,
                interactive: true,
                title: '<img src="styles/legend/MapaForestal_2.png" /> Mapa Forestal'
            });

lyr_OSM_0.setVisible(true);lyr_OrtofotoPNOA_1.setVisible(true);lyr_MapaForestal_2.setVisible(true);
var layersList = [lyr_OSM_0,lyr_OrtofotoPNOA_1,lyr_MapaForestal_2];
lyr_MapaForestal_2.set('fieldAliases', {'Vegetacion': 'Vegetacion', });
lyr_MapaForestal_2.set('fieldImages', {'Vegetacion': '', });
lyr_MapaForestal_2.set('fieldLabels', {'Vegetacion': 'header label', });
lyr_MapaForestal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});