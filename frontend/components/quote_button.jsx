import React from 'react';

class QuoteButton extends React.Component {
  // constructor() {
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick() {
    return $.ajax({
      method: 'GET',
      url: 'api/quotes'
    })
  }

  render() {
    return(
      <div
        className='quote-button'
        onClick={this.handleClick}
        >
      </div>
    );
  }
}

export default QuoteButton;
