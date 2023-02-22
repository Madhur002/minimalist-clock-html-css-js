let s = document.getElementById("seconds");
let m = document.getElementById("minutes");
let h = document.getElementById("hours");
let day = document.getElementById("day");
let date = document.getElementById("date");

// const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

setInterval(function() {
  let a = new Date();
  h.innerHTML = a.getHours() % 12;
  m.innerHTML = a.getMinutes();
  s.innerHTML = a.getSeconds();
  // date.innerHTML = a.getDate();
}, 1000);

setInterval(function() {
  let x = new Date();
  day.innerHTML = x.getDay()
  {
    if ((x.getDay()) == 0) {
      day.innerHTML = "Sun"
    }
    else if ((x.getDay()) == 1) {
      day.innerHTML = "Mon"
    }
    else if ((x.getDay()) == 2) {
      day.innerHTML = "Tue"
    }
    else if ((x.getDay()) == 3) {
      day.innerHTML = "Wed"
    }
    else if ((x.getDay()) == 4) {
      day.innerHTML = "Thu"
    }
    else if ((x.getDay()) == 5) {
      day.innerHTML = "Fri"
    }
    else {
      day.innerHTML = "sat"
    }
  }
}, 1000);

setInterval(function() {
  let y = new Date();
  date.innerHTML = y.getDate();
}, 1000);