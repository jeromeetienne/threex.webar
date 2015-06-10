# Augmented Reality For Three.js

This demo shows how to get augmented reality using pure-web technologies.

# How To Run The Demo ?
- put a browser http://jeromeetienne.github.io/arplayerforthreejs/examples/basic.html
- it will read your webcam using [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia)
- it will recognize the marker you put in front
  - get the marker from [here](http://jeromeetienne.github.io/arplayerforthreejs/marker/marker.html)
  - you can print it and point the camera toward the paper
  - or you can load the marker page and put the phone in front of the camera

# Supported Devices
- It should run on any web browser which support
[WebGL](http://caniuse.com/#feat=webgl)
and
[getUserMedia](http://caniuse.com/#feat=stream)
- It runs on desktop and mobiles.
- modern phones, such as nexus 6/9, are powerfull enougth to run it
- unfortunatly ios browser still lack support for [getUserMedia](http://caniuse.com/#feat=stream)
- so iphone and ipads can't play
