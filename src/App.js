import { useState } from 'react';
import './App.css';
import axios from "axios";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";




function App() {
  
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [refresh, setRefresh] = useState(true)

  function refreshPage() {
    window.location.reload(false);
  }

  const GetPosts = async () => {
    try {
      const userPosts = await axios.get(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`);
      console.log(userPosts)
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

  const url = `http://twitter.com/intent/tweet?text=${text}`

  return (
    <div id="quote-box" className="quote-box">
      <div>
        <h2 id="text" className="text"><i>{text}</i></h2>
        <h4 id="author" className="author">- {author}</h4>
      </div>
      <div className='footer'>
        <button className="tweet">
          <a className="twitter-share-button" href={url} target='_top'><FaTwitter size="28px" color="white" /></a>
        </button>
        <button id="new-quote" className="new-quote" onClick={refreshPage}>New Quote</button>
      </div>
      <script crossorigin src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;
