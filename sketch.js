var num1,num2;
var b1,b2,b3,b4
var n1,n2
function setup() {
  createCanvas(400, 400);

  num1=createInput();
  num1.position(5,60)

  num2=createInput()
  num2.position(200,60)

  b1=createButton("ADD")
  b1.position(10,200)
  b1.mousePressed(add)

  b2=createButton("Subtract")
  b2.position(100,200)
  b2.mousePressed(sub)

  b3=createButton("mul")
  b3.position(200,200)
  b3.mousePressed(mul)

  b4=createButton("div")
  b4.position(300,200)
  b4.mousePressed(div)

  textAlign(CENTER)

  

}

function draw() {
  background("hotpink");

 n1=parseInt(num1.value())
 n2=parseInt(num2.value())
 
}
function add(){
  console.log(n1+n2)
}
function sub(){
  console.log(n1-n2)
}
function mul(){
  console.log(n1*n2)
}
function div(){
  console.log(n1/n2)
}