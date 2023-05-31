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
      <h2 className="titleEditor">Editor markdown</h2>
      <Editor 
        entrada={ input }
        entradaCambio={( event )=> setInput( event.target.value )}
      />
      <h2 className="titlePreview">Preview</h2>
      <div className="preview-contenedor">
        <Preview 
          content={ input }
        />
      </div>
    </div>
  );
};

export default App;
