ymaps.ready(init);
      
function init(){ 
	var myMap = new ymaps.Map("map", {
		center: [59.918886, 30.339072],
		zoom: 16
	}); 
	
	var myPlacemark = new ymaps.Placemark([59.918886, 30.339072], {}, {
		preset: 'islands#redIcon'
	});
	
	myMap.geoObjects.add(myPlacemark);
}