function initMap() {
	// add your code here
	L.mapquest.key = '7r4RiO081CmElJcIkiu8WGkYQsD8KOyA';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
		center: [37.7749, -122.4194],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
  });
/*
	var map = L.mapquest.map('map', {
		center: [32.88, -177.236],
		layers: L.mapquest.titlelayer('map'),
		zoom: 12,
		//zoomControl: false,
	})
*/
	L.marker([32.88, -117.236]).addTo(map);
}