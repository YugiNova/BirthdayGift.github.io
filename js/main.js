// VanillaTilt.init(document.querySelector(".your-element"), {
//     max: 25,
//     speed: 400
// });

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".calendar-card"));

const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
    shadow:true
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