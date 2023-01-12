import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Title from './Components/Header';
import Cards from './Components/Card';
import Footer from './Components/Footer';
import data from './Components/data.json';

function App() {
  let card1 = data[0];
  let card2 = data[1];
  let card3 = data[2];
  let footer = data[3];
  let title = data[4]

return (
  <div className='App'>
    <Card className="text-center fixed">
      <Title title={title.title}/>
      <Card.Body>
        <Cards url={card1.url} name={card1.name} description={card1.description}/>
        <Cards url={card2.url} name={card2.name} description={card2.description}/>
        <Cards url={card3.url} name={card3.name} description={card3.description}/>
      </Card.Body>
      <Footer className="text-muted" footer={footer.fDesc}/>
    </Card>
  </div>
  );
}

export default App;