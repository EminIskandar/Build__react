import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';  

//css
import './main.css' 

//components
import { Header, Footer } from 'components' 

//pages
import { Home, Company, Solution, Project, Blog , Contact } from 'page'

function App() {
  return (
    <Router>
      <>   
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
      </>
  </Router>
  );
}

export default App;
 