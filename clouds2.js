function makeCloud(horz, vert, iterations) {

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS(null, 'cx', x.toString());
  svg.setAttributeNS(null, 'cy', y.toString());
  svg.setAttributeNS(null, 'r', r.toString());
  svg.style ="id:sky; fill: white; opacity:50%";


  for (i = 0; i < iterations; i++) {
    drawCircle(horz,vert,200)
  }
}



function dist(x1, y1, x2, y2){
  y = x2 - x1;
  x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
};

function randomAngle() {
  var angle = randomNumber(0, 359);
  return angle;
};

// function randomHorz(angle) {
//   var randomHorz = circleGap * Math.cos(angle);
//   return randomHorz;
// };

// function randomVert(angle) {
//   var randomVert = circleGap * Math.sin(angle);
//   return randomVert;
// };


function randomHorz(angle) {
  var randomHorz = circleGap * Math.cos(angle * Math.PI/180);
  return randomHorz;
};

function randomVert(angle) {
  var randomVert = circleGap * Math.sin(angle * Math.PI/180);
  return randomVert;
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function isInsideCanvas(circle) {
  return !(circle.x < (0-((width/2)-100)) || circle.x > ((width/2) - 100) || circle.y < (0 - ((height/2)-100)) || circle.y > ((height/2) - 100))
};

function drawCircle(x,y,r) {
  var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  element.setAttributeNS(null, 'cx', x.toString());
  element.setAttributeNS(null, 'cy', y.toString());
  element.setAttributeNS(null, 'r', r.toString());
  element.style ="fill: white; opacity:50%";
  svg.appendChild(element);
  };
  