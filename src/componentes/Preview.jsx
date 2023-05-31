import React from 'react';
import { marked, Renderer } from 'marked';
import hljs from 'highlight.js';
import {markedHighlight} from "marked-highlight";

marked.setOptions({
    breaks: true,
    mangle: false,
    headerIds: false,
  });

marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
}));

const renderer = new Renderer();
    renderer.link = function (href, title, text) {
        return `<a target="_blank" href="${href}">${text}</a>`;
    };

const Preview = ({content}) => (
  <div id="preview"
    dangerouslySetInnerHTML={{
        __html: marked(content, { renderer: renderer, })
    }}
  />
  );

  export default Preview;