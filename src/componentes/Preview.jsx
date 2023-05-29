import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Resaltar from './Resaltador';
// import Remgith from 'remark-github-beta-blockquote-admonitions';

  const Preview = ({ contenido }) => {
    return (
      <div id="preview">
        <ReactMarkdown 
          className= "markdown"
          children= { contenido }
          components= {{ code: Resaltar }}
          remarkPlugins= {[  remarkGfm, ]}
          content={ contenido } 
        />
      </div>
    )
  }; 

  export default Preview;