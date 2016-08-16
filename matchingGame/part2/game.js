
var numberOfPics = 6;
//
//function generateRandom() {
//    var num = Math.floor(Math.random() * 500);
//    return num;
//}

function generatePic(){
    for ( var i = 1; i < numberOfPics; i++ ) {
        var pic = document.createElement("img");
        pic.setAttribute('src', 'pics2/nerdEmoji.png');
        var leftOne = Math.random() * 500 /1;
        var left= Math.round(leftOne);
        var topOne = Math.random() * 500 /1;
        var top= Math.round(topOne);

        var leftScreen = document.getElementById("leftScreen");
        if(topOne >= 200 && leftOne >= 200){
            pic.style.top= top+"px";
            pic.style.left= left+"px";
            leftScreen.appendChild(pic);
        }
       else{
        numberOfPics = numberOfPics + 1;

        }



    }


}
