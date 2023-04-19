import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

const data = {
    "title": "Escuela JS",
    "price": 100,
    "description": "Curso de JS",
    "categoryId": 1,
    "images": [
        "https://escuelajs.co/static/images/logo.png"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'));