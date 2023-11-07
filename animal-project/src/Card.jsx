const Card = () => {
  return (
    <div className="card">
      <img src="https://i.pinimg.com/564x/50/52/d9/5052d9a4e8eb406d775722d68b9370aa.jpg" alt="img of a view" />
      <h2>Title</h2>
      <button>Close</button>
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