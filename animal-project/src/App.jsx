import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {

  return (

    <>
      <header>
        <main>
          <h1></h1>
          <div className='cards'>

          </div>
        </main>
      </header>
      <footer></footer>
    </>
  )





  /*const [count, setCount] = useState(0)
  
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
    
    
    
    
   /* 
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
}


export default App;
