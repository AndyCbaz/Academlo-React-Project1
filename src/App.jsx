import phrases from "./assets/phrases.json"
import Section from "./components/Section"
import { useState } from 'react'


function App() {
  const randomFun = () => {
    let random = Math.floor(Math.random() * (phrases.length));
    return random;
  }
  const randomFont = () => {
    let random = Math.floor((Math.random() * (4)) + 1);
    return random;
  };

  const [count, setCount] = useState(randomFun()); 
  const [countf, setCountf] = useState(randomFont()); 

  const nextFunc = () => {
    const val = randomFun();
    const val2 = randomFont();
    setCount(val);
    setCountf(val2);
  };
  document.body.style.backgroundImage =`url(../src/assets/images/Fondo${countf}.jpg)`
  
  return (
      <Section
      author = {phrases[count].author}
      phrase = {phrases[count].phrase}
      other = {nextFunc}/>
  )
}

export default App
