function choosePic () {
    var randomNum = Math.floor(Math.random() * pages.length);
    document.getElementById("pages").src = pages[randomNum];
    console.log("Current page: " + randomNum);
}
var pages = ["/images/BOM-pages/0004"];

let imgNum = [];
let imgDirectory = "/images/BOM-pages/0";
let imgExtension = ".jpg"

// Names for the pages range from 0024 - 0554 (with the exception of 0004)
for (i = 0; i < 530; i++) {
    imgNum.push(i + 24);
    if (i < 76) {
    pages.push(imgDirectory + 0 + imgNum[i] + imgExtension);

    } else {
    pages.push(imgDirectory + imgNum[i] + imgExtension);

    }
}
