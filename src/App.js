import React from 'react';
import { useState } from 'react';
import './App.css';
import Editor from './componentes/Editor';
import Preview from './componentes/Preview';
import textDefault from './componentes/TextDefault';

function App() {

  const [input, setInput] = useState( textDefault );

  return (
    <div className= "Main">
      <h2 className= "editorTitle" >Editor</h2>
      <h2 className= "previewTitle" >Markdown previewer</h2>

      <Editor 
        entrada={ input }
        entradaCambio={( event )=> setInput( event.target.value )}
      />
      <Preview 
        content={ input }
      />
    </div>
  );
};

// dangerouwlySetInnerHTML={{ _html: marked(input, { Component: Component }) }}

export default App;
