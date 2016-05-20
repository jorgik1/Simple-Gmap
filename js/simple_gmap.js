/**
 * Created by yuriy on 20.05.16.
 */
(function ($) {
    Drupal.behaviors.simple_gmap = {
        attach: function(context,settings) {
            // Map options.
            var location = new google.maps.LatLng(55.121974,23.4753363);
            var map;

            //You can use any data, on even add drupal data from nodes 
            //Exaple : var markers = drupalSettings.data;
            //in module : line 24
            var markers = [
                ['Test title 1', 55.111981, 23.473616, 'Some body text'],
                ['Test title 2', 55.111604, 23.469580, 'Some body text'],
                ['Test title 3', 55.112050, 23.474929, 'Some body text'],
                ['Test title 4', 55.121912, 23.477544, 'Some body text'],
                ['Test title 5', 55.111391, 23.472289. 'Some body text']

            ];
            var mapOptions = {
                zoom: 13,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                qw2mapTypeControl: false,
                rotateControl : false,
                overviewMapControl : false,
                scrollwheel : false,
                center: location,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            };
            function setMarkers(map) {
                $.each(markers, function (i, val) {

                    var lng = parseFloat(val[2]);
                    var lat = parseFloat(val[1]);
                    console.log(lng)
                    var marker = new google.maps.Marker({
                        position: {lat: lat, lng: lng},
                        map: map,
                        title: val[0],
                        draggable: false,
                    });

                    //add popup
                    var infowindow = new google.maps.InfoWindow({
                        content: '<h1>'+val[0]+'</h1>'
                        +'<div class="popup-body">'+val[3]+'</div>'
                    });

                    //add click on popup
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                });
            }
            // Build the map and marker.
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            setMarkers(map);

        }
    };
})(jQuery);