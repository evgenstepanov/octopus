// Use JavaScript to find window coordinates of corners pointed by with arrows.
// Your code should use DOM to get window coordinates of:
// Upper-left, outer corner (that’s simple).
// Bottom-right, outer corner (simple too).
// Upper-left, inner corner (a bit harder).
// Bottom-right, inner corner (there are several ways, choose one).

document.onclick = function(e) {
  // shows click coordinates
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

let coor = field.getBoundingClientRect();

let UpperLeft = `${coor.left} : ${coor.top}`;

let BottomRight = `${coor.right} : ${coor.bottom}`;

let UpperLeftInner = `${coor.left + field.clientLeft} : ${coor.top +
  field.clientTop}`;

let BottomRightInner = `${coor.left +
  field.clientLeft +
  field.clientWidth} : ${coor.top + field.clientTop + field.clientHeight}`;

console.log(UpperLeft);
console.log(BottomRight);
console.log(UpperLeftInner);
console.log(BottomRightInner);
