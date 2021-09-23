// Write your solution here!

  var cats = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    var sliced = cats.slice()
    sliced.push(name)
    return sliced
  }

  function prependCat(name) {
    var sliced = cats.slice()
    sliced.unshift(name)
    return sliced
  }

  function removeLastCat() {
    var sliced = cats.slice()
    sliced.pop()
    return sliced
  }

  function removeFirstCat() {
    var sliced = cats.slice()
    sliced.shift()
    return sliced
  }
