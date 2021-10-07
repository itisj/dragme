//hydra
let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = innerWidth;
hydraCanvas.height = innerHeight;
hydraCanvas.id = "hydraCanvas";

hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
  width: innerWidth,
  height: innerHeight,
});

const codeblocks = document.getElementsByClassName("codeblock");

for(const cb of codeblocks) {
  const cd = cb.querySelector("div");
  cd.style.width = "100vw";
  cd.style.height = "100vh";
  cd.style.left = "-2000px";
  cd.style.top = "0";
  cd.style.position = "absolute";
//   cd.style.transform = "translate(0%, 0%)";

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      hush();
      solid(0,0,0,0).out(o0)
      solid(0,0,0,0).out(o1)
      solid(0,0,0,0).out(o2)
      solid(0,0,0,0).out(o3)
      render(o0);
      setTimeout(()=>{
        eval(cb.querySelector("code").textContent)
      }, 60);
      cd.appendChild(hydraCanvas);
    }
  }, { threshold: [0.7] });

  observer.observe(cb);
}


  //
  // //drag divs
  //
  $( function() {
    $( "#draggable" ).draggable({ snap: true });
    $( "#draggable2" ).draggable({ snap: true });
    $( "#draggable3" ).draggable({ snap: true });
    $( "#draggable4" ).draggable({ snap: true });
    $( "#draggable5" ).draggable({ snap: true });
    $( "#draggable6" ).draggable({ snap: true });
    $( "#draggable7" ).draggable({ snap: true });
    $( "#draggable8" ).draggable({ snap: true });
    $( "#draggable9" ).draggable({ snap: true });
    $( "#draggablefooter" ).draggable({ snap: true });
    // $( "#draggable4" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
    // $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    // $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
    // $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });
  } );


//
//webcam
//

window.onload = function() {

//add constraints object
var constraints = { audio: false,
                    video: true};

//call getUserMedia, then the magic
navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
    var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream2){
    var video = document.querySelector('#cam2');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream2;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream3){
    var video = document.querySelector('#cam3');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream3;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream4){
    var video = document.querySelector('#cam4');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream4;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream5){
    var video = document.querySelector('#cam5');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream5;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream6){
    var video = document.querySelector('#cam6');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream6;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream7){
    var video = document.querySelector('#cam7');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream7;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream8){
    var video = document.querySelector('#cam8');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream8;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream9){
    var video = document.querySelector('#cam9');
    // var video = document.querySelector('#cam1');
    // var video = document.querySelector('#cam1');
    video.srcObject = mediaStream9;
    video.play();
}).catch(function(err){
    console.log("yikes, and err!" + err.message);
});

}

//
//on hover play audio
//
$(function(){
$('.error').click(
    function() {    $("audio")[0].play();},
    // function() {    $("audio")[0].pause();}
    )
});

//
//random live comments
//
let chat = [
  'Hello, anyone here?',
  'Did I miss anything?',
  'How is everyone doing?',
  'Where are we?',
  'Anything interesting?',
  'He put heat on the wound to see what would grow.',
  'He colored deep space a soft yellow.',
  'When he asked her favorite number, she answered without hesitation that it was diamonds.',
  'Despite what your teacher may have told you, there is a wrong way to wield a lasso.',
  'No matter how beautiful the sunset, it saddened her knowing she was one day older.',
  'The family’s excitement over going to Disneyland was crazier than she anticipated.',
  'The minute she landed she understood the reason this was a fly-over state.',
  'Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.',
  'It was always dangerous to drive with him since he insisted the safety cones were a slalom course.',
  'The book is in front of the table.',
  'Car safety systems have come a long way, but he was out to prove they could be outsmarted.',
  'Trash covered the landscape like sprinkles do a birthday cake.',
  'Be careful with that butter knife.',
  'The lake is a long way from here.',
  'He decided water-skiing on a frozen lake wasn’t a good idea.',
  'Shingle color was not something the couple had ever talked about.',
  'A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.',
  'The complicated school homework left the parents trying to help their kids quite confused.',
  'There were three sphered rocks congregating in a cubed room.',
]
chat.forEach(function(item, index, array) {
  console.log(item, index)
})
let randomChat1 = Math.floor(Math.random() * chat.length);
console.log(randomChat1, chat[randomChat1]);
document.getElementById('comment1').innerHTML = chat[randomChat1];
// document.getElementById('comment2').innerHTML = chat[randomChat];
// document.getElementById('comment3').innerHTML = chat[randomChat];
// document.getElementById('comment4').innerHTML = chat[randomChat];
// document.getElementById('comment5').innerHTML = chat[randomChat];
// document.getElementById('comment6').innerHTML = chat[randomChat];
// document.getElementById('comment7').innerHTML = chat[randomChat];
// document.getElementById('comment8').innerHTML = chat[randomChat];

// for (let i = 0; i < randomChat1.length; i++) {
//   document.getElementById('comment1').innerHTML += chat[randomChat1[i]];
// }

let randomChat2 = Math.floor(Math.random() * chat.length);
console.log(randomChat2, chat[randomChat2]);
document.getElementById('comment2').innerHTML = chat[randomChat2];

let randomChat3 = Math.floor(Math.random() * chat.length);
console.log(randomChat3, chat[randomChat3]);
document.getElementById('comment3').innerHTML = chat[randomChat3];

let randomChat4 = Math.floor(Math.random() * chat.length);
console.log(randomChat4, chat[randomChat4]);
document.getElementById('comment4').innerHTML = chat[randomChat4];

let randomChat5 = Math.floor(Math.random() * chat.length);
console.log(randomChat5, chat[randomChat5]);
document.getElementById('comment5').innerHTML = chat[randomChat5];

