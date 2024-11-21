//active hamburger menu


let menuIcon = document.querySelector('.menu-icon');
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});



//rotate text js code

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
`<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`).join("")


// switch between about buttons

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content-btn ");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach(content => content.style.display = "none");
        contents[index].style.display = "block";
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});



var mixer = mixitup('.portfolio-gallery',{
    selectors:{
        target:'.portfolio-box'
    },
    animation: {
        duration: 500
    }
})





// initialiizing swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints:{
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },

        1200:{
            slidesPerView:3,
            spaceBetween:20,
        }
    }
  });









//   skills progress bar 
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
    skillsCounter();
});

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);
        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
};




// side progress_bars

let calcScrollValue =()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue = Math.round((pos * 100)/calcHeight);
    console.log(ScrollValue);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#fff ${ScrollValue}%,#e6006d ${ScrollValue}%)`
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;







//active menu

let menuLi = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll('section');

function activeMenu() {
    let currentScroll = window.scrollY + window.innerHeight / 2; // Adjusted scroll position for better accuracy

    sections.forEach((sec, index) => {
        if (currentScroll >= sec.offsetTop && currentScroll <= sec.offsetTop + sec.offsetHeight) {
            menuLi.forEach(item => item.classList.remove("active"));
            menuLi[index].classList.add("active");
        }
    });
}

activeMenu(); // Call the function initially to set active menu item on page load
window.addEventListener("scroll", activeMenu); // Add event listener for scroll event


// scroll reveal 
ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true 
});

ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });



















































// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data using FormData object
//     var formData = new FormData(document.getElementById("contactForm"));

//     // Send form data to server
//     fetch("/your-server-endpoint", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             alert("Message sent successfully!");
//             // You can also redirect the user to a thank you page or perform other actions upon successful submission
//         } else {
//             alert("Failed to send message. Please try again later.");
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("An error occurred while sending the message. Please try again later.");
//     });
// });
















