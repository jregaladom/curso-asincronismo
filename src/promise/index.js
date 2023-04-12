const promise = new Promise((resolve, reject) => {
    resolve('success');
});

const cows = 2;
const countCows = new Promise((resolve, reject) => {
    if (cows > 20) {
        resolve('success');
    } else {
        reject('error');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('final');
});

