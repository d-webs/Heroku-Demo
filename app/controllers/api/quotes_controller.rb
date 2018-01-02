class Api::QuotesController < ApplicationController
  def index
    @quote = Quote.all.sample
  end
end
