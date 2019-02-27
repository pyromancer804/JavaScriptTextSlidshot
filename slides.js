var quoteIndex = 0;
showQuotes();

function showQuotes() {

    quoteIndex++;
    if (quoteIndex > quotesArray.length) {quoteIndex = 1}    
    

    $('#quoteDiv').animate({'opacity': 0}, 2000, function () {
        $(this).text(quotesArray[quoteIndex-1]);
    }).animate({'opacity': 1}, 2000);

    setTimeout(showQuotes, 5000); // Change image every 2 seconds
}
