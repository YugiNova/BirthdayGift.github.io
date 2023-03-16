// VanillaTilt.init(document.querySelector(".your-element"), {
//     max: 25,
//     speed: 400
// });

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".calendar-card"));

const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
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

      console.log(circleTop);
    }