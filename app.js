//header nav toggle mobile
let menuBtn = document.getElementById('btnMenu');
menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')    
})




let navlinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')


//function on scroll
window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                } 
            });
        }
    });
});

// TypedJs
var typed = new Typed('.auto-input',{
    strings: ['Developer-web','Front-end','Freelancer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})


