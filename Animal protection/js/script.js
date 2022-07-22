let scr = document.querySelector('.scroll_top');
  
window.addEventListener('scroll',function(){
  if( window.scrollY > 350){
    scr.classList.add('active');
  }else{
    scr.classList.remove('active')
  }
})
