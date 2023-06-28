import './App.css'
import FortuneCookie from './components/Cardgalleta'
import phrase from './data/phrases.json'
import { useState } from 'react'

function App() {
  const images = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg']
  const [index, setIndex] = useState(0)
  const [ran, setRan] = useState(0)

  const ranBack = () => setRan((ran + 1) % images.length)

  const random = () => {
    const aleatory = Math.floor(Math.random() * phrase.length);
    setIndex(aleatory);
  }

  const handleButtonClick = () => {
    ranBack();
    random();
  }

  document.body.style = `background-image: url(${images[ran]})`

  return (
    <article className='Boxify'>
      <h1>Galleta de la Fortuna</h1>
      <FortuneCookie data={phrase[index]} />
      <div className='Bton_phrase'>
        <button onClick={handleButtonClick}>
          <h2>Ver más</h2>
        </button>
      </div>
    </article>
  )
}

export default App;
