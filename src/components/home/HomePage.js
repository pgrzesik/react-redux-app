import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>React-redux-app</h1>
        <p>React, Redux and React Router app. </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
