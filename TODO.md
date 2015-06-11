# events
- how to notify result via events
  - if the marker was present the last time, and no more present, notify
  - markerIdDisapeared
  - markerIdAppeared


# How to code the UI
- when the marker is detected
  - destroy the UI if needed
  - 

---

- for blinking, do a tweening on the opacity
- for the shaking, do a tweening too
- require to get a 640x480 resolution
  - the only one seems to get working for now
  - see https://www.simpl.info/getusermedia/constraints/
- note apps: do an apps which get the macbook camera
  - people move their phone on front of it
  - this draw laser particle

---

- do videoGrabbing css working
  - for that i need the canvas
  - thus i can keep the video behind
- make the resolution of the camera tunable
- LATER load and play a three.js scene from the editor
  - non obvious.
  - https://github.com/mrdoob/three.js/blob/master/editor/js/libs/app.js
  - the camera is handled in the app.js
- DONE make it work with a predefined video
  - do that in threex.videoGrabbing
- DONE make the scaleDown of the marker recognition tunable
- DONE make it work with an image
  - thus it is easier to debug
  - no need for camera
  - implement that in the videoGrabbing

---

- ```app.dispose```
