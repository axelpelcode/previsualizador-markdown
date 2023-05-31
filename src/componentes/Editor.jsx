import React from 'react';

const Editor = ({ entrada, entradaCambio }) => {
    return (
    <div className="textArea">
      <label className="label">
        <textarea 
          id="editor"
          value={ entrada }
          onChange={ entradaCambio }
        />
      </label>
    </div>
    )
  };

  export default Editor;