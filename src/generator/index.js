function* gen() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next().value); // { value: 3, done: false }

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Juan', 'Alma', 'Ramon', 'Luis']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());