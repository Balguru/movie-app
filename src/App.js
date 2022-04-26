import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import  React from 'react'
import Navbar from './Navbar';
import Stream from './Stream';
import Events from './Events';
import Plays from './Plays';
import Sports from './Sports';
import Footer from './footer';
import Movie from './movie';
import Natyam from './Natyam';
import Pelli from './Pelli';
import Story from './Story';
import Doctor from './Doctor';
import Samudram from './Samudram';
import Bachelor from './Bachelor';
import Sign from './Sign';
import Payment from './Payment';



const  App = ()  => {
  return (
    <div className="App">
      
     
     <BrowserRouter>
     <Navbar />
     
     <Switch> 
       <Route path="/" exact component ={Movie}  />
       <Route path="/stream" exact component={Stream} />
       <Route path="/events" exact component={Events} />
       <Route path="/plays" exact component={Plays} />
       <Route path="/sports" exact component={Sports} />
       <Route path="/natyam" exact component ={Natyam} />
       <Route path="/pelli" exact component ={Pelli} />
       <Route path="/story" exact component={Story} />
       <Route path="/doctor" exact component={Doctor} />
       <Route path="/samudram" exact component={Samudram} />
       <Route path ="/bachelor" exact component={Bachelor} />
       <Route path="/sign" exact component ={Sign} />
       <Route path="/payment" exact component = {Payment} />
       <Route render={({ history}) => (
    <button
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
      Click Me!
    </button>
  )} />
       

     </Switch>
     
     <Footer />
     </BrowserRouter>
      

     
      
    </div>
  )
}

export default App;

