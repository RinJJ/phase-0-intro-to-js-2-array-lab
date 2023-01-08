// Write your solution here!
const cats = [];

cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
   const lastCats = [...cats, name];
   return lastCats;
}

function prependCat(name) {
    const firstCats = [name, ...cats];
    return firstCats;
}

function removeLastCat(removeLast) {
    const cutLastCat = cats.slice(0, 2)
    return cutLastCat
}

function removeFirstCat(removeFirst) {
    const cutFirstCat = cats.slice(1)
    return cutFirstCat
}