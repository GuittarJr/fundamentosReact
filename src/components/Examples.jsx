import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../Data';

export default function Examples(){
      const [selectedTopic, setSelectedTopic] = useState();
  
        function handleSelect(topic){
            setSelectedTopic(topic)
        }
    return(
        <>
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
        </>
    )
}