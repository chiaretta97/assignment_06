var pis;
var nameL = []
var titleL = []
var locationL = []
var launchdateL = []
var y = 0;

function preload() {

 pis = loadJSON('assets/peopleinspace.json')
}

function setup() {

 createCanvas(500, 500);
 //console.log(pis);

 for (var i = 0; i < pis.people.length; i++) {
  var people = pis.people[i];
  nameL.push(pis.people[i].name)
  titleL.push(pis.people[i].title)
  locationL.push(pis.people[i].location)
  launchdateL.push(pis.people[i].launchdate)
   //va in ordine: name1, bio1, name2, bio2
   /*  console.log(pis.people[i].name);
     console.log(pis.people[i].biophoto);*/
 }

 /*var col1 = color(255,0,0)
   appari(0, 0, 500, y + 260, col1)*/

}

function draw() {
 background('#660033');
 textFont('Roboto Slab')
  //textAlign(CENTER)

 for (var i = 0; i < pis.people.length; i++) {

  var x0 = 0;
  var y0 = 0;
  var w0 = 500;
  var h0 = 250;

  stroke(255);
  fill('#660033')
  rect(x0, y0, w0, h0);
  fill(255)
  textAlign(CENTER);
  textSize(15);
  push()
  translate(0,frameCount*5)
  translate(0,-frameCount*2)
  text("SCROLL UP",250,60+y)
  pop()
  textSize(50);
  textStyle(BOLD);
  text(nameL[0], 250, y + i * 27);
  text(nameL[i], 250, y + i * 390);

  push()
  var yy0 = y + i * 25;
  if (mouseX > x0 && mouseX < x0 + w0 && mouseY > y0 && mouseY < y0 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x0, y0, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[0], 200, yy0);
   text('at ' + locationL[0], 200, 20 + yy0);
   var daysInSpace = (Date.now() - Date.parse(launchdateL[0])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy0, daysInSpace)
   fill(255);
   text(round(daysInSpace), 113, yy0 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }

  pop()

  var x1 = x0;
  var y1 = y + y0 + 250;

  stroke(255);
  fill('#660033')
  rect(x1, y1, w0, h0);
  fill(255);
  text(nameL[1], 250, y + i * 77);

  push()
  var yy1 = y + i * 75;
  if (mouseX > x1 && mouseX < x1 + w0 && mouseY > y1 && mouseY < y1 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x1, y1, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[1], 200, yy1);
   text('at ' + locationL[1], 200, 20 + yy1);
   var daysInSpace1 = (Date.now() - Date.parse(launchdateL[1])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy1, daysInSpace1)
   fill(255);
   text(round(daysInSpace), 113, yy1 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }
  pop()

  var x2 = x0;
  var y2 = y1 + 250;

  stroke(255);
  fill('#660033')
  rect(x2, y2, w0, h0);
  fill(255);
  text(nameL[2], 250, y + i * 127);

  push()
  var yy2 = y + i * 125;
  if (mouseX > x2 && mouseX < x2 + w0 && mouseY > y2 && mouseY < y2 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x2, y2, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[2], 200, yy2);
   text('at ' + locationL[2], 200, 20 + yy2);
   var daysInSpace2 = (Date.now() - Date.parse(launchdateL[2])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy2, daysInSpace2)
   fill(255);
   text(round(daysInSpace), 113, yy2 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }

  pop()

  var x3 = x0;
  var y3 = y1 + 500;

  stroke(255);
  fill('#660033')
  rect(x3, y3, w0, h0);
  fill(255);
  text(nameL[3], 250, y + i * 177);

  push()
  var yy3 = y + i * 175;
  if (mouseX > x3 && mouseX < x3 + w0 && mouseY > y3 && mouseY < y3 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x3, y3, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[3], 200, yy3);
   text('at ' + locationL[3], 200, 20 + yy3);
   var daysInSpace3 = (Date.now() - Date.parse(launchdateL[3])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy3, daysInSpace3)
   fill(255);
   text(round(daysInSpace), 110, yy3 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }

  pop()

  var x4 = x0;
  var y4 = y1 + 750;

  stroke(255);
  fill('#660033')
  rect(x4, y4, w0, h0);
  fill(255);
  text(nameL[4], 250, y + i * 227);

  push()
  var yy4 = y + i * 225;
  if (mouseX > x4 && mouseX < x4 + w0 && mouseY > y4 && mouseY < y4 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x4, y4, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[4], 200, yy4);
   text('at ' + locationL[4], 200, 20 + yy4);
   var daysInSpace4 = (Date.now() - Date.parse(launchdateL[4])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy4, daysInSpace4)
   fill(255);
   text(round(daysInSpace), 110, yy4 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }

  pop()

  var x5 = x0;
  var y5 = y1 + 750 + 250;

  stroke(255);
  fill('#660033')
  rect(x5, y5, w0, h0);
  fill(255);
  text(nameL[5], 250, y + i * 277);

  push()
  var yy5 = y + i * 275;
  if (mouseX > x5 && mouseX < x5 + w0 && mouseY > y5 && mouseY < y5 + h0) {
   noStroke()
   fill('#000033');
   stroke(255);
   rect(x5, y5, w0, h0);
   fill(255);
   textSize(15);
   textAlign(LEFT)
   textStyle(NORMAL);
   text('days as ' + titleL[5], 200, yy5);
   text('at ' + locationL[5], 200, 20 + yy5);
   var daysInSpace5 = (Date.now() - Date.parse(launchdateL[5])) / 1000 / 60 / 60 / 24;
   fill('#000033');
   noStroke;
   ellipse(120, yy5, daysInSpace5)
   fill(255);
   text(round(daysInSpace), 110, yy5 + 4);
   // text('DAYS  IN  '+locationL[i]+': '+(Math.round(Date.now()-Date.parse(launchdateL[i]))/1000/60/60/24),180,y+ i * 30);

  }

  pop()


 }
}

function mouseWheel(event) {
 print(event.delta);
 y -= event.delta;
 if (y > 0 || y < -1000)  {
  y *= -1
 }
}