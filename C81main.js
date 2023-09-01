var mouseEvent = "empty";
var lastpositionX, lastpositionY;
var canvas = document.getElementById("shablau");
var ctx= canvas.getContext("2d");
var color =  "black";
widthLine = 1;
canvas.addEventListener("mousedown",  mymousedown);
    function mymousedown(e){
        color = document.getElementById("cor").value;
       widthLine = document.getElementById("largura").value;
     mouseEvent = "mouseDown";   
    }
    canvas.addEventListener("mousemove",myMouseMove);
    function myMouseMove(e){
        positionmouseX  = e.clientX  - canvas.offsetLeft;
        positionmouseY =  e.clientY  - canvas.offsetTop;
        if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastpositionX , lastpositionY);
        ctx.lineTo(positionmouseX,positionmouseY);
        ctx.stroke();
        }
        lastpositionX = positionmouseX;
        lastpositionY = positionmouseY;
    }
    canvas.addEventListener("mouseup",myMouseup);
    function myMouseup(e){
        mouseEvent = "";
    }
    canvas.addEventListener("mouseleave",myMouseleave);
    function myMouseleave(e){
        mouseEvent = "";
    }
    var width = screen.width;
    newWidth = sreeen.width - 70
    newHeight = sreen.height -300
    if(width < 992){
        document.getElementById("shablau").width = newWidth;
        document.getElementById("shblau").heigth = newHeight;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart",myTouchStart);
     function myTouchStart(e){
     color2 = document.getElementById("cor").value;
     widthOfLine = document.getElementById("largura").value;
     lastpositionOFX = e.touches[0].clientX - canvas.offsetLeft;
     lastpositionOFY = e.touches[0].clientY - canvas.offsetTop;}
     canvas.addEventListener("touchmove",myTouchMove);
     function myTouchMove(e){
        currentPOsitionX = e.touches[0].clientX - canvas.offsetLeft;
        currentPOsitionY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color2;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPOsitionOFX, lastPOsitionOfY);
        ctx.lineTo(currentPOsitionX, currentPOsitionY);
        ctx.stroke();
        lastpositionOFX = currentPOsitionX;
        lastpositionOFY = currentPOsitionY;}
      var lastpositionOFX, lastPOsitionOFY;
     color2 = "black";
     widthOfLine = 2;
    function clearArea(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }