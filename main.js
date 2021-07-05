function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lfv6x6YLq/model.json", modelloaded)
}

function draw() {
    image(video, 0, 0, 500, 500);
    classifier.classify(video, getResult);
}

function modelloaded() {
    console.log("The model has loaded");
}

function getResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("result_object").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}