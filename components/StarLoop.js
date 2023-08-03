import AddStar from "../components/AddStar";

export function starLoop() {
  // Create a star on a timeout function up to the max in the for loop
  let i;

  for (i = 1; i <= 200; i++) {
    (function (i) {
      var rand = Math.round(Math.random());

      setTimeout(function () {
        AddStar();
      }, Math.abs(rand) + 100);
    })(i);
  }
}
if (typeof window !== "undefined") {
  document.onload = starLoop();
}
export default starLoop;
