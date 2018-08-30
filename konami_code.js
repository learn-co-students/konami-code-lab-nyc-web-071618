const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let counter = 0

  document.body.addEventListener("keydown", (keyval) => {
    const key = keyval.key

    counter = (codes[counter] === key) ? ++counter : 0


    if (counter === codes.length) {
      window.alert("Hurray!");
      counter = 0
    }

  });
}
