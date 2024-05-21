let trilha;
let paulada;
let ponto;

let chanceDeErrar;

let ballx= 300;
let bally= 200;
let dim= 13;
let raio = dim /2;


let ballYspeed = 6;
let ballXspeed = 6;


let xpau = 5;
let ypau = 150;
let paulength = 10;
let tamanhopau = 90;

let colidiu = false; 

let xpauinimigo =585;
let ypauinimigo =150;
let enemyYspeed;

let meuspontos=0;
let pontosdele=0;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function preload(){
 trilha = loadSound("Trilha.mp3")
 paulada = loadSound('Paulada.mp3')
  ponto = loadSound('Ponto.mp3')
}
  function draw() {
  background(0);
  mostrabola();
  mexebola();
  colisao();
  colisao2();
  mostrapau(xpau, ypau);
  movepau();
  movepau2();
  colisaopau();
  colisaobiblio();
  placar();
  contaponto();
  }
function mostrabola(){
    circle (ballx, bally, dim)
}
function mexebola(){
  ballx += ballXspeed;
  bally += ballYspeed;
}
function colisao(){

    if( ballx +raio > width || ballx - raio < 0){
      ballXspeed *= -1
}
  if (bally +raio >height || bally - raio < 0 ) {
  ballYspeed *= -1
  }
}
  function mostrapau(){
    rect(xpau, ypau, paulength, tamanhopau)
   rect (xpauinimigo, ypauinimigo, paulength, tamanhopau) 
  }
function movepau() {
  if (keyIsDown(87)){
    ypau -= 10;
} 
  if(keyIsDown(83)){
  ypau += 10;
  }
}
function colisaopau(){
 if (ballx - raio < xpau + paulength && bally - raio < ypau + tamanhopau && bally + raio > ypau){
   ballYspeed *= -1
paulada.play()
 }
}
function colisaobiblio(){
  colidiu = collideRectCircle(xpau, ypau, paulength, tamanhopau, ballx, bally, raio);
  if(colidiu) {
   ballXspeed *=-1;
paulada.play();
  }
}
function movepau2(){
  enemyYspeed = bally - ypauinimigo - paulength/2 - 30;
  ypauinimigo += enemyYspeed
}
function colisao2(){
colidiu = collideRectCircle(xpauinimigo, ypauinimigo, paulength, tamanhopau, ballx, bally, raio);
  paulada.play();
  calculaChanceDeErrar();
}
function placar(){
  fill(255);
  stroke(255);
  textAlign(CENTER);
  textSize(16);  
  fill(color(255, 0, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 278 , 26)
  
  text(pontosdele, 321, 26)
}
function contaponto(){
  if ( ballx > 590 ){
   meuspontos +=1;
    ponto.play();
}
    if (ballx < 10) {
  pontosdele +=1;
   ponto.play();   
  }
}
function calculaChanceDeErrar() {
  if (pontosdele >= meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

