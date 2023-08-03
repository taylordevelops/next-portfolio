export function starLoop() {
  // Create a star on a timeout function up to the max in the for loop

  for (i = 1; i <= 200; i++) {
    (function (i) {
      var rand = Math.round(Math.random());

      setTimeout(function () {
        addStar();
      }, Math.abs(rand) + 100);
    })(i);
  }
}
