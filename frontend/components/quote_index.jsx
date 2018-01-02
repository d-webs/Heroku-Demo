import React, { Component } from 'react';
import { fetchQuote } from 'react';

class QuoteIndex extends Component {
  constructor() {
    super();

    this.state = { quote: '', loading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ loading: true }, () => {
      return $.ajax({
        method: 'GET',
        url: 'api/quotes'
      }).then(quote => {
        this.setState({ quote: quote.text, loading: false });
      });
    });
  }

  render() {
    return(
      <main className='quote-container'>
        {/*<img src={window.staticImages.headerImage} />*/}
        <div className='quote-button' onClick={this.handleClick}>
          GET A QUOTE
        </div>
        <div className='quote-div'>
          {this.state.quote}
        </div>
      </main>
    );
  }
}

export default QuoteIndex;
