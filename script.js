const quoteBox = document.getElementById("quote");

async function fetchQuote() {
  try {
    const response = await fetch ("https://dummyjson.com/quotes/random")

    if (!response.ok) {
      throw new Error('Could not get quote. Try again!')
    }

    const quoteObject = await response.json()
    quote = quoteObject.quote

    quoteBox.textContent = quote

  } catch (error) {
    console.error(error);
  }
}

fetchQuote()
