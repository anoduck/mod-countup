var countdownActive = true;

document.addEventListener('DOMContentLoaded', function() {
  timeFromEvent();
  $("#years .time-slot").text(yrs);
  $("#months .time-slot").text(months);
  $("#days .time-slot").text(days);
  $("#hours .time-slot").text(hrs);
  $("#minutes .time-slot").text(min);
  $("#seconds .time-slot").text(sec);
  numberTransition("#years .time-slot", yrs, 1000, "easeOutQuad");
  numberTransition("#months .time-slot", months, 1000, "easeOutQuad");
  numberTransition("#days .time-slot", days, 1000, "easeOutQuad");
  numberTransition("#hours .time-slot", hrs, 1000, "easeOutQuad");
  numberTransition("#minutes .time-slot", min, 1000, "easeOutQuad");
  numberTransition("#seconds .time-slot", sec, 1000, "easeOutQuad");
  setTimeout(countDownTimer, 1001);
});

function timeFromEvent() {
  let nowTime = new Date().valueOf();
  let offset = targetDate.getTimezoneOffset();
  let currentDate = (nowTime - offset);
  let diff = (currentDate - targetDate) / 1000;
  diff = Math.max(0, diff); //ensure not negative
  yrs = Math.floor(diff / (12 * 30.44 * 24 * 60 * 60));
  diff = diff - yrs * 12 * 30.44 * 24 * 60 * 60;
  months = Math.floor(diff / (30.44 * 24 * 60 * 60));
  diff = diff - months * 30.44 * 24 * 60 * 60;
  days = Math.floor(diff / (24 * 60 * 60));
  diff = diff - days * 24 * 60 * 60;
  hrs = Math.floor(diff / (60 * 60));
  diff = diff - hrs * 60 * 60;
  min = Math.floor(diff / 60);
  sec = Math.floor(diff % 60);
}

function countDownTimer() {
  if (countdownActive) {
    timeFromEvent();
    $("#years .time-slot").text(yrs);
    $("#months .time-slot").text(months);
    $("#days .time-slot").text(days);
    $("#hours .time-slot").text(hrs);
    $("#minutes .time-slot").text(min);
    $("#seconds .time-slot").text(sec);
    if (years === 0 && months === 0 && days === 0 && hrs === 0 && min === 0 && sec === 0) {
      countdownActive = false; // Stop countdown
    }
    if (countdownActive) {
      setTimeout(countDownTimer, 1000);
    }
  }
}

function numberTransition(id, endPoint, transitionDuration, transitionEase) {
  $({ numberCount: $(id).text() }).animate(
    { numberCount: endPoint },
    {
      duration: transitionDuration,
      easing: transitionEase,
      step: function () {
        $(id).text(Math.floor(this.time-slotCount));
      },
      complete: function () {
        $(id).text(this.time-slotCount);
      },
    },
  );
}