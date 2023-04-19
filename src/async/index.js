const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Fn async'), 3000) : reject(new Error('Test Error'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Another fn end')
}

console.log('Before 1');
anotherFn();
console.log('After 1');