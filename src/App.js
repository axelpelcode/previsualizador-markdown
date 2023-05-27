import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';

function App() {

  const textDefault = "# Markdown previewer \n## -Examples: \n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n};\n``` \nhttps://github.com/axelpelcode/previsualizador-markdown or [Github](https://github.com/axelpelcode/previsualizador-markdown)";

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
          <h2>Editor</h2>
            <textarea 
                id="editor"
                className="textarea"
                value={input}
                onChange={(event)=> setInput(event.target.value)}
                autoFocus
                 />
        </label>
      <div id="preview" >
        <h2>Preview</h2>
        <ReactMarkdown 
        className= "markdown"
        children= {input}
        components= {{ code: Component, }}
        remarkPlugins= {[  remarkGfm  ]} 
        
        >{input}</ReactMarkdown>
      </div>
   </div>
  );
};

// dangerouwlySetInnerHTML={{ _html: marked(input, { Component: Component }) }}

export default App;
