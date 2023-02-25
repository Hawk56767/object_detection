img="";
status="";
objects=[];
function preload(){
img= loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640, 400);
canvas.center();
objectdetector=ml5.objectDetector('cocoSSD', modelLoaded);
document.getElementById("status").innerHTML="Status: detecting stuff";
}
function draw(){
image(img, 0, 0, 640, 400);
if (status!="") {
for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="Status: objects are equal to = detected";
fill("red");
confidence_percentage=Math.floor(objects[i].confidence*100);
text(objects[i].label+ " "+confidence_percentage+ "%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("red");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}
function modelLoaded(){
console.log("Model is Loaded!");
status=true;
objectdetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
console.error(error);
}
console.log(results);
objects=results;
}