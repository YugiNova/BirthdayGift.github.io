// VanillaTilt.init(document.querySelector(".your-element"), {
//     max: 25,
//     speed: 400
// });

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".calendar-card"));

let lastWishesHtml = `<div class="card-slider">
    <div class="swiper-wrapper">

      <!-- Happy -->
      <div class="swiper-slide">
        <div class="gift-card fire">
          <div class="cover">
            <h2 onclick="wishesAnimation(this)"><span style="font-size: 15px;">>> Tap me <<</span><br>First <br> wishes</h2>
            <h1>Happy</h1>
          </div>
          <div class="wishes">
            <p>There is no value in life except what you choose to place upon it and no happiness in any place except what you bring to it yourself. Have a wonderful time and a very happy birthday!</p>
          </div>
        </div>
      </div>

      <!-- Luck -->
      <div class="swiper-slide">
        <div class="gift-card water">
          <div class="cover">
            <h2 onclick="wishesAnimation(this)"><span style="font-size: 15px;">>> Tap me <<</span><br>Second <br> wishes</h2>
            <h1>Luck</h1>
          </div>
          <div class="wishes">
            <p>An old saying said that: “Every day is a gift. It can be really amazing, but it can be disappointing also. However, I want to wish good luck in everything that happens in your life. May yours bring you only pleasant and helpful gifts.</p>
          </div>
        </div>
      </div>

      <!-- Success -->
      <div class="swiper-slide">
        <div class="gift-card wood">
          <div class="cover">
            <h2 onclick="wishesAnimation(this)"><span style="font-size: 15px;">>> Tap me <<</span><br>Third <br> wishes</h2>
            <h1>Success</h1>
          </div>
          <div class="wishes">
            <p>All successful people men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose. For great success you must have big dreams.</p>
          </div>
        </div>
      </div>

      <!-- Health -->
      <div class="swiper-slide">
        <div class="gift-card earth">
          <div class="cover">
            <h2 onclick="wishesAnimation(this)"><span style="font-size: 15px;">>> Tap me <<</span><br>Fourth <br> wishes</h2>
            <h1>Health</h1>
          </div>
          <div class="wishes">
            <p>There’s nothing more important than our good health – that’s our principal capital asset. I wishes you have lots of health and success in your life.</p>
          </div>
        </div>
      </div>

      <!-- Write for yourselft next year -->
      <div class="swiper-slide">
        <div class="gift-card metal">
          <div class="cover">
            <h2 onclick="lastWishes(this)" style="font-size: 14px;">
              I wishes you will keep both <span style="color:#cc8e35">healthy</span> and <span  style="color:#00b894">successful</span>, always get lots of <span  style="color:#3c67e3">luck</span>. And you will become the <span  style="color:#d63031">happiest</span> person in the world 
              And there is another wish, the last wishes...<br>
              >> Tap here <<
            </h2>
            <h2 class="second-cover" onclick="secondCover(this)">
              The last wishes is your wishes to yourself on your next year's birthday, to you in the future,... <br>
              It can be goals, promises, wishes for yourself next year and you can only revisit this day next year <br>
              >> now tap if you ready to make this last wish <<
            </h2>
          </div>
          <div class="last-wishes">
            <textarea id="your-last-wishes" cols="35" placeholder="Type your wishes here, only English...."></textarea>
            <!-- <input type="text" id="your-last-wishes"> -->
            <button class="btn-send-wishes">
              <span class="default">Send</span>
              <span class="success">Sent</span>
              <div class="left"></div>
              <div class="right"></div>
            </button>
          </div>
          <h2 class="last-cover">
            Your wishes have been sent to the future <br>
            You can only watch it again on your next year's birthday
          </h2>
        </div>
      </div>
    </div>
    </div>`;

const myAtropos = Atropos({
  el: ".my-atropos",
  // rest of parameters
  shadow: false,
});

//count_down function
var to_count = "28 March," + Math.floor(new Date().getFullYear());
function count_down() {
  
  var countDown = new Date(to_count).getTime();
  var now = new Date().getTime();
  var gap = countDown - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  var d_day = document.querySelector("#day");
  var d_hour = document.querySelector("#hour");
  var d_min = document.querySelector("#min");
  var d_sec = document.querySelector("#sec");

  d_day.innerHTML = d;
  d_hour.innerHTML = h;
  d_min.innerHTML = m;
  d_sec.innerHTML = s;

  if (d === -1) {
    let countdown = document.querySelector(".countdown-timer");
    countdown.style.display = "none";
    let discover = document.querySelector(".discover-birthday");
    discover.style.height = "140px";
    discover.style.padding = "10px";
  }
  else if(d < -1){
    to_count = "23 March," + Math.floor(new Date().getFullYear() + 1);
    console.log(to_count);
  }
}
setInterval(function () {
  count_down();
}, 1000);

