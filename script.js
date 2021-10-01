let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");
let bgClock = document.querySelector(".relogio");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

function updateClock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hour = now.getHours();
  let sDeg = (360 / 60) * seconds - 90;
  let mDeg = (360 / 60) * minutes - 90;
  let hDeg = (360 / 12) * hour - 90;
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
  sElement.style.transform = `rotate(${sDeg}deg)`;

  if (hour >= 0 && hour <= 23) {
    bgClock.classList.add("noite");
    body.classList.add("noite");
    h1.classList.add("noite");
  }
  if (hour >= 7 && hour <= 12) {
    bgClock.classList.add("manha");
    body.classList.add("manha");
    h1.classList.add("manha");
  }
  if (hour > 12 && hour <= 19) {
    bgClock.classList.add("tarde");
    body.classList.add("tarde");
    h1.classList.add("tarde");
  }
}
setInterval(updateClock, 1000);
updateClock();
