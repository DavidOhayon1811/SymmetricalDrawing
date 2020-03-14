let symmetry;
let saveButton;
let clearButton;
let strokeValue;
let xoff = 0;

function setup() {
  createCanvas(windowWidth - 75, windowHeight - 175);
  angleMode(DEGREES);
  saveButton = createButton('save');
  saveButton.class('saveBtn');
  saveButton.mousePressed(saveDrawing);
  
  clearButton = createButton('clear');
  clearButton.class('clearBtn');
  clearButton.mousePressed(clearCanvas);

  strokeValue = createSlider(1, 32, 4, 0.1);
  strokeValue.class('slider');
  strokeValue.addClass('strokeSlider');

  symmetry = createSlider(1, 36, 6, 1);
  symmetry.class('slider');
  symmetry.addClass('symmetrySlider');
  //colorMode(HSB);
}

function windowResized() {
  resizeCanvas(windowWidth - 75, windowHeight - 175);
}

function saveDrawing() {
  save('Symmetry drawing.png');
}
function clearCanvas() {
  clear();
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      let hu = map(sin(xoff), -1,1,0,255);
      xoff += 1;
      stroke(hu, 100);
      let angle = 360 / symmetry.value();
      for (let i = 0; i < symmetry.value(); i++) {
        rotate(angle);
        //let d = dist(mx, my, pmx, pmy);
        //let sw = map(d, 0, 16, 16, 2);
        let sw = strokeValue.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}