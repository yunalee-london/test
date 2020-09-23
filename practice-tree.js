const me = {name:"Yuna", parents:[]}
const brother = {name:"Jay", parents:[]}
const mum = {name:"Younglim", parents:[]}
me.parents.push(mum)
const dad = {name:"Ilsoo", parents:[]}
brother.parents.push(dad)
const granma = {name:"Song"}
dad.parents.push(granma)
module.exports = [me, brother]