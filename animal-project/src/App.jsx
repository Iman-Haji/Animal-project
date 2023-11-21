import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import { animals } from './animalsList'
import { useState } from 'react'

function App() {
  const [animalArray, setAnimal] = useState(animals);

  //remove animal
  function handlerClose(name) {
    const animalArrayFilter = animalArray.filter((animalArray) =>
      animalArray.name != name)
    setAnimal(animalArrayFilter);
  }
  /*
    //add like or remove like from animal by the animal name. 
    function likeHanwdler(nameOfAnimal, animalAct) {
      const anotherAnimalArray = animalArray.map(animals) => {
        if (animals.name == animalAct && nameOfAnimal == 'addApp') {
          return { likes: animals.likes, name: animals.name }
        } else if (animals.name == animalAct && nameOfAnimal == 'removeApp') {
          return { like: animals.likes, name: animals.name }
        }
        return { like: animals.likes, name: animals.name }
      }
      setAnimal(anotherAnimalArray);
    }*/

  return (
    <>
      <Header />
      <main>
        <h1>Animals</h1>
        <div className="cards">
          {animalArray.map((animals) =>
            <Card
              key={animals.name}
              {...animals}
              removelike={() => likeHandler(animals.name, 'remove')}
              close={() => handlerClose(animals.name)}
              addlike={() => likeHandler(animals.name, 'add')}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;

/*
const removeHandler = (likes) => {
    const animalArray = animals.filter((animals) => animals.likes !== likes);
    setAnimal(animalArray);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Animals</h1>
        <div className="cards">
          {animalArray.map((animals) =>
            <Card
              key={animals.name}
              {...animals}
              click={() => removeHandler(animals.name)}
            />
          )}
        </div>
      </main>
      <Footer />



const [count, setCount] = useState(0)
 
  return (
    <>
      <h1>animal</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) 
  
function BasicExample() {
return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
}
*/