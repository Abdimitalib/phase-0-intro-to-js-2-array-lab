// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
console.log(Cats)
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
cats.unshift(name);
}

function destructivelyRemoveLastCat() { 
    cats.pop(name);
}
function destructivelyRemoveFirstCat(){
    cats.shift(name);
}

function appendCat(name){
    return appendCat =[...cats,"Broom"]
}
function prependCat(name){
    return prependCat =['Arnold', ...cats]
}
function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}