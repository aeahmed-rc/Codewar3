// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:


function warnTheSheep(queue) {

for(let i=0;i<queue.length;i++){
if(i===queue.length-1 ){

return "Pls go away and stop eating my sheep"

}else if (queue[i]==='wolf'){
let m=queue.length-(i+1)
return `Oi! Sheep number ${m}! You are about to be eaten by a wolf!`
 }
 }
 }
