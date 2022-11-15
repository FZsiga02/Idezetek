import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

document.addEventListener('DOMContentLoaded', () => {
    let allQuotes = document.getElementById('allQuotes');
    let the = document.getElementById('the');
    let length = document.getElementById('length');
    let count = document.getElementById('count');
    let author = document.getElementById('author');
    let quantity = document.getElementById('quantity');
    let quoteList = document.getElementById('quoteList');
    let orderList = document.getElementById('orderList');
    let lengthParagraph = document.getElementById('lengthParagraph');
    
    allQuotes.addEventListener('click', async () => {
        let response = await fetch ('quotes.json');
        let result = await response.json();
        let order = result.quotes.sort(function(a, b){
            let first = a.author.toUpperCase();
            let second = b.author.toUpperCase();

            if (first < second){
                return -1;
            } else if (first > second){
                return 1;
            } else {
                return 0;
            }
        })
        show(order);
    })

    function show(quotes){
        quoteList.textContent = "";

        for (let q of quotes){
            let li = document.createElement('li');
            li.innerHTML = q.quote + " " + "<br>" + q.author + "<hr>";
            quoteList.appendChild(li);
        }
        
    }
})
