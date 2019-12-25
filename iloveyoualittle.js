I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
let petals=["I love you","a little","a lot","passionately","madly","not at all"]
let r
if(nbPetals % 6===0){
return petals[5]
}else{
r=(nbPetals % 6)-1
return petals[r]
}
}
