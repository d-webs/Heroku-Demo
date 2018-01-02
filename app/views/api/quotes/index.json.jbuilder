json.set! @quote.id do
  json.extract! @quote, :id, :text
end
