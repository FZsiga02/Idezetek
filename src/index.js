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

    the.addEventListener('click', async () => {
        let response = await fetch ('quotes.json');
        let result = await response.json();

        orderShow(result.quotes);
        
    })

    length.addEventListener('click', async () => {
        let response = await fetch ('quotes.json');
        let result = await response.json();

        quantityShow(result.quotes);
    })

    count.addEventListener('click', async () => {
        let response = await fetch ('quotes.json');
        let result = await response.json();

        authorShow(result.quotes);
    })

    function show(quotes){
        quoteList.textContent = "";

        for (let q of quotes){
            let li = document.createElement('li');
            li.innerHTML = q.quote + " " + "<br>" + q.author + "<hr>";
            quoteList.appendChild(li);
        }
        
    }

    function orderShow(quotes){
        let array = [];
        for (let q of quotes){
            array.push (q.quote);
        }

        for (let i = 0; i < array.length; i++){
            var string = array[i];
            var substring = "the";
            var substring2 = "The";
            string = string.replaceAll(substring, '<b>' + substring + '</b>');
            string = string.replaceAll(substring2, '<b>' + substring2 + '</b>');
            array[i] = string;

        }

        orderList.textContent = "";

        for (let i = 0; i < array.length; i++){
            let li = document.createElement('li');
            li.innerHTML = array[i] + " " + "<hr>";
            orderList.appendChild(li);
        }
    }

    function quantityShow(quotes){
        let array = [];
        let array2 = [];
        for (let q of quotes) {
            array.push(q.quote)
        }
        for (let i = 0; i < array.length; i++){
            array2[i] = array[i].length;
        }
        lengthParagraph.append(array2.join(','));
    }

    function authorShow(quotes){
        let array = [];
        let counter = 0;
        for (let q of quotes){
            array.push(q.author);
        }
        for (let i = 0; i < array.length; i++){
            if(author.value == array[i]){
                counter++;
            }
        }
        quantity.value = counter;
    }
})
