var wms_layers = [];
var format_semarangkec_0 = new ol.format.GeoJSON();
var features_semarangkec_0 = format_semarangkec_0.readFeatures(json_semarangkec_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_semarangkec_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_semarangkec_0.addFeatures(features_semarangkec_0);var lyr_semarangkec_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_semarangkec_0, 
                style: style_semarangkec_0,
                title: '<img src="styles/legend/semarangkec_0.png" /> semarangkec'
            });var format_lokasitrasport_1 = new ol.format.GeoJSON();
var features_lokasitrasport_1 = format_lokasitrasport_1.readFeatures(json_lokasitrasport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokasitrasport_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lokasitrasport_1.addFeatures(features_lokasitrasport_1);var lyr_lokasitrasport_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lokasitrasport_1, 
                style: style_lokasitrasport_1,
                title: '<img src="styles/legend/lokasitrasport_1.png" /> lokasitrasport'
            });var format_lokasirs_2 = new ol.format.GeoJSON();
var features_lokasirs_2 = format_lokasirs_2.readFeatures(json_lokasirs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokasirs_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lokasirs_2.addFeatures(features_lokasirs_2);var lyr_lokasirs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lokasirs_2, 
                style: style_lokasirs_2,
                title: '<img src="styles/legend/lokasirs_2.png" /> lokasirs'
            });var format_jalanutama_3 = new ol.format.GeoJSON();
var features_jalanutama_3 = format_jalanutama_3.readFeatures(json_jalanutama_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanutama_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalanutama_3.addFeatures(features_jalanutama_3);var lyr_jalanutama_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanutama_3, 
                style: style_jalanutama_3,
                title: '<img src="styles/legend/jalanutama_3.png" /> jalanutama'
            });var format_sumberair_4 = new ol.format.GeoJSON();
var features_sumberair_4 = format_sumberair_4.readFeatures(json_sumberair_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumberair_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sumberair_4.addFeatures(features_sumberair_4);var lyr_sumberair_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sumberair_4, 
                style: style_sumberair_4,
                title: '<img src="styles/legend/sumberair_4.png" /> sumberair'
            });

