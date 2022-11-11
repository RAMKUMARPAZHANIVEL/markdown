
import './App.css';
import Markdown from './components/markdown';
import Inputbox from './components/inputbox';
import { useState } from 'react';
function App() {
  
  const [markuplang,setMarkupLang] = useState("");
  return (
    <div className='main-container' >
      <Inputbox setMarkupData={setMarkupLang} />
      <Markdown markupData={markuplang}></Markdown>
    </div>
  );
}

export default App;
