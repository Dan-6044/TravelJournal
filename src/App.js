
import './App.css';
import { Card } from './components/Card';
import Guide from './components/Guide';
import Hero from './components/Hero';
import data from './data';


function App() {
 
  return (
    
    <div className="App">

      <Hero/>
      
      <div className="container">
        <h1 className='h1'>Top places to visit in Tropical Highlands</h1>
        <div className="card-container">
            {data.map((item) => (
                <Card  
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}         
                />
              )
            )}
        </div>
     </div>
        <Guide />
      
  
    </div>
  );
}

export default App;
