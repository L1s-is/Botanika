let navAnimate = document.querySelectorAll('.nav__link')

for (let i = navAnimate.length - 1; i >= 0; i--) {

navAnimate[i].addEventListener('mouseenter', function(){
  this.classList.toggle('in');
  this.classList.remove('out');
})

navAnimate[i].addEventListener('mouseleave',function(){  
  this.classList.toggle('out');
  this.classList.remove('in');
})
}