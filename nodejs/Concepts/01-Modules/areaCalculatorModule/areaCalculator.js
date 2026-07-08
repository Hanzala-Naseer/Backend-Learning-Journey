function circleArea(radius) {
    console.log(Math.PI*radius*radius);
    
}

function rectangleArea(len,width){
    console.log(len*width);
}
function triangleArea(base,hyp){
    console.log(`${(1/2)*base*hyp}`);
}

module.exports={
    circleArea,
    rectangleArea,
    triangleArea
}