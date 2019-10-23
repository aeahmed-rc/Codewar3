// surface area of box and volume

function getSize(width, height, depth){
let area=2*(width*height) + 2*(height*depth)+ 2*(width*height)
let vol=width*height*depth
let arr=[area,vol]
return arr
}
