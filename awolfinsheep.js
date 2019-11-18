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
