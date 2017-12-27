let utils = new Utils('errorMessage');


    let streaming = false;
    let videoInput = document.getElementById('videoInput');
    let startAndStop = document.getElementById('startAndStop');
    let canvasOutput = document.getElementById('canvasOutput');
    let canvasContext = canvasOutput.getContext('2d');



    function onVideoStarted() {
      streaming = true;
      startAndStop.innerText = 'Stop';
      videoInput.width = videoInput.videoWidth;
      videoInput.height = videoInput.videoHeight;
      utils.executeCode('codeEditor');
    }

    function onVideoStopped() {
      streaming = false;
      canvasContext.clearRect(0, 0, canvasOutput.width, canvasOutput.height);
      startAndStop.innerText = 'Start';
    }

    const FPS = 60;
    stopprocess = false;
    function processVideo() {
      try {
        let begin = Date.now();
        // start processing.
        cap.read(src);
        src.copyTo(dst);
        cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);
        dst.setTo(new cv.Scalar(0, 0, 0, 1));
        // detect faces.
        classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
        stopclassifier.detectMultiScale(gray, stopfaces, 1.1, 3, 0);
        // draw faces.
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // ctx.beginPath();
        // ctx.stroke();
        var points1, points2, height, width;
        //var innerdiv = document.getElementById('canvasOutputdiv');
        //innerdiv.innerHTML = "";
        for (let i = 0; i < faces.size(); ++i) {
          rects1.length=0;
          //console.log(faces);
          let face = faces.get(i);
          let point1 = new cv.Point(face.x, face.y);
          let point2 = new cv.Point(face.x + face.width, face.y + face.height);
          rects1.push({ x: face.x, y: face.y, w: face.width, h: face.height });
          let font = cv.FONT_HERSHEY_PLAIN;
          cv.putText(dst,'steering',new cv.Point(face.x, face.y+15), font, 1,new cv.Scalar(255,0,0,255),2,2);
          cv.rectangle(dst, point1, point2, [255, 0, 0, 255]);
        }

        for (let i = 0; i < stopfaces.size(); ++i) {
          rects2.length=0;
          let face = stopfaces.get(i);
          let point1 = new cv.Point(face.x, face.y);
          let point2 = new cv.Point(face.x + face.width, face.y + face.height);
          rects2.push({ x: face.x, y: face.y, w: face.width, h: face.height });
          let font = cv.FONT_HERSHEY_PLAIN;
          cv.putText(dst,'Infotainment',new cv.Point(face.x, face.y+15), font, 1,new cv.Scalar(0,255,0,255),2,1);
          cv.rectangle(dst, point1, point2, [0, 255, 0, 255]);
        }

        cv.imshow('canvasOutput', dst);
        // schedule the next one.
        let delay = 1000 / FPS - (Date.now() - begin);
        //if (!stopprocess) {
          setTimeout(processVideo, delay);
        //}

      } catch (err) {
        console.log(err);
      }
    };

    // schedule the first one.
    function demo(value) {
      alert(value+" details");
      //var innerdiv = document.getElementById('canvasOutputdiv');
      //innerdiv.innerHTML = "";
      // document.getElementById("details").innerText = 
      // var modal = document.getElementById('myModal');
      // modal.style.display = "block";
    }
    function close() {
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    }

    // var span = document.getElementsByClassName("close")[0];
    // span.onclick = function () {
    //   var modal = document.getElementById('myModal');
    //   modal.style.display = "none";
    //   //var innerdiv = document.getElementById('canvasOutputdiv');
    //   //innerdiv.innerHTML = "";
    // }

    utils.loadOpenCv(() => {
      let faceCascadeFile = 'cascade_steering.xml';
      let stopcascade = 'cascade_infotainment.xml';
      utils.createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {
        video = document.getElementById('videoInput');
        console.log(video);
        c = document.getElementById("canvasOutput");
        ctx = c.getContext("2d");
        src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
        dst = new cv.Mat(video.height, video.width, cv.CV_8UC3);
        gray = new cv.Mat();
        cap = new cv.VideoCapture(video);
        faces = new cv.RectVector();
        classifier = new cv.CascadeClassifier();
        classifier.load('cascade_steering.xml');
        setTimeout(processVideo, 0);
      });

      utils.createFileFromUrl(stopcascade, stopcascade, () => {
        stopfaces = new cv.RectVector();
        stopclassifier = new cv.CascadeClassifier();
        stopclassifier.load('cascade_infotainment.xml');
      });

    });



    var elem = document.getElementById('canvasOutput');

    function collides(rects, x, y) {
      var isCollision = false;
      for (var i = 0, len = rects.length; i < len; i++) {
        var left = rects[i].x, right = rects[i].x + rects[i].w;
        var top = rects[i].y, bottom = rects[i].y + rects[i].h;
        if (right >= x
          && left <= x
          && bottom >= y
          && top <= y) {
          isCollision = rects[i];
        }
      }
      return isCollision;
    }

    // check if context exist
    if (elem && elem.getContext) {

      // list of rectangles to render
      rects1 = [{ x: 0, y: 0, w: 150, h: 150 }];
      rects2 = [{ x: 0, y: 0, w: 150, h: 150 }];
      // get context
      var context = elem.getContext('2d');
      

      // listener, using W3C style for example    
      elem.addEventListener('click', function (e) {
        var rect1 = collides(rects1, e.offsetX, e.offsetY);
        //rects2.length=0;
        if (rect1) {
          demo('Steering');
          rects1.length=0;
        } else {
          
        }

        var rect2 = collides(rects2, e.offsetX, e.offsetY);
        //rects1.length=0;
        if (rect2) {
          demo('Infotainment');
          rects2.length=0;
        } else {
          
        }
      }, false);
    }