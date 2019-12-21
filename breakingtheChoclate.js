// Breaking chocolate problem

// 1*1 = 0 breaks 2*1=(1 break) so the breaks are n*m-1
function breakChocolate(n,m) {
if(n*m<=1){
 return 0;
}else if(n*m>1){
let res=(n*m)-1
 return res
 }
}
