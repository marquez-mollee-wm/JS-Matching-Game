
//var numberOfPics = 6;
//
//function generatePic(){
//    for ( var i = 1; i < numberOfPics; i++ ) {
//        var pic = document.createElement("img");
//        pic.setAttribute('src', 'pics2/nerdEmoji.png');
//        var leftOne = Math.random() * 500 /1;
//        var left= Math.round(leftOne);
//        var topOne = Math.random() * 500 /1;
//        var top= Math.round(topOne);
//
//        var leftScreen = document.getElementById("leftScreen");
//        if(topOne >= 200 && leftOne >= 200){
//            pic.style.top= top+"px";
//            pic.style.left= left+"px";
//            leftScreen.appendChild(pic);
//        }
//        else{
//            numberOfPics = numberOfPics + 1;
//
//        }
//
//
//
//    }
//
//    var theRightSide = document.getElementById("rightScreen");
//    pic = leftScreen.cloneNode(true);
//    pic.removeChild(leftSideImages.lastChild);
//    theRightSide.appendChild(pic);
//
//}


var leftScreen = document.getElementById('leftScreen');
var rightScreen = document.getElementById('rightScreen');
var numberOfPics = 5;
function generatePic() {
    for (var i = 0; i < numberOfPics; i++) {
        var pic = document.createElement('img');
        pic.src = "pics3/nerdEmoji.png";
        pic.style.top = Math.random() * 400 + "px";
        pic.style.left = Math.random() * 400 + "px";
        leftScreen.appendChild(pic);
    }
    var leftSideImages = leftScreen.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length - 1]);
    rightScreen.appendChild(leftSideImages);
}