lyr_semarangkec_0.setVisible(true);lyr_lokasitrasport_1.setVisible(true);lyr_lokasirs_2.setVisible(true);lyr_jalanutama_3.setVisible(true);lyr_sumberair_4.setVisible(true);
var layersList = [lyr_semarangkec_0,lyr_lokasitrasport_1,lyr_lokasirs_2,lyr_jalanutama_3,lyr_sumberair_4];
lyr_semarangkec_0.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'Jumlah_Pen': 'Jumlah_Pen', });
lyr_lokasitrasport_1.set('fieldAliases', {'osm_id': 'osm_id', 'aeroway': 'aeroway', 'amenity': 'amenity', 'beds': 'beds', 'blockage': 'blockage', 'bridge': 'bridge', 'building': 'building', 'capacity': 'capacity', 'covered': 'covered', 'denominati': 'denominati', 'depth': 'depth', 'diameter': 'diameter', 'government': 'government', 'highway': 'highway', 'historic': 'historic', 'landuse': 'landuse', 'layer': 'layer', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'name': 'name', 'natural': 'natural', 'office': 'office', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'operator': 'operator', 'parking': 'parking', 'public_tra': 'public_tra', 'pump': 'pump', 'railway': 'railway', 'religion': 'religion', 'rooms': 'rooms', 'shop': 'shop', 'smoothness': 'smoothness', 'surface': 'surface', 'tourism': 'tourism', 'tunnel': 'tunnel', 'water': 'water', 'waterway': 'waterway', 'width': 'width', 'z_index': 'z_index', });
lyr_lokasirs_2.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'Jumlah_Pen': 'Jumlah_Pen', });
lyr_jalanutama_3.set('fieldAliases', {'osm_id': 'osm_id', 'aeroway': 'aeroway', 'amenity': 'amenity', 'blockage': 'blockage', 'bridge': 'bridge', 'building': 'building', 'capacity': 'capacity', 'covered': 'covered', 'depth': 'depth', 'diameter': 'diameter', 'highway': 'highway', 'landuse': 'landuse', 'layer': 'layer', 'man_made': 'man_made', 'name': 'name', 'natural': 'natural', 'oneway': 'oneway', 'operator': 'operator', 'parking': 'parking', 'public_tra': 'public_tra', 'pump': 'pump', 'railway': 'railway', 'smoothness': 'smoothness', 'surface': 'surface', 'tunnel': 'tunnel', 'water': 'water', 'waterway': 'waterway', 'width': 'width', 'z_index': 'z_index', });
lyr_sumberair_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'amenity': 'amenity', 'blockage': 'blockage', 'building': 'building', 'communicat': 'communicat', 'communic_1': 'communic_1', 'covered': 'covered', 'depth': 'depth', 'diameter': 'diameter', 'landuse': 'landuse', 'layer': 'layer', 'man_made': 'man_made', 'name': 'name', 'natural': 'natural', 'office': 'office', 'operator': 'operator', 'pump': 'pump', 'tower': 'tower', 'tunnel': 'tunnel', 'water': 'water', 'waterway': 'waterway', 'width': 'width', 'z_index': 'z_index', });
lyr_semarangkec_0.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'Jumlah_Pen': 'TextEdit', });
lyr_lokasitrasport_1.set('fieldImages', {'osm_id': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'beds': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'covered': 'TextEdit', 'denominati': 'TextEdit', 'depth': 'TextEdit', 'diameter': 'TextEdit', 'government': 'TextEdit', 'highway': 'TextEdit', 'historic': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'parking': 'TextEdit', 'public_tra': 'TextEdit', 'pump': 'TextEdit', 'railway': 'TextEdit', 'religion': 'TextEdit', 'rooms': 'TextEdit', 'shop': 'TextEdit', 'smoothness': 'TextEdit', 'surface': 'TextEdit', 'tourism': 'TextEdit', 'tunnel': 'TextEdit', 'water': 'TextEdit', 'waterway': 'TextEdit', 'width': 'TextEdit', 'z_index': 'TextEdit', });
lyr_lokasirs_2.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'Jumlah_Pen': 'TextEdit', });
lyr_jalanutama_3.set('fieldImages', {'osm_id': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'covered': 'TextEdit', 'depth': 'TextEdit', 'diameter': 'TextEdit', 'highway': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'man_made': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'parking': 'TextEdit', 'public_tra': 'TextEdit', 'pump': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'surface': 'TextEdit', 'tunnel': 'TextEdit', 'water': 'TextEdit', 'waterway': 'TextEdit', 'width': 'TextEdit', 'z_index': 'TextEdit', });
lyr_sumberair_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'amenity': 'TextEdit', 'blockage': 'TextEdit', 'building': 'TextEdit', 'communicat': 'TextEdit', 'communic_1': 'TextEdit', 'covered': 'TextEdit', 'depth': 'TextEdit', 'diameter': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'man_made': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'operator': 'TextEdit', 'pump': 'TextEdit', 'tower': 'TextEdit', 'tunnel': 'TextEdit', 'water': 'TextEdit', 'waterway': 'TextEdit', 'width': 'TextEdit', 'z_index': 'TextEdit', });
lyr_semarangkec_0.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'header label', 'xcoord': 'no label', 'ycoord': 'no label', 'kode_prop': 'no label', 'kode_kab': 'no label', 'Jumlah_Pen': 'no label', });
lyr_lokasitrasport_1.set('fieldLabels', {'osm_id': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'beds': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'building': 'no label', 'capacity': 'no label', 'covered': 'no label', 'denominati': 'no label', 'depth': 'no label', 'diameter': 'no label', 'government': 'no label', 'highway': 'no label', 'historic': 'no label', 'landuse': 'no label', 'layer': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'name': 'no label', 'natural': 'no label', 'office': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'parking': 'no label', 'public_tra': 'no label', 'pump': 'no label', 'railway': 'no label', 'religion': 'no label', 'rooms': 'no label', 'shop': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'water': 'no label', 'waterway': 'no label', 'width': 'no label', 'z_index': 'no label', });
lyr_lokasirs_2.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'kode_prop': 'no label', 'kode_kab': 'no label', 'Jumlah_Pen': 'no label', });
lyr_jalanutama_3.set('fieldLabels', {'osm_id': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'building': 'no label', 'capacity': 'no label', 'covered': 'no label', 'depth': 'no label', 'diameter': 'no label', 'highway': 'no label', 'landuse': 'no label', 'layer': 'no label', 'man_made': 'no label', 'name': 'no label', 'natural': 'no label', 'oneway': 'no label', 'operator': 'no label', 'parking': 'no label', 'public_tra': 'no label', 'pump': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'tunnel': 'no label', 'water': 'no label', 'waterway': 'no label', 'width': 'no label', 'z_index': 'no label', });
lyr_sumberair_4.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'amenity': 'no label', 'blockage': 'no label', 'building': 'no label', 'communicat': 'no label', 'communic_1': 'no label', 'covered': 'no label', 'depth': 'no label', 'diameter': 'no label', 'landuse': 'no label', 'layer': 'no label', 'man_made': 'no label', 'name': 'no label', 'natural': 'no label', 'office': 'no label', 'operator': 'no label', 'pump': 'no label', 'tower': 'no label', 'tunnel': 'no label', 'water': 'no label', 'waterway': 'no label', 'width': 'no label', 'z_index': 'no label', });
lyr_sumberair_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});