function preload() {
    model = ml5.imageClassifier("DoodleNet");
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classify_canvas);
}

function draw() {
    strokeWeight(10);
    stroke("black");
    // console.log(mouseIsPressed);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clear_canvas() {
    background("white");
}

function classify_canvas() {
    model.classify(canvas, get_result);
}

function get_result(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        doodle_name = r[0].label;
        doodle_persentage = Math.round(r[0].confidence * 100) + "%";
        document.getElementById("sketch_name").innerHTML = "Sketch : " + doodle_name;
        document.getElementById("sketch_confidence").innerHTML = "Confidence : " + doodle_persentage;
        text_audio = new SpeechSynthesisUtterance(doodle_name);
        window.speechSynthesis.speak(text_audio);
    }
}

counter=0;
if (counter = 1) {
    console.log(counter);
    counter++;
}