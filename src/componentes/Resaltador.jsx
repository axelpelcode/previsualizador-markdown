import React from 'react';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Resaltar = ({ children }) => {
    return (
      <SyntaxHighlighter language='javascript' style={ dark }>
        { children }
      </SyntaxHighlighter>
    );
  };  

 export default Resaltar;