import './App.css'
import reactCore from './assets/react-core-concepts.png';
import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import Examples from './components/Examples';

function App() {
  return (
    <>
    <div>
      <Header
        imagem={reactCore}
      />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
    </>
  )
}

export default App
