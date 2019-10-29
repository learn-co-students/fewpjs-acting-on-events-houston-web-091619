function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
   
  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
   
  if (left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}

function moveDodgerUp() {
  //console.log('moving up')
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
  //console.log('this is bottom on upclick ',bottom )
  
  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 4}px`;
  }
}

function moveDodgerDown() {
  //console.log('moving down')
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
  //console.log('this is bottom on downclick ',bottom )
   
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 4}px`;
  }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
  else if (e.key === "ArrowDown"){
    moveDodgerDown();
  }
  else if (e.key === "ArrowUp"){
    moveDodgerUp();
  }
});