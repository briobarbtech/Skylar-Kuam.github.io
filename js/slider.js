var images = [];
images[0] = '../assets/img/slider/image-0.jpg'
images[1] = '../assets/img/slider/image-1.jpg'
images[2] = '../assets/img/slider/image-2.jpg'
images[3] = '../assets/img/slider/image-3.jpg'
images[4] = '../assets/img/slider/image-4.jpg'
images[5] = '../assets/img/slider/image-5.jpg'

var imgIndex = 0;
var time = 5000

function setElements() {
    document.slider.src = images[imgIndex]
}
setElements()
function addIndex(){
    setInterval(()=>{
        setElements()
        if (imgIndex < 5) {
            imgIndex++
        }else{
            imgIndex = 0
        }
    },time)
}

export const slider = {
    setElements,
    addIndex
}
