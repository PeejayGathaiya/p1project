const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");



const apiUrl = 'https://api.quotable.io/random';
const getQuote = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const quote = data.content;
    const author = data.author || 'Unknown';

    quoteText.textContent = quote;
    authorName.textContent = author;
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'Oops! Something went wrong.';
    authorEl.textContent = '';
  }
}

// To add an event listener to the button, so as to have a new quote generated each time a button is clicked
document.getElementById("genQuote").addEventListener("click", getQuote)


getQuote();
