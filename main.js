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