//eyes follow handle
document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  const eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rotate + "deg)";
  });
}

//Handle Countdown - Discover
const countdownToogle = () => {
  let countdown = document.querySelector(".countdown-timer");
  countdown.style.animation = "2s hide-countdown forwards";
  let discover = document.querySelector(".discover-birthday");
  discover.style.animation = "2s show-discover forwards";
};
const showGift = () => {
  countdownToogle()
}
// setTimeout(()=>{
//   countdownToogle();
// },1000)
let birthday = new Date("2022-03-28");
let curDate = new Date();
const birthdayHandle = (birthDay, currDate) => {
  if (
    birthDay.getDate() === currDate.getDate() &&
    birthDay.getMonth() === currDate.getMonth()
  ) {
    countdownToogle();
  }
};
birthdayHandle(birthday, curDate);

//click to discover gift 2023
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

  //document.body.innerHTML.replace(`<div class="card-slider"></div>`,lastWishesHtml);

  let swipperCard = document.querySelector(".card-slider");
  swipperCard.style.animation = "show-swipper 1s forwards 4s";

  setTimeout(() => {
    circleTop.remove();
    circleBottom.remove();
    calendarCard.remove();
  }, 4000);
};

//click to view wishes
const wishesAnimation = (wishes) => {
  console.log(wishes.parentNode.parentNode.querySelector(".wishes"));
  wishes.style.maxHeight = "0px";
  let wishesContent = wishes.parentNode.parentNode.querySelector(".wishes");
  wishesContent.style.height = "80%";
};

const lastWishes = (wishes) => {
  let secondCover = wishes.parentNode.parentNode.querySelector(".second-cover");
  console.log(wishes);
  secondCover.style.animation = "showSecondCover 2s forwards";
  wishes.style.display = "none";
};

const secondCover = (wishes) => {
  let cover = wishes.parentNode;
  console.log(wishes);
  cover.style.display = "none";
  let lastWishes = cover.parentNode.querySelector(".last-wishes");
  lastWishes.style.height = "100%";
};

//custom particles
particlesJS("wrapper-particles", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubbles",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 100,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

//Swipper JS
var swiper = new Swiper(".card-slider", {
  effect: "cards",
  grabCursor: true,
});

//Last wishes handle

let wishesData = [];
axios.get("https://641ad7369b82ded29d4314bd.mockapi.io/wishes").then((res) => {
  console.log(res.data);
  wishesData = res.data;
  console.log(wishesData);
  if (wishesData.length !== 0) {
    let lastWishes = document.querySelector(".metal .last-wishes");
    lastWishes.remove();
    let metalCover = document.querySelector(".metal .cover");
    metalCover.remove();
    let lastCover = document.querySelector(".last-cover");
    lastCover.style.animation = "last-cover 2s forwards";
  } else {
    console.log(false);
  }
});

document.querySelectorAll(".btn-send-wishes").forEach((button) => {
  let getVar = (variable) =>
    getComputedStyle(button).getPropertyValue(variable);

  button.addEventListener("click", (e) => {
    let wishesContent = document.querySelector("#your-last-wishes").value;
    let d = new Date();
    let wishesTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let wishesDate = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    axios
      .post("https://641ad7369b82ded29d4314bd.mockapi.io/wishes", {
        date: wishesDate,
        time: wishesTime,
        wishes: wishesContent,
      })
      .then((res) => {
        console.log(res.data);
      });

    if (!button.classList.contains("active")) {
      button.classList.add("active");

      gsap.to(button, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 55,
            "--plane-x": -8,
            "--plane-y": 24,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -180,
            "--plane-opacity": 0,
            duration: 0.3,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute("style");
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove("active");
                    },
                  }
                );
              }, 2000);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-darkest"),
            "--right-wing-background": getVar("--primary-darkest"),
            duration: 0.1,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.1,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.4,
          },
          {
            "--success-opacity": 1,
            "--success-scale": 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      });
    }

    setInterval(() => {
      let lastWishes = document.querySelector(".metal .last-wishes");
      lastWishes.style.display = "none";
      let lastCover = document.querySelector(".last-cover");
      lastCover.style.animation = "last-cover 2s forwards";
    }, 1500);
  });
});
