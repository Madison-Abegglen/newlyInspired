import QuoteService from "./quote-service.js";

let qs = new QuoteService

function _drawQ(qData) {
  console.log(`Quote Data:`, qData)
  if (qData.author == null) {
    qData.author = "unknown"
  }
  document.getElementById('quote').innerHTML = `<h4 class="quote-c">"${qData.quote}"<br />${qData.author}</h4>`;
}

export default class QuoteController {
  constructor() {
    this.getQuote()
  }

  getQuote() {
    qs.getQuote(_drawQ)
  }
}
