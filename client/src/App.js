import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'reactstrap'
import AppNavBar from './components/AppNavBar'
import AddCompany from './containers/addCompany'
import CompanyList from './containers/company-list';
import {BrowserRouter,Route} from 'react-router-dom'
import AddReview from './containers/addReview'
import AddReviewForm from './containers/addReviewForm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
         <Container>
         <AppNavBar/>
         <Route path="/" exact component={CompanyList}/>
         <Route path="/addCompany" exact strict component={AddCompany}/>
         <Route path="/addReview/:id/:name" exact strict component={AddReview}/>
         <Route path="/addReviewForm/:id" exact strict component={AddReviewForm}/>
         </Container>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
