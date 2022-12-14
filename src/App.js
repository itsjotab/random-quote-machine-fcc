import { useState } from 'react';
import './App.css';
import axios from "axios";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";




function App() {
  
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
 

  function refreshPage() {
    window.location.reload(false);
  }

  const GetPosts = async () => {
    try {
      const userPosts = await axios.get(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`);

      userPosts.data.quotes.map(quote => {
        setText(quote.text);
        setAuthor(quote.author);
      }
      )

    } catch (err) {
      return err.message;
    }
  };

  const answer = GetPosts()

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div id="quote-box" className="quote-box">
      <div>
        <h2 id="text" className="text"><i>{text}</i></h2>
        <h4 id="author" className="author">- {author}</h4>
      </div>
      <div className='footer'>
          <a id="tweet-quote" className="twitter-share-button" href={`http://twitter.com/intent/tweet?text=${text} \n by: ${author}`} target='_top'><button className="tweet"><FaTwitter size="28px" color="white" /></button></a>
        <button id="new-quote" className="new-quote" onClick={refreshPage}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
