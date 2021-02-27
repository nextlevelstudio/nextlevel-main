//import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
var body = document.querySelector('body');
$('.black .overlay').click(function(){
  animate(this, 'black');
});
$('.blue .overlay').click(function(){
  animate(this, 'blue');
});

$('.white .overlay').click(function(){
  animate(this, 'white');
});
function animate(e, color) {
  e.classList.remove('importantOverride');
  var data = sessionStorage.getItem('elemSize');
  if (!data) {
  if (color == 'blue') {
    e.style.background = 'rgba(0, 203, 255, 1)';
  }
  if (color == 'white') {
    e.style.background = 'rgba(255,255,255,1)';
  }
  if (color == 'black') {
    e.style.background = 'rgba(0,0,0,1)';
  }
  setSize(e);
  var a = e.parentElement.querySelector('.p-info');
  gsap.to(e, {
    top: 0,
    left: 0,
    duration: 0.5,
    height: "100vh",
    width: "50%",
  });
  gsap.to(a, {
    top: 0,
    duration: 0.5,
    height: "100vh",
    transform: "scaleX(1)",
    transformOrigin: "top left"
  });
  setTimeout(() => {
    addScrollbar(a);
  }, 500);
}
}
function addScrollbar(a) {
  body.style.overflow = 'hidden';
  a.style.overflow = 'auto';
}
function setSize(t) {
  console.log('setsize');
  var rect = t.getBoundingClientRect();
  var rt = t.getBoundingClientRect();
  console.log(rect.top);
  console.log(rt.top);
  sessionStorage.setItem('elemSize', rect);
  sessionStorage.setItem('top', rect.top);
  sessionStorage.setItem('left', rect.left);
  sessionStorage.setItem('width', rect.width);
  sessionStorage.setItem('height', rect.height);
  t.style.transition = 'none';
  t.style.position = 'fixed';
  t.style.top = rect.top + 'px';
  t.style.left = rect.left + 'px';
  t.style.width = rect.width + 'px';
  t.style.height = rect.height + 'px';
  t.style.zIndex = '99';
}
$('.close').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  body.style.overflow = 'auto';
  var a = this.parentElement;
  var overlay = this.parentElement.parentElement;
  var top = sessionStorage.getItem('top');
  var left = sessionStorage.getItem('left');
  var width = sessionStorage.getItem('width');
  var height = sessionStorage.getItem('height');

  gsap.to(a, {
    transform: "scaleX(0)",
    transformOrigin: "top left"
  });
  gsap.to(overlay, {
    top: top + 'px',
    left: left + 'px',
    duration: 0.5,
    height: height + 'px',
    width: width + 'px',
  });
  setTimeout(() => {
    overlay.classList.add('importantOverride');
    sessionStorage.removeItem('elemSize');
    sessionStorage.removeItem('top');
    sessionStorage.removeItem('left');
    sessionStorage.removeItem('width');
    sessionStorage.removeItem('height');
  }, 500);
  
});
$( ".white" ).hover(
    function() {
      $('.hidden1').addClass( "hover" );
    }, function() {
      $('.hidden1').removeClass( "hover" );
    }
  );