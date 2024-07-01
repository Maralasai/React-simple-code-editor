// src/CodeEditor.js
import React, { useState, useEffect,useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript'; // Import the language you want to highlight
import './CodeEditor.css';

const initialCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, 
document.getElementById("root"));
`;
const CodeEditor = () => {
  const [code, setCode] = useState(initialCode);
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll(codeRef.current);
  }, [code]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className='container-editor-area'>
    <div className="code-editor">
      <textarea
        value={code}
        onChange={handleChange}
        placeholder="Type some code..."
        autoCapitalize="off"
        autoComplete='off'
        autoCorrect="off"
        data-gramm="false"
        className="code-input"
        spellCheck="false"
      />
      <pre className="code-output">
      <code ref={codeRef} className="language-javascript">
        {code}
      </code>
    </pre>
    </div>
    </div>
  );
};

export default CodeEditor;
