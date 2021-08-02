import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';  

//css
import './main.css' 

//components
import Header from './components/Header'   
import Footer from './components/Footer'      

//pages
import Home from './pages/Home' 
import Company from './pages/Company';
import Solution from './pages/Solution';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">   
        <Header/>  
            <Switch>
              <Route path="/" exact component={Home} />     
              <Route path="/company" exact component={Company} />     
              <Route path="/solution" exact component={Solution} />     
              <Route path="/project" exact component={Project} />     
              <Route path="/blog" exact component={Blog} />     
              <Route path="/contact" exact component={Contact} />     
            </Switch>  
        <Footer/>    
      </div>
  </Router>
  );
}

export default App;
 