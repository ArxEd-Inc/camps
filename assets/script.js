const year = new Date().getFullYear();
const test = new Date(year, 9,31, 18).getTime();
const month = new Date().getMonth();

console.log(test);

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff = test - today;

  // math
  let days;
  let hours;
  let minutes;
  let seconds;
  
  if(diff <0 ){
    days = 0
  } else{
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  if(diff <0 ){
    hours = 0
  } else{
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  if(diff <0 ){
    minutes = 0
  } else{
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  }

  if(diff <0 ){
    seconds = 0
  } else{
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);