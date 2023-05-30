import React from 'react';
import Prism from 'prismjs';
import { marked, Renderer } from 'marked';

marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });
  
  const renderer = new Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  
  const Preview = ({content}) => (
    <div id="preview" 
      dangerouslySetInnerHTML={{
        __html: marked(content, { renderer: renderer })
      }}
    />
  );

  export default Preview;