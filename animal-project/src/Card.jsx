/*const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/400x400/?${props.name} `} alt="unsplash random img" />
      <h2>{name}</h2>
      <button>lose</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default Card;*/

function Card({ name, remove, plusLike, minusLike, likes }) {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/400x400/?${name}`} alt="Animal Images from Unsplash..." />
      <h2>{name}</h2>
      <button className="closeButton" onClick={{ remove }}>remove</button>
      <button onClick={plusLike}>+</button>
      <button onClick={minusLike}>-</button>
      <h3>{likes}</h3>
    </div>
  )
}

/*function Card1({ name, likes, remove, addlike, removelike }) {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/400x400/?${name}`}
        alt="Unsplash Animal Image..." />
      <h2>{name}</h2>
      <button className="closebtn" onClick={remove}>REMOVE</button>
      <button onClick={removelike}>-</button>
      <button onClick={addlike}>+</button>
      <span
        className="material-symbols-outlined">{
          likes < 0 ? icon = 'heart_broken' : icon = 'favourite'
        }</span>
      <h2>{likes}</h2>
    </div>
  )
}*/

export default Card;

/*




___________________________________________________________
const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/400x400/?${props.name} `} alt="unsplash random img" />
      <h2>{props.name}</h2>

      <button onClick={click}>DELETE</button>
      <button>-</button>
      <button>+</button>
      <button>{props.likes}</button>
    </div>
  );
};



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