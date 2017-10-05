function makeScrollable(container,scrollBy){var active=true;container=$(container);var grabbing="move";var isgrabbing=false;var xp,yp,grabbedNode;var startgrab=function(target){isgrabbing=true;grabbedNode=target;grabbedNode.style.cursor=grabbing;};var stopgrab=function(){isgrabbing=false;if(grabbedNode){grabbedNode.style.cursor='';grabbedNode=null;}};var scrollTo=function(dx,dy){scrollBy(dx,dy);};container.mousedown(function(e){if(active){startgrab(e.target);xp=e.pageX;yp=e.pageY;}}).mousemove(function(e){if(!isgrabbing)return true;scrollTo(xp- e.pageX,yp- e.pageY);xp=e.pageX;yp=e.pageY;}).mouseup(stopgrab).mouseleave(stopgrab).on('touchstart',function(e){e.preventDefault();if(!isgrabbing)
startgrab(e.target);var oe=e.originalEvent;xp=oe.touches[0].pageX;yp=oe.touches[0].pageY;}).on('touchmove',function(e){if(!isgrabbing)return true;var oe=e.originalEvent;var px=oe.touches[0].pageX;var py=oe.touches[0].pageY;scrollTo(xp- px,yp- py);xp=px;yp=py;}).on('touchend',function(e){var oe=e.originalEvent;if(oe.touches.length==0){stopgrab();}})
var pub={};pub.stop=function(){active=false;stopgrab();};pub.start=function(){active=true;};return pub;}