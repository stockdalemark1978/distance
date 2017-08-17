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
    function calcRoute() {

        var request = {
            origin: document.getElementById("start").value,
            destination: document.getElementById("end").value,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }
        
        directionsService.route(request, function(result, status){
            if(status == google.maps.DirectionsStatus.OK){
                console.log(result);

                 //Get distance and time
                 $("#output").html("<div class='alert-info'>From:"+document.getElementById("start").value+".<br/>To:"+document.getElementById("end").value+".<br/> Driving distance: "+result.routes[0].legs[0].duration.text +". <br/>Duration: "+result.routes[0].legs[0].duration.text+". </div>");

                //display route using DirectionsRenderer object
                directionsDisplay.setDirections(result);
            }else{
                //delete route from map
                directionsDisplay.setDirections({routes: []});

                 //center map
                map.setCenter(myLatLng);

                //error message
                $("output").html("<div class='alert-danger'>Could not find the distance.</div>");
            }
            });
        
               
        }

        var options = {
            types: ['(cities)']
        }
        var input1 = document.getElementById("start");
        var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

        var input2 = document.getElementById("end");
        var autocomplete2 = new google.maps.places.Autocomplete(input2, options);