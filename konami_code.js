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

  let index = 0

  document.body.addEventListener('keyup', function(e) {

    if(e.key === codes[index]){
      index ++
      if (index === codes.length){
        alert("Hurray!");
        index = 0
      }
    }
    else {
      console.log('nogo')
      index = 0
    }
  })
}
