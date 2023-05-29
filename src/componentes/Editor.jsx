import React from 'react';

const Editor = ({ entrada, entradaCambio }) => {
    return (
    <div className="areaTextArea">
      <label className="label">
        <textarea 
          id="editor"
          className="textarea"
          value={ entrada }
          onChange={ entradaCambio }
        />
      </label>
    </div>
    )
  };

  export default Editor;