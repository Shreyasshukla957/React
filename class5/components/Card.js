 function Card(props) {
  return (
    <div id="card" style={{ border: "2px solid black"  }}>
      <img
        src="https://images.unsplash.com/photo-1628972940339-6a4d9751c827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxwMHJQRDlDQzRnNHx8ZW58MHx8fHx8"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h1>Price: {props.Price}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}


export default Card;