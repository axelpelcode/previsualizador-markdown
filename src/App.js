import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';

function App() {

  const textDefault = "# Markdown previewer \r## -Code repository: \r### [Github](https://github.com/axelpelcode/previsualizador-markdown)"

  const [input, setInput] = useState(textDefault);

  const Component = ({children}) => {
    return (
      <SyntaxHighlighter language='javascript' style={docco}>
        {children}
      </SyntaxHighlighter>
    );
  };

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
      <div id="preview">
        <ReactMarkdown 
        className="markdown"
        children={input}
        components={{code: Component,}} 
        >{input}</ReactMarkdown>
      </div>
   </div>
  );
};



export default App;
