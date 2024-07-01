import React from 'react'
import CodeEditor from './CodeEditor';
import './App.css';

function App()
{
  return(
    <div className="container">
    <div className="container_content">
    <h1>react-simple-code-editor</h1>
    <p>A simple no-frills code editor with syntax highlighting.</p>
    <a class="button" href="https://github.com/Maralasai/React-simple-code-editor">GitHub</a>
    <CodeEditor/>
    </div>
    </div>
  )
}
export default App;