
import './App.css';
import { Card } from './components/Card';
import Hero from './components/Hero';
import data from './data';


function App() {
 
  return (
    
    <div className="App">

      <Hero/>
      <div className="card-container">
      {data.map((item) => (
        <Card  
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}         
        />
      ))}
    </div>
    </div>
  );
}

export default App;
