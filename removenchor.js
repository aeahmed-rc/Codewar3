 Remove anchor from URL

function removeUrlAnchor(url){
console.log(url)
let rem='#'

return url.split(rem,1)[0]
// return url.s
  // TODO: comple
}
// another way to do this
// text = 'some string... this part will be removed.'
// head, sep, tail = text.partition('...')
//
// >>> print head
// some 
