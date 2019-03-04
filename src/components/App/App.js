import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Understanding from '../Feedback/Understanding'
import Supported from '../Feedback/Supported'
import Feeling from '../Feedback/Feeling'
import Comments from '../Feedback/Comments'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeedbackReview from '../FeedbackSummary/FeedbackReview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div> 
            
            <Route exact path='/understanding' component={Understanding} />
            <Route exact path='/support' component={Supported} />
            <Route exact path='/feeling' component={Feeling} />
            <Route exact path='/comments' component={Comments} />
            <Route exact path='/review' component={FeedbackReview} />
            <Link to="/feeling">Start</Link>
          </div>
        </Router>
       
        <br/>
      </div>
    );
  }
}

export default App;
