var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var isMouseDown = false;
var x, y;
let arr = new Array();
let mass = new Array();


canvas.addEventListener('mouseup', function(e) { 
	isMouseDown = false;

	if (arr.length === 6) {
		var distance1 = Math.sqrt(Math.pow((arr[2]-arr[0]),2) + Math.pow((arr[3]-arr[1]),2));
		var distance2 = Math.sqrt(Math.pow((arr[4]-arr[2]),2) + Math.pow((arr[5]-arr[3]),2));
		var distance3 = Math.sqrt(Math.pow((arr[4]-arr[0]),2) + Math.pow((arr[5]-arr[1]),2));	
	
	    var max = distance1;

	    if (distance2 > max)
	    	max = distance2;

	    if (distance3 > max)
	    	max = distance3;

	    if (distance1 != max) {

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[0], arr[1]);
  			 ctx.lineTo(arr[2], arr[3]);
  			 ctx.stroke();
  			 ctx.closePath();
	    }

	    if (distance2 != max) {

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[2], arr[3]);
  			 ctx.lineTo(arr[4], arr[5]);
  			 ctx.stroke();
  			 ctx.closePath();
	    }

	     if (distance3 != max) {

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[4], arr[5]);
  			 ctx.lineTo(arr[0], arr[1]);
  			 ctx.stroke();
  			 ctx.closePath();
	    }

	}

});

canvas.addEventListener('mousedown', function(e) {
  var circle = new Path2D();
  x = e.offsetX;
  y = e.offsetY;

if (arr.length < 5) {
	 arr.push(x);
  	 arr.push(y);
} 
 
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;

  circle.arc(x, y, 11, 0, 2 * Math.PI);
  ctx.stroke(circle);
  ctx.closePath();
});