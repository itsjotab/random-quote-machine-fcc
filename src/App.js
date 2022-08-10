import './App.css';



fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes')
  .then(res => res.json())
  .then(user => {
    user.quotes.filter(quote => {
      console.log(quote)
  }
  )



function App() {
  return (
    <div id="quote-box" className="quote-box">SHOULD BE HORIZONTALLY CENTERED
      <div>
        <h1 id="text" className="tex">{this.state.text}</h1>
        <h6 id="author">Random Quote Author Should Appear Here</h6>
      </div>
      <div>
        <button id="new-quote" >FETCH A NEW QUOTE AND THE AUTHOR</button>
        <div>
          <a href="twitter.com/intent/tweet" target='/'>SHOULD tweeett! THE QUOTE</a>
        </div>
      </div>
    </div>
  );
}

export default App;
