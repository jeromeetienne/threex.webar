# Augmented Reality Player For Three.js

# What Is It ?
- This is a 'ar player for three.js'
- Run the apps on a phone or on a desktop (run on nexus 6)
- When a marker is reconized, take its id
- Display the three.js scene of this id
- This scene is to be edited by the three.js editor

---


# TODO
- the goal is what ? to produce examples of AR with markers
- ultimatly it is a phone webapps
  - support gradual degradation
  - with dual screen or not ?
  - with gyro controls or not ?
  - with environment camera or only face ?
- we use jsaruco to implement it, but it should be almost not important
  - the important is the feature
  - the feature is to be able to recognize and position the marker
  - it is made on a live video stream from getUserMedia
- stuff to debug
- stuff to look shiny


# Ideal App
- full screen video
- marker reconized
- 3d scene appearing on top

# How to make this code flexible and reusable
- could be a nice cooked library
- delimit the scope the application and of the library
- various parts
  - marker recognition
  - video grabbing
  - display the 3d scene
  - display the video and the 3d together
- the user will comes from three.js
  - so the base code will be there
  - the library should provide easy interface for them

---

# Software Architecture
- dev should
  - provide renderer, scene
- library should
  - display video behind canvas at the proper location
  - recognize marker in the video
  - render the scene from the developper at the proper location
  - notify the developper when the marker is visible or not

- unsure how to merge them together
- no need to. just split the code in a nice fashion