let randomChat6 = Math.floor(Math.random() * chat.length);
console.log(randomChat6, chat[randomChat6]);
document.getElementById('comment6').innerHTML = chat[randomChat6];

let randomChat7 = Math.floor(Math.random() * chat.length);
console.log(randomChat7, chat[randomChat7]);
document.getElementById('comment7').innerHTML = chat[randomChat7];

let randomChat8 = Math.floor(Math.random() * chat.length);
console.log(randomChat8, chat[randomChat8]);
document.getElementById('comment8').innerHTML = chat[randomChat8];

let randomChat9 = Math.floor(Math.random() * chat.length);
console.log(randomChat9, chat[randomChat9]);
document.getElementById('comment9').innerHTML = chat[randomChat9];

let randomChat10 = Math.floor(Math.random() * chat.length);
console.log(randomChat10, chat[randomChat10]);
document.getElementById('comment10').innerHTML = chat[randomChat10];

let randomChat11 = Math.floor(Math.random() * chat.length);
console.log(randomChat11, chat[randomChat11]);
document.getElementById('comment11').innerHTML = chat[randomChat11];

let randomChat12 = Math.floor(Math.random() * chat.length);
console.log(randomChat12, chat[randomChat12]);
document.getElementById('comment12').innerHTML = chat[randomChat12];

let randomChat13 = Math.floor(Math.random() * chat.length);
console.log(randomChat13, chat[randomChat13]);
document.getElementById('comment13').innerHTML = chat[randomChat13];

let randomChat14 = Math.floor(Math.random() * chat.length);
console.log(randomChat14, chat[randomChat14]);
document.getElementById('comment14').innerHTML = chat[randomChat14];

let randomChat15 = Math.floor(Math.random() * chat.length);
console.log(randomChat15, chat[randomChat15]);
document.getElementById('comment15').innerHTML = chat[randomChat15];

let randomChat16 = Math.floor(Math.random() * chat.length);
console.log(randomChat16, chat[randomChat16]);
document.getElementById('comment16').innerHTML = chat[randomChat16];

let randomChat17 = Math.floor(Math.random() * chat.length);
console.log(randomChat17, chat[randomChat17]);
document.getElementById('comment17').innerHTML = chat[randomChat17];

let randomChat18 = Math.floor(Math.random() * chat.length);
console.log(randomChat18, chat[randomChat18]);
document.getElementById('comment18').innerHTML = chat[randomChat18];

let randomChat19 = Math.floor(Math.random() * chat.length);
console.log(randomChat19, chat[randomChat19]);
document.getElementById('comment19').innerHTML = chat[randomChat19];

let randomChat20 = Math.floor(Math.random() * chat.length);
console.log(randomChat20, chat[randomChat20]);
document.getElementById('comment20').innerHTML = chat[randomChat20];

let randomChat21 = Math.floor(Math.random() * chat.length);
console.log(randomChat21, chat[randomChat21]);
document.getElementById('comment21').innerHTML = chat[randomChat21];

let randomChat22 = Math.floor(Math.random() * chat.length);
console.log(randomChat22, chat[randomChat22]);
document.getElementById('comment22').innerHTML = chat[randomChat22];

let randomChat23 = Math.floor(Math.random() * chat.length);
console.log(randomChat23, chat[randomChat23]);
document.getElementById('comment23').innerHTML = chat[randomChat23];

let randomChat24 = Math.floor(Math.random() * chat.length);
console.log(randomChat24, chat[randomChat24]);
document.getElementById('comment24').innerHTML = chat[randomChat24];

let randomChat25 = Math.floor(Math.random() * chat.length);
console.log(randomChat25, chat[randomChat25]);
document.getElementById('comment25').innerHTML = chat[randomChat25];

let randomChat26 = Math.floor(Math.random() * chat.length);
console.log(randomChat26, chat[randomChat26]);
document.getElementById('comment26').innerHTML = chat[randomChat26];

let randomChat27 = Math.floor(Math.random() * chat.length);
console.log(randomChat27, chat[randomChat27]);
document.getElementById('comment27').innerHTML = chat[randomChat27];

let randomChat28 = Math.floor(Math.random() * chat.length);
console.log(randomChat28, chat[randomChat28]);
document.getElementById('comment28').innerHTML = chat[randomChat28];

let randomChat29 = Math.floor(Math.random() * chat.length);
console.log(randomChat29, chat[randomChat29]);
document.getElementById('comment29').innerHTML = chat[randomChat29];

let randomChat30 = Math.floor(Math.random() * chat.length);
console.log(randomChat30, chat[randomChat30]);
document.getElementById('comment30').innerHTML = chat[randomChat30];

let randomChat31 = Math.floor(Math.random() * chat.length);
console.log(randomChat31, chat[randomChat31]);
document.getElementById('comment31').innerHTML = chat[randomChat31];

let randomChat32 = Math.floor(Math.random() * chat.length);
console.log(randomChat32, chat[randomChat32]);
document.getElementById('comment32').innerHTML = chat[randomChat32];



// 
// your comment
// 
function promptNewInnerHtml() {
  var userText = prompt("Leave your message here");
  var element1 = document.getElementById("yourChat");
  element1.innerHTML = "You: "+userText;
  element1.style.color = "turquoise";
  var element2 = document.getElementById("yourComment");
  // element2.style.borderColor = "turquoise"
  // element2.style.borderWidth = "2px"
  element2.style.animationPlayState = "running";
  // element2.style.left = "105vw"
 }

 function showCanvas() {
   for(const cb of codeblocks) {
    const cd = cb.querySelector("div");
    cd.style.width = "100vw";
    cd.style.height = "100vh";
    cd.style.left = "0";
    cd.style.top = "0";
    cd.style.position = "absolute";
   }
 }