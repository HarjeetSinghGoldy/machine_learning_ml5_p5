let mobilenet;
let imageObj;

async function setup() {
	createCanvas(640, 480);
	imageObj = createImg('/images/penguine.jpeg',function(){
		console.log("Image ready!!!")
	image(imageObj,0,0,width,height)
	})
	imageObj.hide()
	background(0);
	mobilenet = ml5.imageClassifier('MobileNet',function(){
		console.log("Model is ready!!!")
		mobilenet.predict(imageObj,function(error,result){
			if(error){
				console.log("EEEEEEEEEE",error)
			}else{
				console.log(result)
			}
		})
	})

	

}

