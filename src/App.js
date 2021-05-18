import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';

  //Random Quote Machine

// Api where i got my quotes from
const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
//function to get random quotes
function getNewQuote(quo) {
  return Math.floor(Math.random() * quo);
}
//react class component 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      idx: 0,
      display: true
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
 }
  //used fetch with coponentDidMount to call my API
  componentDidMount(){
    fetch(API).then(res => res.json())
    .then(res => {
      this.setState({
        quotes: res.quotes
      });
    });   
  }
  //getRandom method used for random quotes
   getRandomQuote() {
    this.setState({
      idx: getNewQuote(this.state.quotes.length)
    });
  }
  render() {
    //use of idx(index) to get random quotes
    const { quotes, idx, } = this.state;
    const quote = quotes[idx];
      return (
        //multi divs of <p>quotes & author with 2 buttons
         <div id="quote-box" class="p-3 mb-2 bg-success text-white">
              <div id="text">
              <div className="row">
                <div className="col-xs-8">
                  <div className="well">{
                quote && ( 
                  <div>
                   <p id="author" className="text-white center-left">" {quote.quote} "</p>
                    <p id="aut" className="center-white text-left">-- {quote.author} --</p>
                  </div>
                  )
                }
                  </div>
                    </div>
              </div>
             </div>
          <div id="btn">
          <button id="new-quote" className="btn text-white bg-dark btn-block" onClick={this.getRandomQuote}>New Quote</button>
          <div>
          <a href="twitter.com/intent/tweet" id="tweet" target="_blank"><button id="quote" className="btn text-white bg-dark btn-block">Twitter</button></a>
          </div>
          </div>
          </div>
      );
    }
  };

export default App;
