import './App.css'
import reactCore from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './Data';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './Data';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(topic){
    setSelectedTopic(topic)
  }
  
  return (
    <>
    <div>
      <Header
        imagem={reactCore}
      />
      <main>
        <section id='core-concepts'>
            <h2>Core do React</h2>
            <ul>
              {CORE_CONCEPTS.map(concept =>{
                return(
                <CoreConcept key={concept.id} {...concept}
                />)
              })}
            </ul>
        </section>
        <section id='examples'>
            <h2>Example</h2>
            <menu>
                <TabButton isSelect = {selectedTopic === "components"} onHandleClick={()=>handleSelect('components')}>Components</TabButton>
                <TabButton isSelect={selectedTopic === "jsx"} onHandleClick={()=>handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelect={selectedTopic === "props"} onHandleClick={()=>handleSelect('props')}>Props</TabButton>
                <TabButton isSelect={selectedTopic === "state"} onHandleClick={()=>handleSelect('state')}>State</TabButton>
            </menu>
        </section>
        {!selectedTopic && <p>Por favor selecione um tópico</p>}
        {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
        )}
      </main>
    </div>
    </>
  )
}

export default App
