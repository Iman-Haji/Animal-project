const Card = () => {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/random" alt="unsplash random image" />
      <h2>Title</h2>
      <button>close</button>
      <button>-</button>
      <span className="material-symbols-outlined">mood</span>
      <button>+</button>
    </div>
  );
};

export default Card;

/*
function Card() {
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