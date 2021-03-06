var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var isMouseDown = false;
var x, y, _x, _y, x_center, y_center, x_circle, y_circle;
var square, radius;
let arr = new Array();


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

	    if (max == distance1) {
	    	x_center = (arr[2]+arr[0])/2;
	    	y_center = (arr[3]+arr[1])/2;

	    	x_circle = x_center;
	    	y_circle = y_center;

	    	_x = 2*x_center - arr[4];
	    	_y = 2*y_center - arr[5];

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[2], arr[3]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();

  			 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[0], arr[1]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();
	    }

	    if (max == distance2) {
	    	x_center = (arr[4]+arr[2])/2;
	    	y_center = (arr[5]+arr[3])/2;

	    	x_circle = x_center;
	    	y_circle = y_center;

	    	_x = 2*x_center - arr[0];
	    	_y = 2*y_center - arr[1];

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[2], arr[3]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();

  			 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[4], arr[5]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();
	    }

	     if (max == distance3) {
	     	x_center = (arr[4]+arr[0])/2;
	    	y_center = (arr[5]+arr[1])/2;

	    	x_circle = x_center;
	    	y_circle = y_center;

	    	_x = 2*x_center - arr[2];
	    	_y = 2*y_center - arr[3];

	    	 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[0], arr[1]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();

  			 ctx.beginPath();
  			 ctx.strokeStyle = 'blue';
  			 ctx.lineWidth = 5;
  			 ctx.lineCap = 'round';
  			 ctx.moveTo(arr[4], arr[5]);
  			 ctx.lineTo(_x, _y);
  			 ctx.stroke();
  			 ctx.closePath();
	     }
	      arr.push(_x);
  	 	  arr.push(_y);

  	 	  square = (arr[0] * arr[3]) + (arr[4] * arr[1]) + (arr[2] * arr[5]) - (arr[4] * arr[3]) - (arr[0] * arr[5]) - (arr[2] * arr[1]);
  	 	  radius = Math.sqrt(square/Math.PI);

  	 	  document.getElementById('canvasData').value += "square=" + square + ';';

  	 	  var circle1 = new Path2D();
  	 	  ctx.beginPath();
  		  ctx.strokeStyle = 'yellow';
          ctx.lineWidth = 7;
          circle1.arc(x_circle, y_circle, radius, 0, 2 * Math.PI);
          ctx.stroke(circle1);
          ctx.closePath(); 
	}
	 
});

canvas.addEventListener('mousedown', function(e) {
var circle = new Path2D();
x = e.offsetX;
document.getElementById('canvasData').value += "x=" + e.offsetX;
y = e.offsetY;
document.getElementById('canvasData').value += " y=" + e.offsetY + "; ";


if (arr.length < 5) {
	  arr.push(x);
  	  arr.push(y);
  	  ctx.beginPath();
	  ctx.strokeStyle = 'red';
	  ctx.lineWidth = 5;
	  circle.arc(x, y, 11, 0, 2 * Math.PI);
	  ctx.stroke(circle);
	  ctx.closePath();
	}
});


window.addEventListener('load',function() {		
		document.getElementById('reset').addEventListener('click',function() {
			ctx.clearRect(0,0,canvas.width, canvas.height);
			arr.length = 0;
			document.getElementById('canvasData').value = "";

		},false);
		
	init();
		
},false);

