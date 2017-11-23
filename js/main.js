/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 300;
canvas.height = 200;

// var button = document.querySelector('button');
// button.onclick = function() {
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   canvas.getContext('2d').
//     drawImage(video, 0, 0, canvas.width, canvas.height);
// };





//var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
  console.log("test");
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function init(){
  var constraints = {
    audio: false,
    video: true,
    frameRate: {
      "min":"30",
      "max":"20"
    }
  };
    navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);
  setInterval(function(){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').
      drawImage(video, 0, 0, canvas.width, canvas.height);

      //let src = cv.imread(video);
      // let templ = cv.imread(imgElement1);
      // let dst = new cv.Mat();
      // let mask = new cv.Mat();
      // cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
      // let result = cv.minMaxLoc(dst, mask);
      // let maxPoint = result.maxLoc;
      // let color = new cv.Scalar(255, 0, 0, 255);
      // let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
      // cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
      //cv.imshow('canvasOutput', src);
      //src.delete(); 
      //dst.delete();
      //mask.delete();
      
  },1);
}
