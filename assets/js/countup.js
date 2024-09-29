var countdownActive = true;

$(function () {
  timeFromEvent();
  $("#months .number").text(months);
  $("#days .number").text(days);
  $("#hours .number").text(hrs);
  $("#minutes .number").text(min);
  $("#seconds .number").text(sec);
  numberTransition("#months .number", months, 1000, "easeOutQuad");
  numberTransition("#days .number", days, 1000, "easeOutQuad");
  numberTransition("#hours .number", hrs, 1000, "easeOutQuad");
  numberTransition("#minutes .number", min, 1000, "easeOutQuad");
  numberTransition("#seconds .number", sec, 1000, "easeOutQuad");
  setTimeout(countDownTimer, 1001);
});

function timeFromEvent() {
  let currentDate = new Date().valueOf();
  let diff = (currentDate - targetDate) / 1000;
  diff = Math.max(0, diff); //ensure not negative
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
    $("#months .number").text(months);
    $("#days .number").text(days);
    $("#hours .number").text(hrs);
    $("#minutes .number").text(min);
    $("#seconds .number").text(sec);
    if (months === 0 && days === 0 && hrs === 0 && min === 0 && sec === 0) {
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
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function () {
        $(id).text(this.numberCount);
      },
    },
  );
}
