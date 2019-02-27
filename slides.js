
alert(quotesArray[0]);

var quoteIndex = 0;
showQuotes();

function showQuotes() {
    
    var textCaption = document.getElementsByClassName("textCaption")[0];

    quoteIndex++;
    if (quoteIndex > quotesArray.length) {quoteIndex = 1}    

    textCaption.innerHTML = quotesArray[quoteIndex-1];

    setTimeout(showQuotes, 5000); // Change image every 2 seconds
}
