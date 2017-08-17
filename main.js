//set map options
    console.log("I worked");
    var myLatLng = {lat: 51.5, lng: -0.1};
    var mapOptions = {
        center: myLatLng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
    };
    
    //create map
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //create a DirectionsService object to get the results
    var directionsService = new google.maps.DirectionsService();

    //create DirectionsREnderer object which displays the route
    var directionsDisplay = new google.maps.DirectionsRenderer();

    //bind the DirectionsRenderer to the map
        directionsDisplay.setMap(map);

    //define calcRoute function
    funtion calcRoute() {

        var request = {
            origin: document.getElementById("from").value,
            destination: document.getElementById("to").value,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }
        
        directionsService.route(request, function(result, status){
            if(status == google.maps.DirectionsStatus.OK){
                console.log(result);

                 //Get distance and time
                window.alert("The distance is " + result.routes[0].legs[0].distance.text + ".<br/>The time is: " + result.routes[0].legs[0].duration.text + ".");

                //display route using DirectionsRenderer object
                directionsDisplay.setDirections(result);

                //delete route from map
                directionsDisplay.setDirections({routes: []});

                //center map
                map.setCenter(myLatLng);

            }
        });
            
               

                //if status not OK
                    //delete route from map

                    //center map in London

    }