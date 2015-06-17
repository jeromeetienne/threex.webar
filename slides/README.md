# Notes on how to write slides
- pure web augmented Reality
- pro/con of the augmented Reality on the web
  - less cpu efficient when running
  - easier/faster to code for web-developper
  - lower barriere of entry than the pure native solution
- For more mature solution, considere running native
  - good for battery/good for latency
  - point to ARToolKit
- PRO it run on browser
  - any hardware would be fine
  - this means it run on desktop
  - it run on modern mobile
  - require getUserMedia
    - What about IE mobile astatus
    - what about safari mobile status
    - android is supporting it
  - require webgl to display 3d

- jsaruco is only recognizing this type of marker
  - they are easy to recognize
  - but they are ugly
  - More elaborated libraries are able to recognize any images
    - e.g. Vuforia/ARToolKit


# Questions to answers
- what is three.js
- what is AR
- how does it fit in the hackathon
- how to use the example code

# How to Use the Examples Code
- all available on github
  - should it be on daqri account ?
  - should it be on my account
- where to find it
- what can you do with it
- what is supplied by the library
- What examples can be done
  - provide suggestions of possible applications
- It is possible to recognize any aruco marker
  - each of them got a marker id
  - 1024 possible markers to recognize

---

- you can move the camera and the marker is static
- you can move the marker in front a static camera
  - May be localisation of moving objects
  - like where is this tool/vehicule

---

# Various Parts Of Coding Augmented Reality on the web
- Step 1 - get data from the Reality
  - in our case, we gonna use normal camera
- Step 2 - recognize and localise the marker in the video stream
- Step 3 - display 3d on top of the video stream
- Meta: how do we implement each of them
