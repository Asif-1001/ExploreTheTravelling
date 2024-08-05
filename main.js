// show button
const navMenu=document.getElementById('nav__menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

    //   menu show
    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
    }
    // menu hide
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }

    // remove menu mobile
const navLink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

// adding blur to header
const blurHeader=()=>{
    const header=document.getElementById('header')
    // when scroll is> 50 vh add blur header class
    this.scrollY>=50 ? header.classList.add('blur-header')
                    :header.classList.remove('blur-header');
}
window.addEventListener('scroll',blurHeader);

// Show scroll up*/
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    // when vh>350 add scrollup class
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);

// Scroll section active link
const sections=document.querySelectorAll('section[id]');
const scrollActive=()=>{
    const scrollY=window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId=current.getAttribute('id'),
              sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')

              if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
                sectionsClass.classList.add('active-link');
              }else{
                sectionsClass.classList.remove('active-link');
              }
    })
}

window.addEventListener('scroll',scrollActive);

// scroll reveal animation
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 3000,
    delay:400,
    reset:true  /*animation repeat*/
})
sr.reveal('.home-data, .explore-data,.explore-user,.footer-container' );
sr.reveal('.home-card',{delay:600,distance:'100px', interval:100});
sr.reveal('.about-data,.join-image',{origin:'right'});
sr.reveal('.about-image,.join-data',{origin:'left'});
sr.reveal('.popular-card',{interval:'200'});
