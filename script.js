// Header shrink on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50) header.classList.add('shrink');
  else header.classList.remove('shrink');
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
    navMenu.classList.remove('active'); hamburger.classList.remove('active');
  });
});

// Active section highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if(pageYOffset >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => { link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// WhatsApp order
function orderViaWhatsApp(id,name){
  const num="919876543210";
  const msg=`Hello, I want to order ${name} (ID: ${id})`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank");
}

// Lightbox
let currentIndex=0, images=[], activeLightbox=null;
function openGallery(id,e){
  if(e)e.stopPropagation();
  const lb = document.getElementById(id);
  lb.style.display="flex";
  setTimeout(()=>lb.classList.add("active"),20);
  activeLightbox=lb;
  images=Array.from(lb.querySelectorAll(".lightbox-content img"));
  currentIndex=0; showImage(currentIndex);
}
function closeGallery(id){
  const lb = document.getElementById(id);
  lb.classList.remove("active");
  setTimeout(()=>lb.style.display="none",400);
  activeLightbox=null;
}
function showImage(i){ images.forEach(img=>img.classList.remove("active"));
images[i].classList.add("active"); }
function changeImage(n){
  currentIndex+=n;
  if(currentIndex>=images.length)currentIndex=0;
  if(currentIndex<0)currentIndex=images.length-1;
  showImage(currentIndex);
}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&activeLightbox)closeGallery(activeLightbox.id);
  if(activeLightbox&&e.key==="ArrowRight")changeImage(1);
  if(activeLightbox&&e.key==="ArrowLeft")changeImage(-1);
});
document.addEventListener("click",e=>{
  if(activeLightbox&&!e.target.closest(".lightbox-content")&&!e.target.closest(".prev")&&!e.target.closest(".next"))
    closeGallery(activeLightbox.id);
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{backToTop.style.display=(window.scrollY>400)?"block":"none";});
backToTop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});

