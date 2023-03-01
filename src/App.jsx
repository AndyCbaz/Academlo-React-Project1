import phrases from "./assets/phrases.json"
import img from "./assets/fondos.json"
import Section from "./components/Section"
import { useState } from 'react'


function App() {
  const randomFun = () => {
    let random = Math.floor((Math.random() * (phrases.length-1))+1);
    return random;
  }

  const randomFont = () => {
    let random = Math.floor((Math.random() * (3 - 0 )) + 0);
    return random;
  };

  const [count, setCount] = useState(randomFun()); 
  const [countf, setCountf] = useState(randomFont()); 





  
  const nextFunc = () => {
    setCount(randomFun);  
    while(true){
      let a = randomFont(3,0);
      if(a != countf){
        setCountf(a);
        break;
      }
    }

  };
  document.body.style.backgroundImage =`url(${img[countf]})`
  
  return (
      <Section
      author = {phrases[count].author}
      phrase = {phrases[count].phrase}
      other = {nextFunc}/>
  )
}

export default App
