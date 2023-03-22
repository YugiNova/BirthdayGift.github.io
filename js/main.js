// VanillaTilt.init(document.querySelector(".your-element"), {
//     max: 25,
//     speed: 400
// });

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".calendar-card"));

const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
    shadow: false
  });

//count_down function
function count_down() {
    var to_count = "28 March," + Math.floor(new Date().getFullYear());
    var countDown = new Date(to_count).getTime();
    var now = new Date().getTime();
    var gap = countDown - now;
    
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    var d = Math.floor(gap / day);
    var h = Math.floor(gap % day / hour);
    var m = Math.floor(gap % hour / minute);
    var s = Math.floor(gap % minute / second);
    
    var d_day = document.querySelector('#day');
    var d_hour = document.querySelector('#hour');
    var d_min = document.querySelector('#min');
    var d_sec = document.querySelector('#sec');
    
    d_day.innerHTML = d;
    d_hour.innerHTML = h;
    d_min.innerHTML = m;
    d_sec.innerHTML = s;
    
    if (gap <= 0) { var text="Happy New Year" + " " + new Date().getFullYear(); var content=document.querySelector('.content'); var countDown=document.querySelector('.countDown'); countDown.classList.add('newyear'); content.classList.add('newyear'); content.innerHTML=text; } } setInterval(function () { count_down(); }, 1000);

    //eyes follow handle
    document.querySelector("body").addEventListener("mousemove", eyeball);
    function eyeball() {
      const eye = document.querySelectorAll(".eye");
      eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2((event.pageX - x), (event.pageY - y));
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
      });
    }

    //click to discover
    const clickToDiscover = () => {
      let circleTop = document.querySelector(".circle-top");
      circleTop.style.animation = "circle-top-move 4s forwards";

      let circleBottom = document.querySelector(".circle-bottom");
      circleBottom.style.animation = "circle-bottom-move 4s forwards";

      let circleMiddle = document.querySelector(".circle-middle");
      circleMiddle.style.animation = "circle-middle-move 4s forwards 2s";

      let starsky = document.querySelector("#wrapper-particles");
      starsky.style.animation = "sky-effect 3s forwards 2s";

      let calendarCard = document.querySelector(".container");
      calendarCard.style.animation = "disapear-calendar 3s forwards 1s";

      let swipperCard = document.querySelector(".card-slider");
      swipperCard.style.animation = "show-swipper 1s forwards 4s";


      setTimeout(()=>{
        circleTop.remove();
        circleBottom.remove();
        calendarCard.remove();
      },4000)
      
    } 

    //click to view wishes
    const wishesAnimation = (wishes) => {
      console.log(wishes.parentNode.parentNode.querySelector(".wishes"));
      wishes.style.maxHeight = "0px";
      let wishesContent = wishes.parentNode.parentNode.querySelector(".wishes");
      wishesContent.style.height = "80%";
    }

    const lastWishes = (wishes) => {
      let secondCover = wishes.parentNode.parentNode.querySelector(".second-cover"); 
      console.log(wishes);
      secondCover.style.animation = "showSecondCover 2s forwards";
      wishes.style.display = "none"
    }

    const secondCover = (wishes) => {
      let cover = wishes.parentNode;
      console.log(wishes);
      cover.style.display = "none";
      let lastWishes = cover.parentNode.querySelector(".last-wishes");
      lastWishes.style.height = "100%";
    }

    //custom particles
    particlesJS("wrapper-particles", {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubbles"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 100,
            "size": 10,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    //Swipper JS
    var swiper = new Swiper(".card-slider", {
      effect: "cards",
      grabCursor: true,
    });


    document.querySelectorAll('.btn-send-wishes').forEach(button => {

      let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
  
      button.addEventListener('click', e => {
          console.log("clicked");
  
          if(!button.classList.contains('active')) {
  
              button.classList.add('active');
  
              gsap.to(button, {
                  keyframes: [{
                      '--left-wing-first-x': 50,
                      '--left-wing-first-y': 100,
                      '--right-wing-second-x': 50,
                      '--right-wing-second-y': 100,
                      duration: .2,
                      onComplete() {
                          gsap.set(button, {
                              '--left-wing-first-y': 0,
                              '--left-wing-second-x': 40,
                              '--left-wing-second-y': 100,
                              '--left-wing-third-x': 0,
                              '--left-wing-third-y': 100,
                              '--left-body-third-x': 40,
                              '--right-wing-first-x': 50,
                              '--right-wing-first-y': 0,
                              '--right-wing-second-x': 60,
                              '--right-wing-second-y': 100,
                              '--right-wing-third-x': 100,
                              '--right-wing-third-y': 100,
                              '--right-body-third-x': 60
                          })
                      }
                  }, {
                      '--left-wing-third-x': 20,
                      '--left-wing-third-y': 90,
                      '--left-wing-second-y': 90,
                      '--left-body-third-y': 90,
                      '--right-wing-third-x': 80,
                      '--right-wing-third-y': 90,
                      '--right-body-third-y': 90,
                      '--right-wing-second-y': 90,
                      duration: .2
                  }, {
                      '--rotate': 50,
                      '--left-wing-third-y': 95,
                      '--left-wing-third-x': 27,
                      '--right-body-third-x': 45,
                      '--right-wing-second-x': 45,
                      '--right-wing-third-x': 60,
                      '--right-wing-third-y': 83,
                      duration: .25
                  }, {
                      '--rotate': 55,
                      '--plane-x': -8,
                      '--plane-y': 24,
                      duration: .2
                  }, {
                      '--rotate': 40,
                      '--plane-x': 45,
                      '--plane-y': -180,
                      '--plane-opacity': 0,
                      duration: .3,
                      onComplete() {
                          setTimeout(() => {
                              button.removeAttribute('style');
                              gsap.fromTo(button, {
                                  opacity: 0,
                                  y: -8
                              }, {
                                  opacity: 1,
                                  y: 0,
                                  clearProps: true,
                                  duration: .3,
                                  onComplete() {
                                      button.classList.remove('active');
                                  }
                              })
                          }, 2000)
                      }
                  }]
              })
  
              gsap.to(button, {
                  keyframes: [{
                      '--text-opacity': 0,
                      '--border-radius': 0,
                      '--left-wing-background': getVar('--primary-darkest'),
                      '--right-wing-background': getVar('--primary-darkest'),
                      duration: .1
                  }, {
                      '--left-wing-background': getVar('--primary'),
                      '--right-wing-background': getVar('--primary'),
                      duration: .1
                  }, {
                      '--left-body-background': getVar('--primary-dark'),
                      '--right-body-background': getVar('--primary-darkest'),
                      duration: .4
                  }, {
                      '--success-opacity': 1,
                      '--success-scale': 1,
                      duration: .25,
                      delay: .25
                  }]
              })
  
          }
  
      })
  
  });