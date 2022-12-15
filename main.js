// accessing the DOM
const quote_body = document.getElementById("quote");
const quote_author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getQuote = async () => {
    // access the api for the quotes
    let url = "https://type.fit/api/quotes";

    // fetch quotes from the api
    const response = await fetch(url);

    //  convert the response to json format
    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length)

    const quote = allQuotes[indx].text;

    let author = allQuotes[indx].author;

    if (author == null) {
        author = "Anonymous";
    }


    // updating the content of the DOM
    quote_body.innerHTML = quote;
    quote_author.innerHTML = author;

    //  tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text=Quote%20of%20the%20day!%0A"+quote+" - "+author+"%0ASource: https://soft-fox-c54221.netlify.app/";
}


getQuote();
