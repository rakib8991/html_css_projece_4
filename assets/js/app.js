    // Mouse Cursor Element 
    
    // set the starting position of the cursor outside of the screen
    let clientX = 100;
    let clientY = 100;
    const innerCursor = document.querySelector(".cursor--small");
    const outerCursor = document.querySelector(".cursor--canvas");
    const navItem = document.querySelectorAll(".nav-links li");
    const button = document.querySelectorAll('.btn');
    const workColumns = document.querySelectorAll('.work-columns-1');   
    const show = document.querySelectorAll('.show');

    navItem.forEach(link=>{
        link.addEventListener('mouseover',()=>{
            innerCursor.classList.add('cursor-gorw');
            outerCursor.classList.add('opacity-none');
           link.querySelector('a').classList.add('link-hover');
        });
        link.addEventListener('mouseout',()=>{
            innerCursor.classList.remove('cursor-gorw');
            outerCursor.classList.remove('opacity-none');
            link.querySelector('a').classList.remove('link-hover');
        });
    });
    button.forEach(link=>{
        link.addEventListener('mouseover',function(){
            innerCursor.classList.add('cursor-gorw');
            outerCursor.classList.add('opacity-none');
        });
        link.addEventListener('mouseout',function(){
            innerCursor.classList.remove('cursor-gorw');
            outerCursor.classList.remove('opacity-none');
        });
    });
    
    workColumns.forEach(link=>{
        link.addEventListener('mouseover',function(){
            link.querySelector('.work').classList.add('show');
            document.addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
                document.querySelector('.show').style.transform = "translate("+e.clientX +"px,"+e.clientY+"px)";
              });
        });
        link.addEventListener('mouseout',function(){
            link.querySelector('.work').classList.remove('show');
            document.addEventListener("mousemove", e => {
                document.querySelector('.show').style.transform = "translate(0px,0px)";
              });
        });
    });


    // Work Sertion box Stik to cursor
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
        show.style.transform = "translate("+e.clientX +"px,"+e.clientY+"px)";
      });




  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
    innerCursor.style.transform = "translate("+e.clientX +"px,"+e.clientY+"px)";
    outerCursor.style.transform = "translate("+e.clientX +"px,"+e.clientY+"px)";
  });
    

  
    // --------------------
    //  Mobile Menu Toggle Start
    // --------------------

   function mobilemenu(){

        
        const mobileMenu = document.querySelector('.burger-menu');
        const maniMenu = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click',menuToggle);
        

        function menuToggle(){
            maniMenu.classList.toggle("menu-active");
            
            
            // Mobile Menu Text Change 
            if( mobileMenu.innerHTML == "+ menu"){
                mobileMenu.innerHTML = "- close";
            }else{
                mobileMenu.innerHTML = "+ menu";
            }

            //GSAP Element
             const tl=gsap.timeline({defaults:{duration:1}});
             //GSAP Animation Form translate -100% to translate 0%
             tl.fromTo(".nav-links li a",{x:"-50%"},{x:"0%",duration:0.5,stagger: 0.10});
        }


   }

   mobilemenu();
// --------------------
//  Mobile Menu Toggle Ends
// --------------------


// Burger Menu Button Fade IN Out Animation 
document.querySelector('.burger-menu').addEventListener('click',function(){
    gsap.from('.burger-menu',{opacity:0,duration:1,});
})

// Hero Section Slid IN Animation 
gsap.from('.front-image',{opacity:0,duration:1,y:-50,});
gsap.from('.front-content',{opacity:0,duration:1,y:-50,});
