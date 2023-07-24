// Set the date we're counting down to
var today = new Date();
var countDownDate = new Date(today.getTime() + (1 * 60 * 60 * 1000));

// Update the count down every 1 second
var x = setInterval(function() {


  // Get today's datetime
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = seconds + "s ";
    
  // If the count down is over, remove photo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = ""; 
  }
}, 1000);
</script>


<p id="timer" onclick="myFunction()">+</p>

<script>
function myFunction() {

clearInterval(x);

  document.getElementById("timer").innerHTML = "New Time";
  
  
}
