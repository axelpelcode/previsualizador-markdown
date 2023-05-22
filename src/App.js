import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {

  const [input, setInput] = useState();

  return (
   <div className="App">
        <label className="label">
            <textarea 
                id="editor"
                className="textarea"
                value={input}
                onChange={(event)=> setInput(event.target.value)}
                autoFocus
                 />
        </label>
        <ReactMarkdown className="markdown" >{input}</ReactMarkdown>
   </div>
  );
}

export default App;
