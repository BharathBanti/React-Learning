/* function App() {
  return (
    <div>
      <Card name={"Bantis"} age={24} />
      <Card name={"Bharath"} age={20} />
      <Card name={"Rebal"} />
      <Card />
      <InternalProps name="Rebal" age={54} />
    </div>

    // <div>
    //   <Product
    //     name={'Laptop'}
    //     price={50000}
    //     features={['i5', '8GB RAM', '512 SSD', 1024]}
    //     onBuy={() => alert('Bought!')}
    //   />
    // </div>
  );
} */

const cardStyle = {
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 2px 10px 2px white",
  margin: "20px"
}

function Card({ children }) {
  return <div style={cardStyle}>{children}</div>;
}

function App() {
  return (
    <div>
      <Card>
        <h2>Hello Card!</h2>
        <p>I am the first Card component</p>
      </Card>

      <Card>
        <p>I am the second Card component, but I am not the same card</p>
        <h2>Hello Card2</h2>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

function Product({ name, price, features, onBuy }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <ul>
        {features.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <button onClick={onBuy}>Buy</button>
    </div>
  );
}

/* function Card({ name = 'Guest', age = 0 }) {
  return (
    <div>
      <h1>Hey {name}!</h1>
      <p>Your age is {age}</p>
    </div>
  );
} */

function InternalProps(props) {
  console.log(props);
  return;
}

export default App;
