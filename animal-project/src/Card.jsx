const Card = () => {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/400x400/?animals" alt="unsplash random img" />
      <h2>Title</h2>
      <button>lose</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Card;

/*
      <img src='https://source.unsplash.com/400x400/?animals''${props.title}' alt="animals" />


<span className="material-symbols-outlined">mood</span>


<img src="https://i.pinimg.com/564x/50/52/d9/5052d9a4e8eb406d775722d68b9370aa.jpg" alt="img of a view" />

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