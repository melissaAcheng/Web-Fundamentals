function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

// Grab the divs
var secondsHand = document.getElementById("seconds"); //<div id="seconds"></div>
var minutesHand = document.getElementById("minutes");
var hourHand = document.getElementById("hour");


setInterval( function() {
  // var time = getSecondsSinceStartOfDay();
  // console.log(time);
  moveHands();
}, 1000);


function moveHands () {
  // Find the local times
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  // console.log(`Hour: ${hour}`);
  // console.log(`Minute: ${minute}`);
  // console.log(`Second: ${second}`);

  // console.log(((hour*30) + 180) + (minute*1.2));
  
  // Hand movement per 1000 milliseconds
  secondsHand.style.transform = `rotate(${second*6+180}deg)`;
  minutesHand.style.transform = `rotate(${minute*6+180}deg)`;
  hourHand.style.transform = `rotate(${((hour*30)+180) + (minute*1.2)}deg)`;
}
