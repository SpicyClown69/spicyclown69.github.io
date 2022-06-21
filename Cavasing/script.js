var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var colourRange = c.width/255
var grd = ctx.createLinearGradient(0, 0, c.width, 0);
grd.addColorStop(0, "green");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "green");
for (let x=0;x<c.width;x++) {
    ctx.moveTo(x, 0);
    ctx.lineTo(c.width/2, c.height);
    ctx.strokeStyle = grd;
    ctx.stroke();
}
