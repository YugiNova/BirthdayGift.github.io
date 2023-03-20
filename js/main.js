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
      swipperCard.style.animation = "show-swipper 2s forwards 2s";
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