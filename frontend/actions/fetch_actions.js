export const fetchQuote = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/quote'
  })
}
