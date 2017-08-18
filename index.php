<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>How Far Is It?</title>

   <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">


      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <div class="jumbotron">
        <div class="container-fluid">
            <div class="col-sm-6">
                <h1>How Far Is It?</h1>
                <p>Enter Your Starting & Ending Destinations To Calculate The Mileage Between Them.</p>
                <form >
                    <div class="form-group">
                        <label class="col-xs-2 control-label" for="start">Starting Location:</label>
                        <div class="form-group">
                            <input class="form-control" type="text" id="start" placeholder="Starting Location">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-xs-2 control-label" for="end">Ending Location:</label>
                        <div class="form-group">
                            <input class="form-control" type="text" id="end" placeholder="Ending Location">
                        </div>
                    </div>
                </form>
                
                    <button class="btn btn-success btn-lg" onclick="calcRoute();" type="">Get Distance!</button>
                
            </div>
        </div>
        <div class="container-fluid">
            <div class="col-sm-6">
                <div id="map">
                    
                </div>
                <div id="output">
                    
                </div>
            </div>
        </div>
        
    </div>
  
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwJ2Vepe9L2Miuh7QH87SR_RItIXHlX6Q&libraries=places"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    
    <script src="main.js"></script>
  </body>
</html>