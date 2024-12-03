ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([213434.702183, 2547533.714434, 222171.561275, 2552201.510742]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_1.png",
    attributions: ' ',
                                projection: 'EPSG:32643',
                                alwaysInRange: true,
                                imageExtent: [209980.901600, 2540478.243700, 232810.901600, 2567798.243700]
                            })
                        });
var format_Test_2 = new ol.format.GeoJSON();
var features_Test_2 = format_Test_2.readFeatures(json_Test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Test_2.addFeatures(features_Test_2);
var lyr_Test_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Test_2, 
                style: style_Test_2,
                popuplayertitle: "Test",
                interactive: true,
                title: '<img src="styles/legend/Test_2.png" /> Test'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DEM_1.setVisible(true);lyr_Test_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DEM_1,lyr_Test_2];
lyr_Test_2.set('fieldAliases', {'id': 'id', });
lyr_Test_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Test_2.set('fieldLabels', {'id': 'no label', });
lyr_Test_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});