import { React, useState } from "react";
import './App.css';
import Axios from "axios";



function App() {

  const [data, setData] = useState("");
  const [word, setWord] = useState("");

  function getWord() {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => {
      setData(response.data[0]);
      console.log(response, "fffffffffff")
    });
  }

  return (
    <div className="space-res">
      <div className="App Rectangle">
        <div>
          <h1>Dictionary</h1>
        </div>
        <div>
          <input className="input-word" type="text" placeholder="Type your word..." onChange={(e) => { setWord(e.target.value) }} />
          <button className="translate-btn" onClick={() => { getWord() }}>
            Translate
          </button>
        </div>
        {data ?
          <ul className="dictionary-list">
            <li>
              {data.word}
            </li>
            <li>
              {data.meanings[0].partOfSpeech}
            </li>
            <li>
              {data.meanings[0].definitions[0].definition}
            </li>
          </ul>
          : null
        }
      </div>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dictionary: [],
//       word: '',
//     };
//   }

// getWord = () => {
//   WordService.Dictionary(this.state.word).then((response) => {
//     // if (!response.status) {
//     this.setState({
//       dictionary: response
//     });
//     // }
//   });
// }

// handleChange = e => {
//   this.setState({
//     word: e.target.value,
//   });
// }

// render() {
//   return (
//     <div>
//       <input value={this.state.word} onChange={e => this.handleChange(e)} />
//       <button onClick={this.getWord(this.state.word)}>enter</button>
//     </div>
//   )
// }
// }

export default App;
