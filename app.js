//header nav toggle mobile
let menuBtn = document.getElementById('btnMenu');
menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')    
})


// TypedJs
var typed = new Typed('.auto-input',{
    strings: ['Developer-web','Front-end','Freelancer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})


//Active link-icon state on scroll navbar
//get navlinks all
let navlinks = document.querySelectorAll('nav ul li a')

//get section all
let sections = document.querySelectorAll('section')
console.log(sections)

//function on scroll
window.addEventListener('scroll', function(e){
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



