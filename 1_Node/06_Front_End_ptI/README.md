# Client App
This Repo contains an example of a dynamic Client App which gets data from a JSON file served from a Node HTTP Server.

## Note on Goole Maps API Keys
In the HTML page(s) in this demo, you will need to replace the ```YOUR_GMAPS_API_KEY_HERE``` text in the script tag (see example below) with your Google Maps API Key for GMaps to function properly.
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GMAPS_API_KEY_HERE&callback=initMap" async defer></script>
```

## Testing
+ Start Node server
```
$ cd server
$ node server
```

Note: If you fail to start the Node server before launching the Client App, you will get the following errors on the Client.

## Client Error
![Error](img/error.png?raw=true "Server Error")


## Client
This Client App is built in standard HTML (not Angular).

+ Simply open index.html in your browser


![Show Map](img/map.png?raw=true "Map")


![Gallery](img/gallery.png?raw=true "Gallery")


## Useful links
* [Google Maps API](https://developers.google.com/maps/)

