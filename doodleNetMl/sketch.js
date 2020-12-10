let clearButton;
let canvas;
let doodleClassifier;
let resultDiv;
function setup() {
	canvas = createCanvas(800,800)
	clearButton = createButton('clear');
	clearButton.mousePressed(clearCanvas);
	background(190);

	doodleClassifier = ml5.imageClassifier('DoodleNet',modelIsReady)
	resultDiv = createDiv("modal loading!!!")	

}

function modelIsReady(){
	console.log("Modle is Ready!!!");
	doodleClassifier.classify(canvas,gotResult)
	
}
function gotResult(error,result){
	if(error){
		console.log(error)
	}else{
		console.log(result)
		let content =`${result[0].label}=${nf(result[0].confidence*100,2,0)}</br>${result[1].label}=${nf(result[1].confidence*100,2,0)}`
		resultDiv.html(content)
		doodleClassifier.classify(canvas,gotResult)

	}
}

function clearCanvas(){
	background(190);

}

function draw() {
	if(mouseIsPressed){
		strokeWeight(32);
		line(mouseX,mouseY,pmouseX,pmouseY)
	}
}