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
        //create request

        //pass the request to the route method
            //if status OK
                //Get distance and time

                //display route using DirectionsRenderer object

                //if status not OK
                    //delete route from map

                    //center map in London

    }