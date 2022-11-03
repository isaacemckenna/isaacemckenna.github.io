var protection = 0;
var circleGap = 120;


  var svg = document.getElementById("sky");
  console.log(svg);
  var circles = [];

  
  
  function spawnCircle(horz, vert, radius, iterations) {
    // var currentHorz = horz;
    // var currentVert = vert;
    // var currentAngle = randomAngle();

    // while (circles.length < iterations) {
    
    // currentAngle = randomAngle();
    // currentHorz = currentHorz + randomHorz(currentAngle);
    // currentVert = currentVert + randomVert(currentAngle);
    // circleType = chooseCircle();

    // var circle = {
    //   x: currentHorz,
    //   y: currentVert,
    //   r: radius
    // }
    //   circles.push(circle);
      drawCircle(horz,vert,radius);
        
  // }
};

  
  function drawCircle(x,y,r) {
  var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  element.setAttributeNS(null, 'cx', x.toString());
  element.setAttributeNS(null, 'cy', y.toString());
  element.setAttributeNS(null, 'r', r.toString());
  element.style ="fill: white; opacity:50%";
svg.appendChild(element);
  };
  






function isInsideCanvas(circle) {
  return !(circle.x < (0-((width/2)-100)) || circle.x > ((width/2) - 100) || circle.y < (0 - ((height/2)-100)) || circle.y > ((height/2) - 100))
};

function dist(x1, y1, x2, y2){
  y = x2 - x1;
  x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
};

function randomAngle() {
  var angle = randomNumber(0, 359);
  return angle;
};

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


<!-- <script type="text/javascript">
  var svg = document.getElementById("sky");
  console.log(svg);
  var circles = [];

  
  
  function spawnCircle(horz, vert, radius, iterations) {
    var currentHorz = horz;
    var currentVert = vert;
    var currentAngle = randomAngle();

    while (circles.length < iterations) {
    
    currentAngle = randomAngle();
    currentHorz = currentHorz + randomHorz(currentAngle);
    currentVert = currentVert + randomVert(currentAngle);
    circleType = chooseCircle();

    var circle = {
      x: currentHorz,
      y: currentVert,
      r: radius
    }
      circles.push(circle)
      drawCircle(horz,vert,radius)
        
  }
};

  
  function drawCircle(x,y,r) {
  var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  element.setAttributeNS(null, 'cx', x.toString());
  element.setAttributeNS(null, 'cy', y.toString());
  element.setAttributeNS(null, 'r', r.toString());
  element.style ="fill: white; opacity:50%";
svg.appendChild(element);
  };
  






function isInsideCanvas(circle) {
  return !(circle.x < (0-((width/2)-100)) || circle.x > ((width/2) - 100) || circle.y < (0 - ((height/2)-100)) || circle.y > ((height/2) - 100))
};

function dist(x1, y1, x2, y2){
  y = x2 - x1;
  x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
};

function randomAngle() {
  var angle = randomNumber(0, 359);
  return angle;
};

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
// drawCircle(100,100,100)
spawnCircle(100,100,100,5)
</script> -->
