import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Animals</h1>
        <div className="cards">
          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;

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