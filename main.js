var mouseEvent= "empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
widthofline=2;

canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e){
        color=document.getElementById("input1").value;
        widthofline=document.getElementById("input2").value;
        radius=document.getElementById("input3").value;
        mouseEvent="mouseDown";
    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e){
        current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
        current_position_of_mouse_y=e.clientY-canvas.offsetTop;

        if(mouseEvent=="mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=widthofline;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
            ctx.stroke();
        }
        last_position_x=current_position_of_mouse_x;
        last_position_y=current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){
        mouseEvent="mouseUp";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseLeave";
    }
function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}