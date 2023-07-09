import React from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';

function App() {
  return <div>
      <Editor height="80vh" defaultLanguage="javascript" defaultValue="// some comment" theme='vs-dark' />
      <button>Compile</button>
    </div>;
}

export default App;
