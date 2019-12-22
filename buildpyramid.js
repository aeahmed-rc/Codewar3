
Build a pyramid
function build (n){
  for(let l=1;l<=n;l++){
    let w=l*2-1
    let s=n-l
    console.log(' '.repeat(s) + 'o'.repeat(w)+' '.repeat(s))
  }
}
build(10)
